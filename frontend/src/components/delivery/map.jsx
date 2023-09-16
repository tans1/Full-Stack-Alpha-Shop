import React, { useState } from 'react'
import LocationPicker from "./LocationPicker";

function Map() {
    const [location, setLocation] = useState(null);

    const handleLocationChange = (newLocation) => {
      setLocation(newLocation);
      console.log(location)
    };
  return (
    <div style={{color : "white", height:"442px"}}>
      <h1>Pick Location</h1>
      <LocationPicker onLocationChange={handleLocationChange} />
      <div></div>
    </div>
  )
}

export default Map
