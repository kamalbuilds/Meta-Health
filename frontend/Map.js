import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
// import { Icon } from "leaflet";
import parkData from "./data/skateboard-parks.json";

function Map() {
    const [activePark, setActivePark] = useState(null);

    return (
        <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false} id="map">
            {parkData.features.map(park => (
                <Marker
                  key={park.properties.PARK_ID}
                  position={[
                    park.geometry.coordinates[1],
                    park.geometry.coordinates[0]
                  ]}
                  onClick={() => {
                    setActivePark(park);
                  }}
                  // icon={icon}
                />
            ))}
            {activePark && (
                <Popup
                    position={[
                        activePark.geometry.coordinates[1],
                        activePark.geometry.coordinates[0],
                    ]}
                    onClose={() => {
                        setActivePark(null);
                    }}
                >
                    <div>
                        <h2>{activePark.properties.NAME}</h2>
                        <p>{activePark.properties.DESCRIPTIO}</p>
                    </div>
                </Popup>
            )}
        </MapContainer>
    );
}

export default Map;
