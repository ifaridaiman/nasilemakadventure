// components/Map.tsx
"use client";
import { useState, useRef } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import  { Map as LeafletMap } from "leaflet"; // Import Leaflet types

export default function Map() {
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

  return (
    <div>
      <h1>Pan the Map and Drop a Marker</h1>
      
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
