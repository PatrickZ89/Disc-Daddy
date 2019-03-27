import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
require('dotenv').config();


class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        // currentLocation: {
        //     lat: lat,
        //     lng: lng
        //   },
        userLocation: {
            lat: 45,
            lng: -45,
        },
        courseLocation: {
            lat: 44.90721328,
            lng: -93.06371385,
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
                        lng: longitude,
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

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

    fetchPlaces(mapProps, map) {
        const { google } = mapProps;
        // const service = new google.maps.places.PlacesService(map);

    }

    render() {
        const { loading, userLocation } = this.state;
        const { google } = this.props;

        if (loading) {
            return <div>Disc Daddy Map is Loading...</div>;
        }

        return (

        <Map google={google}
            onClick={this.onMapClicked}
            initialCenter={userLocation} zoom={15}>
            <Marker onClick={this.onMarkerClick}
                name={'PRIME BABY YEAH'} 
                position={userLocation}
                />

            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>


        /* <Map google={google}
                // onReady={this.fetchPlaces}

                initialCenter={userLocation} zoom={15} />
            <Marker
                title="Location"
                id={1}
                position={userLocation}
                draggable={true}
                onDragend={this.moveMarker.bind(this)}
            >
                {/* <InfoWindow
                    visible={showInfoWindow}
                    style={styles.infoWindow}
                >
                    <div className={classes.infoWindow}>
                        <p>Click on the map or drag the marker to select location where the incident occurred</p>
                    </div>
                </InfoWindow> */
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ``
})(MapContainer);

