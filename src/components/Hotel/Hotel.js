import React from 'react';
import { Col, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';
import './Hotel.css';

const Hotel = (props) => {
    console.log(typeof(props));
    const hotel = props.type;
    console.log(hotel.name);
    
    return (
        <Row className="hotel">
            <Col>
                <img src={hotel.img} alt=""/>
            </Col>
            <Col>
                <h6>{hotel.name}</h6>
                <p  style={{fontWeight: "100", fontSize: "14px", letterSpacing: "1px", color: "grey"}}>4 guests  2 bedrooms  2 beds  2 baths <br/>
                With Air Conditioning <br/>
                Cancallation Flexibity Available</p>
                <Row>
                    <Col xs={4} style={{display: "flex"}}>
                        <img style={{height: "10px", width: "10px", marginTop:"3px", marginRight: "2px"}} src="https://i.ibb.co/yY8CLQn/star.png" alt=""></img>
                        <p  style={{fontWeight: "100", fontSize: "12px", letterSpacing: "1px", color: "black"}}>{hotel.rating}({hotel.rateNo})</p>
                    </Col>
                    <Col>
                        <h6 style={{float: "left"}}>BDT.{hotel.price}/<span style={{color:"grey",fontWeight: "100"}}>Night</span></h6>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Hotel;