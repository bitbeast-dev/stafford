import { NextRequest, NextResponse } from 'next/server';
import { Order } from '@/types/restaurant';

// In-memory storage for orders
// In production, you'd want to use a proper database
const orders = new Map<string, Order>();

export async function POST(request: NextRequest) {
  try {
    const orderData: Order = await request.json();

    // Validate required fields
    if (!orderData.id || !orderData.restaurantId || !orderData.items || !orderData.customerInfo) {
      return NextResponse.json(
        { error: 'Missing required order data' },
        { status: 400 }
      );
    }

    // Validate customer info
    const { name, phone, email, address } = orderData.customerInfo;
    if (!name || !phone || !email || !address) {
      return NextResponse.json(
        { error: 'Missing required customer information' },
        { status: 400 }
      );
    }

    // Validate items
    if (!Array.isArray(orderData.items) || orderData.items.length === 0) {
      return NextResponse.json(
        { error: 'Order must contain at least one item' },
        { status: 400 }
      );
    }

    // Store the order
    orders.set(orderData.id, {
      ...orderData,
      orderTime: new Date(orderData.orderTime),
      estimatedDeliveryTime: new Date(orderData.estimatedDeliveryTime)
    });

    console.log(`New order placed: ${orderData.id} from ${orderData.restaurant.name}`);
    console.log(`Customer: ${orderData.customerInfo.name} - ${orderData.customerInfo.phone}`);
    console.log(`Total: $${orderData.total.toFixed(2)}`);

    return NextResponse.json({
      success: true,
      message: 'Order placed successfully',
      orderId: orderData.id,
      estimatedDeliveryTime: orderData.estimatedDeliveryTime
    });

  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');

    if (orderId) {
      // Get specific order
      const order = orders.get(orderId);
      if (!order) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        order
      });
    } else {
      // Get all orders (for admin/restaurant dashboard)
      const allOrders = Array.from(orders.values());
      return NextResponse.json({
        success: true,
        orders: allOrders,
        count: allOrders.length
      });
    }

  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');
    const { status } = await request.json();

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const order = orders.get(orderId);
    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    // Update order status
    const validStatuses = ['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid order status' },
        { status: 400 }
      );
    }

    const updatedOrder = { ...order, status };
    orders.set(orderId, updatedOrder);

    console.log(`Order ${orderId} status updated to: ${status}`);

    return NextResponse.json({
      success: true,
      message: 'Order status updated successfully',
      order: updatedOrder
    });

  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('orderId');

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const deleted = orders.delete(orderId);

    return NextResponse.json({
      success: true,
      message: deleted ? 'Order cancelled successfully' : 'Order not found',
      deleted
    });

  } catch (error) {
    console.error('Error cancelling order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
