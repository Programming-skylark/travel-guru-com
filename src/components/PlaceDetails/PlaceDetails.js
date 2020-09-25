import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import fakeData from '../../fakeData';
import './PlaceDetails.css';
import BookingForm from '../BookingForm/BookingForm';

const PlaceDetails = () => {
    const {placeKey} = useParams();
    const place = fakeData.find(pd => pd.key == placeKey);
    const img1 = place.image;
    
    return (
        <div>
            <div className="placeDiv" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img1})`}}>
                <Navigation></Navigation>
                <Row>
                    <Col style={{color: "white"}}>
                        <div  className="leftPart">
                            <h1 style={{fontWeight: "700", fontSize: "62px", letterSpacing: "-2px"}}>{place.name}</h1>
                            <p style={{fontWeight: "100", fontSize: "14px", letterSpacing: "1px"}}>{place.description}</p>
                        </div>
                        
                    </Col>
                    <Col className="">
                        <BookingForm id={placeKey}></BookingForm>
                        
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default PlaceDetails;