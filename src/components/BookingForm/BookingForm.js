
import { render } from '@testing-library/react';
import React from 'react';
import './BookingForm.css'
import DatePick from '../DatePick/DatePick';
import { useHistory } from 'react-router-dom';
import fakeData from '../../fakeData';

const { useState } = require("react");
const { Form,  Button } = require("react-bootstrap");

function BookingForm(props) {
  
  const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }
    const place = fakeData.find(pd => pd.key == props.id)
    console.log(place.name);

  return (
    <div className="d-flex justify-content-center">
    <div className="book-box">
    <Form>
      
        <Form.Group controlId="validationCustom01">
          <Form.Label>Origin</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="From"
            defaultValue="Dhaka"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="To"
            defaultValue={place.name}
          />
          <DatePick></DatePick>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
     
      
      <Button onClick={() => handleBook(props.id)} className="book-button" type="submit">Start Booking</Button>
    </Form>
    </div>
    </div>
  );
}


export default BookingForm;