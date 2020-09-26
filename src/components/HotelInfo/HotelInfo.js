
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Hotel from '../Hotel/Hotel';
import { MapContainer } from '../MapContainer/MapContainer';
import NavOther from '../NavOther/NavOther';
import './HotelInfo.css';
import Map from '../Map';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const HotelInfo = () => {
    const location = {
        address: "COX's BAZAR",
        lat: 21.426072,
        lng: 91.979017,
      } 
      const location1 = {
        address: "SREEMANGAL",
        lat: 24.306198, 
        lng: 91.730408,
      } 
      const location2 = {
        address: "SUNDARBANS",
        lat: 21.949692, 
        lng: 89.183350,
      } 
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
                    {
                        place.name === "COX'S BAZAR" &&
                        <Map location={location} zoomLevel={10}></Map>
                        
                    }
                    {
                        place.name === "SRIMANGAL" &&
                        <Map location={location1} zoomLevel={10}></Map>
                    }
                    {
                        place.name === "SUNDARBANS" &&
                        <Map location={location2} zoomLevel={10}></Map>
                    }
                </Col>
            </Row>
        </div>
    );
};



export default HotelInfo;