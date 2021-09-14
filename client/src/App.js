import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import GasPrices from './components/GasPrices';
import Admin from './components/Admin';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            {localStorage.getItem("token") && <div>
              <Link to="/protected">Protected Page</Link>
            </div>
            }
          </li>
          <li>
            {
              (localStorage.getItem("role") === "editor") &&  <Link to="/admin">Admin Page</Link>
            }
          </li>
        </ul>

        <Switch>
          <PrivateRoute exact path="/protected" component={GasPrices} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
