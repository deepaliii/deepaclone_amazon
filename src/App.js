import React from 'react';

import Checkout from './Checkout';
import Header from './Header'
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Headertwo from './Headertwo';
import Home from './Home';
import Headerthree from './Headerthree';
import Admin from './Admin';
import AdminDashboard from './AdminDashboard';




function App() {
  return (
    <div>
      <Router>
        <Switch>

                  {/* HAMESA  / VALA NIICHE HI AYEGa lasST ME NHI TO chlega nhi */}

          <Route path="/login">
          <Login />
          </Route>
          <Route path="/checkout">
          <Checkout/>
          </Route>

          <Route path="/check">
            <Header />
            <Headertwo />
            <Checkout />
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/admindashboard">
         <AdminDashboard/>
          </Route>
          <Route path="/">
            <Header />
            <Headertwo />
            <Home/>
            </Route>
         </Switch>
      </Router>

    </div>
  );
}

export default App;
