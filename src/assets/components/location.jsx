//import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import "mapbox-gl/dist/mapbox-gl.css";

export default function Location() {
  const navigate = useNavigate();
 // const [error, setError] = useState(null);

   // const mapContainer = useRef(null);
   // const map = useRef(null);
  // const mapRef = useRef();
  // const mapContainerRef = useRef();

  // useEffect(() => {
  //   mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'
  //   mapRef.current = new mapboxgl.Map({
  //     container: mapContainerRef.current,
  //   });
  //    return () => {
  //     mapRef.current.remove()
  //   }
  // }, []);

  

  return (
    <div>
      <h1>Location</h1>
      
    </div>
  );
}
