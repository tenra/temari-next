import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: "500px", position: "relative", width: "500px" }}
        zoom={15}
        initialCenter={{ lat: 35.6425586, lng: 134.6341719 }}
      >
        <Marker
          name="デイサービスセンターてまり"
          onClick={this.onMarkerClick}
          position={{ lat: 35.6425586, lng: 134.6341719 }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NEXT_PUBLIC_GMAP_APIKEY,
  language: 'ja'
})(MapContainer);
