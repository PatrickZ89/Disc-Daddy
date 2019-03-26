import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
require('dotenv').config(); 


class MapContainer extends Component {

    state = {
      userLocation: {
        lat: 45,
        lng: -45,
      },
      loading: true
    };
  
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
  
          this.setState({
            userLocation: { 
              lat: latitude, 
              lng: longitude, 
            },
            loading: false,
          });
          new window.google.maps.Marker({
            position: { 
              lat: latitude, 
              lng: longitude ,
            },
            map: Map,
          });
        },
        () => {
          this.setState({ 
            loading: false 
          });
        }
      );
    }

    fetchPlaces(mapProps, map) {
        const {google} = mapProps;
        const service = new google.maps.places.PlacesService(map);
        
      }
  
    render() {
      const { loading, userLocation } = this.state;
      const { google } = this.props;
  
      if (loading) {
        return null;
      }
  
      return <Map google={google} 
                onReady={this.fetchPlaces}
                initialCenter={userLocation} zoom={15} />;
  
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: ``
  })(MapContainer);
  
