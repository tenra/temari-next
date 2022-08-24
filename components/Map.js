import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '500px',
  height: '500px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: 35.6425586,
          lng: 134.6341719,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
        >
          <InfoWindow
            onClose={this.onInfoWindowClose}
          >
            <div>
              <h1>name</h1>
            </div>
          </InfoWindow>
        </Marker>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6b-GionzsDZqm7rQ98mnqYhHE7IS3vGQ',
  language: 'ja'
})(MapContainer);
