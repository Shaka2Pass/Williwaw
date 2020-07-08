import React, { Component } from 'react';
// import Routes from '../Router/Routes.jsx';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './App.css';

const myIcon = L.icon({
  iconUrl:'marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});


class App extends Component {
  
  state = {
    lat: 48.275030,
    lng: -120.629552,
    zoom: 10,
  }

  render(){
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className={styles.Map} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default App;






  
