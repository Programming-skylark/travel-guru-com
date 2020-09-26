import React, { useContext } from 'react';
import './Navigation.css';
import logo from '../../img/imageedit_60_5835759210.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {UserContext} from '../../App';
import * as firebase from "firebase/app";
import firebaseConfig from '../Login/firebase.config';
import { FirebaseAuth } from 'react-firebaseui';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(typeof(loggedInUser.name));

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleLogOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const user = {
                isSignedIn: false,
                name: '',
                email: ''
            }
            setLoggedInUser(user);
        })
        .catch( err => {
            console.log(err.message);
        })
    }

   
    return (
        <nav className="nav justify-content-center" style={{color: "white"}}>
            <ul>
                <li>
                    <img className="logo" src={logo} alt=""/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="Search your Destination...    " className="search"/>
                    
                </li>
                <li><Link to="/"  style={{textDecoration: "none", color: "white"}}>Home</Link></li>
                <li>Destination</li>
                <li>Blog</li>
                <li>Contact</li>
{            loggedInUser.isSignedIn ? 
                <li> 
                <button onClick={handleLogOut} className="btn-login" >Logout</button>
                </li> 
                : 
                <li> 
                    <Link to="/login"  style={{textDecoration: "none"}}><button className="btn-login" >Login</button></Link>
                </li>
}
{ loggedInUser.isSignedIn &&
                
                <li>{loggedInUser.name}</li>
                

}
                </ul>
        </nav>
    );
};

export default Navigation;