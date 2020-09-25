import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import NavOther from '../NavOther/NavOther';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

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
    return (
        <div >
            <NavOther></NavOther>
            <LoginForm></LoginForm>
            <br/>
            <div style={{textAlign: "center"}}>
            <hr style={{width: "50%"}}/>
            <p>or</p>
            <hr style={{width: "50%"}}  />
            <button onClick={handleFacebookSignin}>Continue with Facebook</button>
            <br/>
            <br/>
            <button onClick={handleGoogleSignin}>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;