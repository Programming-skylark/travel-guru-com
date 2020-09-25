import React,{ useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App'

import './LoginForm.css';
import { useHistory, useLocation } from 'react-router-dom';

const LoginForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

      const switchForm = e =>{
        const createdUser = {...loggedInUser};
        createdUser.existingUser = !loggedInUser.existingUser;
        setLoggedInUser(createdUser);
      }

      const is_valid_email = email =>  /(.+)@(.+){2,}\.(.+){2,}/.test(email); 
        const hasNumber = input => /\d/.test(input);

        const createAccount = (event) => {
            if(loggedInUser.isValid){
              firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
              .then(res => {
                console.log(res);
                const createdUser = {...loggedInUser};
                createdUser.isSignedIn = true;
                createdUser.error = '';
                setLoggedInUser(createdUser);
              })
              .catch(err => {
                console.log(err.message);
                const createdUser = {...loggedInUser};
                createdUser.isSignedIn = false;
                createdUser.error = err.message;
                setLoggedInUser(createdUser);
              })
            }
            event.preventDefault();
            event.target.reset();
          } 

    const handleChange = e =>{
        const newUserInfo = {
          ...loggedInUser
        };
        //debugger;
        // perform validation
        let isValid = true;
        if(e.target.name === 'email'){
          isValid = is_valid_email(e.target.value);
        }
        if(e.target.name === "password"){
          isValid = e.target.value.length > 8 && hasNumber(e.target.value);
        }
    
        newUserInfo[e.target.name] = e.target.value;
        newUserInfo.isValid = isValid;
        setLoggedInUser(newUserInfo);
      }
    const signInUser = event => {
        if(loggedInUser.isValid){
          firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
          .then(res => {
            console.log(res);
            const createdUser = {...loggedInUser};
            createdUser.isSignedIn = true;
            createdUser.error = '';
            setLoggedInUser(createdUser);
            history.replace(from);
          })
          .catch(err => {
            console.log(err.message);
            const createdUser = {...loggedInUser};
            createdUser.isSignedIn = false;
            createdUser.error = err.message;
            setLoggedInUser(createdUser);
          })
        }
        event.preventDefault();
        event.target.reset();
      }
    return (
        <div className="d-flex justify-content-center">
            <div style={{display:loggedInUser.existingUser ? 'block': 'none'}} className="form-box">
                <h5 style={{fontWeight: "700"}}>Login</h5>
                <br/>
                <form onSubmit={signInUser}>
                    <div class="form-group">
                        <input class="form-control"  type="text" onBlur={handleChange} name="email" placeholder="UserName or Email" required/>
                    </div>
                    <div class="form-group">
                        <input class="form-control"  type="password" onBlur={handleChange} name="password" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="rememberMe"  id="remember"/>
                        <label style={{fontSize: "14px", marginLeft: "5px"}}  htmlFor="remember">Remember Me</label>
                        <p style={{fontSize: "14px", textDecoration: "underline", color: "#F9A51A", float: "right"}}>Forgot Password</p>
                    </div>
                    <input type="submit" value="Login" class="sign-button"/>
                </form>
                <br/>
                <p style={{textAlign: "center"}}>Don't have an account? <span style={{cursor: "pointer", fontSize: "14px", textDecoration: "underline", color: "#F9A51A"}} value='true' onClick={switchForm}> Create an account</span> </p>
            </div>


            <div style={{display:loggedInUser.existingUser ? 'none': 'block'}}  className="form-box">
                <h5 style={{fontWeight: "700"}}>Create an Acoount</h5>
                <br/>
                <form onSubmit={createAccount}>
                    <div className="form-group">
                        <input class="form-control" type="text" onBlur={handleChange} name="fname" placeholder="First Name" required/>
                    </div>
                    <div className="form-group">
                        <input class="form-control" type="text" onBlur={handleChange} name="lname" placeholder="Last Name" required/>
                    </div>
                    <div className="form-group">
                        <input class="form-control" type="text" onBlur={handleChange} name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <input class="form-control" type="password" onBlur={handleChange} name="password" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <input class="form-control" type="password" onBlur={handleChange} name="cPassword" placeholder="Confirm Password" required/>
                    </div>
                    <input type="submit" value="Create Account" class="sign-button"/>
                </form>
                <br/>
                <p style={{textAlign: "center"}}>Already have an account? <span style={{cursor: "pointer", fontSize: "14px", textDecoration: "underline", color: "#F9A51A"}} value="false" onClick={switchForm}>Login</span> </p>
            </div>

            {
        loggedInUser.error && <p style={{color:'red'}}>{loggedInUser.error}</p>
      }


        </div>
    );
};

export default LoginForm;