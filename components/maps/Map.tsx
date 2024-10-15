import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

type MapProps = {
    center: [number, number]
    zoom: number
    children: React.ReactNode
}


const Map:React.FC<MapProps> = ({center, zoom, children}) => {
  return (
    <MapContainer
        center={center}
        zoom={zoom}
        style={{height: '100%', width: '100%'}}
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">'
        />
        {children}
    </MapContainer>
  )
}

export default Map