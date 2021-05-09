import React, {useState, useRef} from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";



function Map() {
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState({ lat: 6.520598, lng: -75.285420 });
  const [zoom, setZoom] = useState(12);

  const addressRef = useRef();
  
  const [coord, setCoord] = useState({
    lat: '', 
    lng: ''
  })

  console.log(process.env.REACT_APP_GOOGLE_API)

  const libraries = ['places'];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    libraries
  });

  const options = {
    disableDefaultUI: true,
    zoomControl: true
  }

  const getCoord = (e) => {
    e.preventDefault();

    getGeocode({ address: addressRef.current.value })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
        setCenter({lat, lng});
        setZoom(15)
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  }

  if(loadError) return <div className="error">loading error</div>;
  if(!isLoaded) return <div className="text-center">loading map</div>;

  return  (
      <div className="map_wrapper">
      <form className="map_search">
        <div className="form_group">
          <input ref={addressRef} type="text"/>
          <button className="waves-effect waves-dark btn blue" onClick={e => getCoord(e)}>Busca</button>
        </div>
      </form>
      <GoogleMap
            // Store a reference to the google map instance in state
            onLoad={map => setMapRef(map)}
            // Save the current center position in state
            //onCenterChanged={() => setCenter(mapRef.getCenter().toJSON())}
            // Save the user's map click position
            center={center}
            zoom={zoom}
            options={options}
            onClick={e => setCoord({lat: e.latLng.lat(), lng: e.latLng.lng()})}
            clickableIcons={false}
            mapContainerStyle={{
              height: "50vh",
              width: "100%"
            }}
          >

          {coord && (
            <Marker position={{lat: coord.lat, lng: coord.lng}} />
          )}
      </GoogleMap>
      </div>
  ) 

}

function Search(){
  const {
    ready,
    value,
    suggestions: {status, data},
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: () => 6.520598, lng: () => -75.285420 },
      radius: 200 * 1000,
    }
  });

  return (
    <Combobox onSelect={(address) => {console.log(address)}}>
      <ComboboxInput 
        value={value} 
        onChange={e => setValue(e.target.value) } 
        disabled={!ready}
        placeholder='Ingresa la dirección'
      />
    </Combobox>
  )
}

export default Map