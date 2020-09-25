import React from 'react';
import { FormGroup } from 'react-bootstrap';
import './DemoForm.css';

  

class DemoForm extends React.Component {

    constructor() {

    super();

    this.state = {

      input: {},

      errors: {}

    };

     

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

     

  handleChange(event) {

    let input = this.state.input;

    input[event.target.name] = event.target.value;

  

    this.setState({

      input

    });

  }

     

  handleSubmit(event) {

    event.preventDefault();

  

    if(this.validate()){

        console.log(this.state);

  

        let input = {};

        input["fname"] = "";
        input["lname"] = "";
        input["email"] = "";

        input["password"] = "";

        input["confirm_password"] = "";

        this.setState({input:input});

  

        alert('Demo Form is submited');

    }

  }

  

  validate(){

      let input = this.state.input;

      let errors = {};

      let isValid = true;

  

      if (!input["fname"]) {

        isValid = false;

        errors["fname"] = "Please enter your first name.";

      }
      if (!input["lname"]) {

        isValid = false;

        errors["lname"] = "Please enter your last name.";

      }

  

      if (!input["email"]) {

        isValid = false;

        errors["email"] = "Please enter your email Address.";

      }

  
/*
      if (typeof input["email"] !== "undefined") {

          

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(input["email"])) {

          isValid = false;

          errors["email"] = "Please enter valid email address.";

        }

      }
      */


      if (!input["password"]) {

        isValid = false;

        errors["password"] = "Please enter your password.";

      }
      else{
        if(input["password"].length<7)
      {
        isValid = false;

        errors["password"] = "Password must be at least 8 characters long";
      }
      }
      

  

      if (!input["confirm_password"]) {

        isValid = false;

        errors["confirm_password"] = "Please enter your confirm password.";

      }

  

      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

          

        if (input["password"] != input["confirm_password"]) {

          isValid = false;

          errors["password"] = "Passwords don't match.";

        }

      } 

  

      this.setState({

        errors: errors

      });

  

      return isValid;

  }

     

  render() {

    return (
    <div className="d-flex justify-content-center">

      <div className="form-box">
          <h5 style={{fontWeight: "700"}}>Create an acount</h5>
          <br/>

        <form onSubmit={this.handleSubmit}>

  

          <div class="form-group">

            <input 

              type="text" 

              name="fname" 

              value={this.state.input.fname}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="First Name" 

              id="fname" />

  

              <div style={{color: "#F9A51A"}}>{this.state.errors.fname}</div>

          </div>
          <div class="form-group">

            <input 

              type="text" 

              name="lname" 

              value={this.state.input.lname}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="Last name" 

              id="lname" />

  

              <div style={{color: "#F9A51A"}}>{this.state.errors.lname}</div>

          </div>

  

          <div class="form-group">

            <input 

              type="text" 

              name="email" 

              value={this.state.input.email}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="UserName or Email" 

              id="email" />

  

              <div style={{color: "#F9A51A"}}>{this.state.errors.email}</div>

          </div>

   

          <div class="form-group">

            <input 

              type="password" 

              name="password" 

              value={this.state.input.password}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="Password" 

              id="password" />

  

              <div style={{color: "#F9A51A"}}>{this.state.errors.password}</div>

          </div>

  

          <div class="form-group">

            <input 

              type="password" 

              name="confirm_password" 

              value={this.state.input.confirm_password}

              onChange={this.handleChange}

              class="form-control" 

              placeholder="Confirm Password" 

              id="confirm_password" />

  

              <div style={{color: "#F9A51A"}}>{this.state.errors.confirm_password}</div>

          </div>

              

          <input type="submit" value="Create an account" class="btn btn-light sign-button" />

        </form>
        <br/>
        <p style={{textAlign: "center"}}>Already have an account? <a href="#"> Sign in</a> </p>

      </div>
      </div>

    );

  }

}

  

export default DemoForm;