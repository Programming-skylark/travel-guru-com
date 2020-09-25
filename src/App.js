import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Demo from './components/Demo/Demo';
import DemoForm from './components/DemoForm/DemoForm';
import Home from './components/Home/Home';
import HotelInfo from './components/HotelInfo/HotelInfo';
import Login from './components/Login/Login';
import NavOther from './components/NavOther/NavOther';
import NoMatch from './components/NoMatch/NoMatch';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    existingUser: true
  });
 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/details/:placeKey">
          <PlaceDetails></PlaceDetails>
        </Route>
        <PrivateRoute path="/book/:bedType">
              <HotelInfo></HotelInfo>
            </PrivateRoute>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
