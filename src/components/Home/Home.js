import React, { useState } from 'react';
import { Carousel, Col, Image, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Home.css';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/dd6c3ab82f637b8a22b758db4c74576d.jpg'
import img3 from '../../img/Sundarban_Tiger.jpg'
import cd1 from '../../img/Sajek.png';
import cd2 from '../../img/Sreemongol.png';
import cd3 from '../../img/sundorbon.png';
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';


const Home = () => {
    const [places, setPlaces] = useState(fakeData);
    console.log(typeof(places[0]));
    const first = places[0];
    const second = places[1];
    const third = places[2];
    console.log(fakeData)
    function clickEvent()
    {
        console.log("clicked")
    }
    

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          BOOK NOW
        </Tooltip>
      );
    
    return (
        <div>
            <div class="circle">
                <Navigation></Navigation>
                <div style={{float: "right", marginTop: "90px",marginRight: "10px", display: "flex"}} className="">
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                       
                        <div className="cd"  style={{backgroundImage: `url(${cd1})`}}>
                            
                            <Link to={"/details/"+1} style={{textDecoration: "none"}}><h3 className="card-text">Cox'sBazar</h3></Link>
                        </div>
                            
                        
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >   
                                 
                        <div className="cd"  style={{backgroundImage: `url(${cd2})`}}>
                        <Link to={"/details/"+2}  style={{textDecoration: "none"}}><h3 className="card-text">Srimangal</h3></Link>
                        </div>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >                    
                        <div className="cd"  style={{backgroundImage: `url(${cd3})`}}>
                        <Link to={"/details/"+3}  style={{textDecoration: "none"}}><h3 className="card-text">Sundarban</h3></Link>
                        </div>
                    </OverlayTrigger>
                </div>
            </div>
                <Carousel auto loop className="carousel slide " interval="2000">
                    <Carousel.Item >
                        <div className="bg1" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img1})`}}>
                            <div className="details">
                                <h1 style={{fontWeight: "700", fontSize: "62px", letterSpacing: "-2px"}}>COX'S BAZAR</h1>
                                <p style={{fontWeight: "100", fontSize: "14px", letterSpacing: "1px"}}> Cox's Bazar is a city, fishing port, tourism centre and <br/> district headquarters in southeastern Bangladesh. It is <br/>famous mostly for its long natural sandy beach, and it ...</p>
                                <Link to={"/details/"+1}  style={{textDecoration: "none"}}><button className="btn-login">Booking</button></Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="bg1" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img2})`}}>
                            <div className="details">
                                <h1 style={{fontWeight: "700", fontSize: "62px", letterSpacing: "-2px"}}>SRIMANGAL</h1>
                                <p style={{fontWeight: "100", fontSize: "14px", letterSpacing: "1px"}}> Madhobpur Lake is one of the main tourist attractions in the area, <br/> and is home to the Great White-Bellied Heron, the only confirmed <br/>site in Bangladesh.[6] The Baikka beel is also a nearby body of...</p>
                                <Link to={"/details/"+2}  style={{textDecoration: "none"}}><button className="btn-login">Booking</button></Link>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>  
                        <div className="bg1" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${img3})`}}>
                            <div className="details">
                                <h1 style={{fontWeight: "700", fontSize: "52px", letterSpacing: "-2px"}}>SUNDARBAN</h1>
                                <p style={{fontWeight: "100", fontSize: "14px", letterSpacing: "1px"}}> Cox's Bazar is a city, fishing port, tourism centre and <br/> district headquarters in southeastern Bangladesh. It is <br/>famous mostly for its long natural sandy beach, and it ...<br/>famous mostly for its long natural sandy beach, and it ...</p>
                                <Link to={"/details/"+3}  style={{textDecoration: "none"}}><button className="btn-login">Booking</button></Link>
                            </div>
                        </div>
                    </Carousel.Item>
                           
                </Carousel>
            </div>
    );
};

export default Home;