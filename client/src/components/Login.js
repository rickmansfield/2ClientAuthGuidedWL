import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    //1. Make an axios request to our login route.
    //2. If request is valid, get the token.
    //3. Save the token from the request in localStorage.
    //4. if error, console.log error
    
    axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        console.log('Logout.js ln:30 res', res);
        console.log('Logout.js ln:31 res.data', res.data);
        localStorage.setItem("role", res.data.role);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        this.props.history.push('/protected');
      })
      .catch(err=> {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;