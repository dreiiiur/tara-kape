import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';

// Map component
export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 9,
        });
    });
    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}

