import React, { useEffect, useRef, useState } from 'react';

function LocationPicker({ onLocationChange }) {
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const google = window.google;

    if (!google) {
      console.error("Google Maps API not loaded.");
      return;
    }

    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 9.02, lng: 38.76 }, 
      zoom: 10, 
    });

    map.addListener('click', (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setSelectedLocation({ lat, lng });
      onLocationChange({ lat, lng });
    });
  }, [onLocationChange]);

  return (
    <div >
      <div ref={mapRef} style={{ width: '100%', height: '390px' }}></div>
      {/* {selectedLocation && (
        <p>Selected Location: Lat {selectedLocation.lat}, Lng {selectedLocation.lng}</p>
      )} */}

    </div>
  );
}

export default LocationPicker;
