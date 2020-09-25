import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Hotel from '../Hotel/Hotel';
import NavOther from '../NavOther/NavOther';
import './HotelInfo.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const HotelInfo = () => {
    const {bedType} = useParams();
    const place = fakeData.find(pd => pd.key == bedType);
    console.log(place);
    return (
        <div className="container">
            <NavOther></NavOther>
            <hr/>
            <Row className="child">
                <Col className="colu" xs={6}>
                <p id="reduce" style={{fontWeight: "100", fontSize: "14px", letterSpacing: "1px", color: "grey"}}>{place.visited} people visited last week</p>
                <h4 style={{fontWeight: "700"}}>Stay in {place.name}</h4>
                <Hotel type={place.hotel1}></Hotel>
                <Hotel type={place.hotel2}></Hotel>
                <Hotel type={place.hotel3}></Hotel>

                </Col>
                <Col className="colu2" xs={6}>
                    <Map google={this.props.google} zoom={14}>
                    
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        
                    </InfoWindow>
                    </Map>
                </Col>
            </Row>
        </div>
    );
};



export default GoogleApiWrapper({
    apiKey: ("AIzaSyBDqX2C5etsaX0x1CkQxAIn1A2tzOA64-4")
  })(HotelInfo)