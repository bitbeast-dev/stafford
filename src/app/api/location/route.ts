import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for user locations
// In production, you'd want to use a proper database like Redis or MongoDB
interface UserLocation {
  id: string;
  lat: number;
  lon: number;
  timestamp: number;
}

// Store locations in memory (will reset on server restart)
const userLocations = new Map<string, UserLocation>();

// Clean up old locations every 30 seconds
setInterval(() => {
  const now = Date.now();
  const thirtySecondsAgo = now - 30000;
  
  for (const [id, location] of userLocations.entries()) {
    if (location.timestamp < thirtySecondsAgo) {
      userLocations.delete(id);
    }
  }
}, 30000);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, lat, lon } = body;

    // Validate input
    if (!id || typeof lat !== 'number' || typeof lon !== 'number') {
      return NextResponse.json(
        { error: 'Invalid input. Required: id (string), lat (number), lon (number)' },
        { status: 400 }
      );
    }

    // Validate coordinates
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      return NextResponse.json(
        { error: 'Invalid coordinates. Latitude must be between -90 and 90, longitude between -180 and 180' },
        { status: 400 }
      );
    }

    // Store the location
    const locationData: UserLocation = {
      id,
      lat,
      lon,
      timestamp: Date.now()
    };

    userLocations.set(id, locationData);

    console.log(`Location updated for user ${id}: ${lat}, ${lon}`);

    return NextResponse.json({
      success: true,
      message: 'Location updated successfully',
      data: locationData
    });

  } catch (error) {
    console.error('Error processing location update:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Return all active user locations
    const activeLocations = Array.from(userLocations.values());
    
    return NextResponse.json({
      success: true,
      locations: activeLocations,
      count: activeLocations.length
    });

  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const deleted = userLocations.delete(id);

    return NextResponse.json({
      success: true,
      message: deleted ? 'Location removed successfully' : 'User not found',
      deleted
    });

  } catch (error) {
    console.error('Error deleting location:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
