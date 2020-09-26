import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import NavOther from '../NavOther/NavOther';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(from)

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleFacebookSignin= () => {
        var provider1 = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider1).then(function(result) {
            const{displayName, email} = result.user;
            const signedInUser = {name: displayName, email, isSignedIn: true};
            console.log(signedInUser)
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    
    const handleGoogleSignin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           const{displayName, email} = result.user;
           const signedInUser = {name: displayName, email, isSignedIn: true};
           console.log(signedInUser)
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    ///////////////////////////////////////////
    const handleSubmit = (e) =>{
        if(loggedInUser.email && loggedInUser.password && loggedInUser.cPassword === loggedInUser.password){
          firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password).then(res => {
              alert("Success");
              const createdUser = {...loggedInUser};
              createdUser.existingUser = !loggedInUser.existingUser;
              setLoggedInUser(createdUser);
              const name = loggedInUser.fname + " "+ loggedInUser.lname;
              console.log(name);
              updateUserName(name);

          })
          .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(error.message);
            // ...
          });

        }
        else{
          alert("Fill correctly")
        }
        e.preventDefault();
    }
    const [error, setError] = useState({});
    const handleChange = (e) =>{
      console.log(e.target.name, e.target.value);
      let isFormValid = true;
      
      if(e.target.name === 'email')
      {
        const newError = {...error};
          const isEmailValid = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(e.target.value);
          if(isEmailValid){
            
            newError.email = "";
          }
          else{
            newError.email = "Not valid";
          }
          setError(newError);
          isFormValid = isEmailValid;
      }
      if(e.target.name === 'password')
      {
        const newError = {...error};
        const isPasswordValid = /\d{1}/.test(e.target.value) && e.target.value.length > 6;
        if(isPasswordValid){
          newError.password = "";
        }
        else{
          newError.password = "Password should have more than 6 characters and atleast 1 Number";
        }
        setError(newError);
        isFormValid = isPasswordValid && isFormValid;
      }
      if(e.target.name === 'cPassword'){
        const newError = {...error};
        if(e.target.value !== loggedInUser.password){
          isFormValid = false;
        }
        if(isFormValid){
          newError.cPassword = "";
        }
        else{
          newError.cPassword = "Password not matched";
        }
        setError(newError);
      }
      
      if(isFormValid)
      {
        const newUser = {...loggedInUser};
        newUser[e.target.name] = e.target.value;
        newUser.allFormValid = isFormValid;
        setLoggedInUser(newUser);

      }
      
      
    }

    const switchForm = () => {
      let createdUser = {...loggedInUser};
      createdUser.existingUser = !loggedInUser.existingUser;
      setLoggedInUser(createdUser);
    }
    const signInUser = (e) => {
      if(loggedInUser.email && loggedInUser.password){
        firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then(res => {
          alert("Success login");
          const{displayName, email} = res.user;
          const signedInUser = {name: displayName, email, isSignedIn: true};
          setLoggedInUser(signedInUser);
          history.replace(from);
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert("Email or Password is wrong")
          // ...
        });
      }
      e.preventDefault();
    }
    const updateUserName = name => {
      var user = firebase.auth().currentUser;

        user.updateProfile({
          displayName: name
        }).then(function() {
          // Update successful.
        }).catch(function(error) {
          // An error happened.
        });
    }
    //////////////////////////////////////////
    return (
        <div >
            <NavOther></NavOther>
            


            <div className="d-flex justify-content-center">
            <div style={{display:loggedInUser.existingUser ? 'none': 'block'}} className="form-box">
                <h5 style={{fontWeight: "700"}}>Create an account</h5>
                <br/>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input class="form-control" onBlur={handleChange}  type="text" name="fname" placeholder="First Name" required/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" onBlur={handleChange}  type="text" name="lname" placeholder="Last Name" required/>
                    </div>
                    <div class="form-group">
                        <input class="form-control" onBlur={handleChange}  type="text" name="email" placeholder="Email" required/>
                        <div style={{color: "#F9A51A"}}>{error.email}</div>
                    </div>
                    <div class="form-group">
                        <input class="form-control" onBlur={handleChange}  type="password" name="password" placeholder="Password" required/>
                        <div style={{color: "#F9A51A"}}>{error.password}</div>
                    </div>
                    <div class="form-group">
                        <input class="form-control" onBlur={handleChange}  type="password" name="cPassword" placeholder="Confirm Password" required/>
                        <div style={{color: "#F9A51A"}}>{error.cPassword}</div>
                    </div>
                    
                    <input type="submit" value="Create an account" class="sign-button"/>
                </form>
                <br/>
                <p style={{textAlign: "center"}}>Already have an account? <span style={{cursor: "pointer", fontSize: "14px", textDecoration: "underline", color: "#F9A51A"}} value='true' onClick={switchForm} >Log In</span> </p>
            </div>


            <div style={{display:loggedInUser.existingUser ? 'block': 'none'}} className="form-box">
                <h5 style={{fontWeight: "700"}}>Login</h5>
                <br/>
                <form onSubmit={signInUser}>
                    <div class="form-group">
                        <input class="form-control"  type="text" onBlur={handleChange} name="email" placeholder="UserName or Email" required/>
                        <div style={{color: "#F9A51A"}}>{error.email}</div>
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

            </div>






            <br/>
            <div style={{textAlign: "center"}}>
            <hr style={{width: "20%", display: "inline-block"}}/>
            <p style={{display: "inline-block"}}>or</p>
            <hr style={{width: "20%", display: "inline-block"}}  />
            <br/>
            <button onClick={handleFacebookSignin}  className="iconButton" type="submit"><img class="iconImg" src="https://i.ibb.co/sWXq1gW/fb.png" alt=""/>  Continue with Facebook</button>
            <br/>
            <br/>
            <button  onClick={handleGoogleSignin} className="iconButton" type="submit"><img class="iconImg" src="https://i.ibb.co/k09M61D/google.png" alt=""/>  Continue with Google</button>
            <br/>
            <br/>
            </div>
        </div>
    );
};

export default Login;