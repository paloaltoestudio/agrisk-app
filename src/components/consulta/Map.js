import React, {useState} from 'react';
import { GoogleMap, useLoadScript, Marker, OverlayView, InfoWindow } from "@react-google-maps/api";



function Map() {
  
  const [location, setlocation] = useState({
    // Set Barcelona as default
    lat: 6.520598, 
    lng: -75.285420
  })
  const [coord, setCoord] = useState({
    lat: '', 
    lng: ''
  })

  const libraries = ['places'];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBHOIH-d5-JeEO9ivWlLst307ymMKnHG94',
    libraries
  });

  if(loadError) return <div className="error">loading error</div>;
  if(!isLoaded) return <div className="text-center">loading map</div>;

  return  (
    <div>
      {/* <p><strong>Coordenadas</strong> Latitud: {coord.lat} Longitud: {coord.lng}</p> */}
      <br/>
    <GoogleMap
        mapContainerStyle={{width: '100%', height: '400px'}}
        zoom={12}
        center={{ lat: location.lat, lng: location.lng }}
        clickableIcons={false}
        onClick={e => setCoord({lat: e.latLng.lat(), lng: e.latLng.lng()})}
  >

    {coord && (
      <Marker position={{lat: coord.lat, lng: coord.lng}} />
    )}
  </GoogleMap>
  </div>
  ) 
}

export default Map