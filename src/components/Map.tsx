'use client';

import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { ChevronLeft } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { io, Socket } from 'socket.io-client';

// Fix for default markers in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom user icon
const userIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Other users icon
const otherUserIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface UserLocation {
  id: string;
  lat: number;
  lon: number;
  timestamp: number;
}

interface MapProps {
  onLocationUpdate?: (lat: number, lon: number) => void;
}

// Component to handle map centering
function MapController({ center }: { center: [number, number] | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, 15);
    }
  }, [center, map]);
  
  return null;
}

const Map: React.FC<MapProps> = ({ onLocationUpdate }) => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [otherUsers, setOtherUsers] = useState<UserLocation[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [userId] = useState(() => Math.random().toString(36).substr(2, 9));
  const watchIdRef = useRef<number | null>(null);

  // Initialize Socket.IO connection
  useEffect(() => {
    const socketInstance = io('http://localhost:4001');
    setSocket(socketInstance);

    // Handle connection events
    socketInstance.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    socketInstance.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error);
      console.warn('Make sure the Socket.IO server is running on port 4001');
    });

    socketInstance.on('disconnect', (reason) => {
      console.log('Disconnected from Socket.IO server:', reason);
    });

    // Listen for location updates from other users
    socketInstance.on('locationUpdate', (data: UserLocation) => {
      if (data.id !== userId) {
        setOtherUsers(prev => {
          const filtered = prev.filter(user => user.id !== data.id);
          return [...filtered, data];
        });
      }
    });

    // Clean up old user locations (remove users inactive for more than 30 seconds)
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setOtherUsers(prev => prev.filter(user => now - user.timestamp < 30000));
    }, 5000);

    return () => {
      socketInstance.disconnect();
      clearInterval(cleanupInterval);
    };
  }, [userId]);

  // Start watching user location
  useEffect(() => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      return;
    }

    const startWatching = () => {
      watchIdRef.current = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newLocation: [number, number] = [latitude, longitude];
          
          setUserLocation(newLocation);
          
          // Notify parent component
          if (onLocationUpdate) {
            onLocationUpdate(latitude, longitude);
          }

          // Send location to server via Socket.IO
          if (socket) {
            const locationData: UserLocation = {
              id: userId,
              lat: latitude,
              lon: longitude,
              timestamp: Date.now()
            };
            socket.emit('locationUpdate', locationData);
          }

          // Also send to API route as backup
          fetch('/api/location', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: userId,
              lat: latitude,
              lon: longitude,
            }),
          }).catch(error => {
            console.error('API location update failed:', error);
            // This is just a backup, so we don't need to show user errors
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
          let errorMessage = 'Unable to access location. ';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage += 'Location access was denied by user.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage += 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              errorMessage += 'Location request timed out.';
              break;
            default:
              errorMessage += 'An unknown error occurred.';
              break;
          }
          
          alert(errorMessage);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 1000
        }
      );
    };

    startWatching();

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, [socket, userId, onLocationUpdate]);

  if (!userLocation) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Getting your location...</p>
          <p className="text-sm text-gray-500">Please allow location access when prompted</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <MapContainer
        center={userLocation}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController center={userLocation} />
        
        {/* Current user marker */}
        <Marker position={userLocation} icon={userIcon}>
          <Popup>
            <div className="text-center">
              <strong>You are here 🚶‍♂️</strong>
              <br />
              <small>
                Lat: {userLocation[0].toFixed(6)}<br />
                Lon: {userLocation[1].toFixed(6)}
              </small>
            </div>
          </Popup>
        </Marker>

        {/* Other users markers */}
        {otherUsers.map((user) => (
          <Marker
            key={user.id}
            position={[user.lat, user.lon]}
            icon={otherUserIcon}
          >
            <Popup>
              <div className="text-center">
                <strong>Other User 👤</strong>
                <br />
                <small>
                  Last seen: {new Date(user.timestamp).toLocaleTimeString()}
                </small>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Status indicator and Order button */}
      <div className="absolute top-4 right-4 z-[1000] space-y-3">
        <div className="bg-white rounded-lg shadow-lg p-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Tracking</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {otherUsers.length} other user{otherUsers.length !== 1 ? 's' : ''} online
          </div>
        </div>
        
        <button
          onClick={() => window.location.href = '/order'}
          className="w-full bg-[#d7a13e] text-black  hover:cursor-pointer px-4 py-3 rounded-lg shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium text-sm flex items-center justify-center space-x-2"
        >
          
          <span>Order Food</span>
        </button>
      </div>
    </div>
  );
};

export default Map;
