import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavOther.css';
import logo from '../../img/Logo.png';
import {UserContext} from '../../App';
import * as firebase from "firebase/app";
import firebaseConfig from '../Login/firebase.config';
import { Link } from 'react-router-dom';

const NavOther = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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

        })
    }
    return (
        <div>
            <nav className="nav justify-content-center" style={{color: "black"}}>
            <ul>
                <li>
                    <img className="logo" src={logo} alt=""/>
                </li>
                <li>
                    <input className="search" style={{borderRadius: "1px solid white", width: "50px"}} type="text" placeholder="Search your Destination...    " />
                    
                </li>
                <li><Link to="/"  style={{textDecoration: "none", color: "black"}}>Home</Link></li>
                <li>Destination</li> 
                <li>Blog</li>
                <li>Contact</li>
{
                loggedInUser.isSignedIn ? 
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
            
        </div>
    );
};

export default NavOther;