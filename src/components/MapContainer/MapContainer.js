import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '1000px',
  height: '1000px'
};

export class MapContainer extends Component {
  render() {
    return (
        <div style={{ height: '100px', width: '100px' }}>
            <Map
                google={this.props.google}
                zoom={14}
                initialCenter={
                {
                    lat: -1.2884,  
                    lng: 36.8233
                }
                }
            />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBVCmLTLkYM1hSunpJx5BnLRAx0mLWGfak'
})(MapContainer);