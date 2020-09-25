import React, { Component } from 'react'  
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Demo.css';
import header from '../../img/img1.jpg';
import logo from '../../img/imageedit_60_5835759210.png';
import Navigation from '../Navigation/Navigation';

export class Demo extends Component {  
        render() {  
    
      
    
                    return (   

                        <div >
                            <div class="circle">
                                <Navigation></Navigation>
                                <div className="row">
                                    <div className="col-md-6">
                                    <h1>Burj Al Arab</h1></div>
                                    <div className="col-md-6">
                                    <h2>A global icon of Arabian luxury</h2></div>
                                </div>
                             </div>
                        <Carousel auto loop  className="carousel slide"> 
                            <Carousel.Item >
                            <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`, height: '800px'}}>
                            
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div style={{backgroundColor: 'salmon', height: '500px'}}></div>
                            </Carousel.Item>
                           <Carousel.Item>  <div style={{backgroundColor: 'orchid', height: '500px'}}>Frame 3</div></Carousel.Item>
                           
                        </Carousel>


                        
                
                        </div>
    
                          
                    )  
    
            }  
    
    }  
    
      
    
    export default Demo  