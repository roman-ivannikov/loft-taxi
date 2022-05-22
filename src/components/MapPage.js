import React, { useRef, useEffect } from 'react';
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = 'pk.eyJ1IjoiZG82cGJpdTE5NzciLCJhIjoiY2wzaDJ5Y3BzMTd0NjNkcDhnYXN3Ym53NSJ9.ozHztLTRBjeidBPG3vrjXg';

const MapPage = () => {
  const mapContainerRef = useRef(null);

  const style = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100vh'
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [90.50008026687789, 56.2666187056609],
      zoom: 15,
      style: 'mapbox://styles/mapbox/streets-v11',
    });

    return () => map.remove();
  }, []);

  return (
    <div style={style} ref={mapContainerRef} />
  )
}

export default MapPage;

