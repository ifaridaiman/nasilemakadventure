// components/Map.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import  { Map as LeafletMap } from "leaflet"; // Import Leaflet types


export default function LocatorMap({ userLocation, goTo }: { userLocation: [number, number] | null, goTo: (latLng: [number, number]) => void }
) {
  const [center, setCenter] = useState<[number, number]>([3.140853, 101.693207]); // Type for LatLng
  const mapRef = useRef<LeafletMap | null>(null); // Type for Leaflet map
  

  // Handle user pan to update the center position
  const HandleMapEvents = () => {
    const map = useMapEvents({
      move() {
        setCenter([map.getCenter().lat, map.getCenter().lng]);
      },
    });
    return null;
  };

  useEffect(() => {
    if (userLocation) {
      console.log("User Location: ", userLocation);
      setCenter(userLocation); // Update center when userLocation changes
      if (mapRef.current) {
        goTo(userLocation); // Call goTo when userLocation changes
      }
    }
  }, [userLocation, goTo]);

  return (
    <div>      
      <div className="w-96">
        <MapContainer
          center={center}
          zoom={7}
          style={{ height: "320px", width: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Add a Marker */}
          <Marker position={center}>
            <Popup>Current Location: Latitude {center[0]}, Longitude {center[1]}</Popup>
          </Marker>
          
          <HandleMapEvents />
        </MapContainer>
      </div>

      <p className="text-xs">
        Current Map Center: Latitude: {center[0].toFixed(5)}, Longitude:{" "}
        {center[1].toFixed(5)}
      </p>
    </div>
  );
}
