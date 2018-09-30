import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions/Users';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        email: '',
        password: ''
      },
      errors: {
        email: true,
        password: true
      },
      touched: {
        email: false,
        password: false
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [event.target.name]: event.target.value
      }
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.getToken(this.state.userInfo, this.props.history);
  }

  handleBlur = (event) => {
    this.setState({
      touched: {
        ...this.state.touched,
        [event.target.name]: true
      }
    })
  }

  validate = (email, password) => {
    return {
      email: !email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g),
      password: password.length === 0
    }
  }

  render() {
    const errors = this.validate(this.state.userInfo.email, this.state.userInfo.password);
    const isEnabled = !Object.keys(errors).some(x => errors[x])
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError && shouldShow;
    }

    return (
      <form onSubmit={e => this.handleLogin(e)}>
        <div className="welcome-full-width">
          <label>Email:</label>
          <input
            className={shouldMarkError('email') ? "error" : ""}
            type="email"
            value={this.state.userInfo.email}
            name="email"
            onBlur={e => this.handleBlur(e)}
            onChange={e => this.handleChange(e)}
          /><br />
        </div>

        <div classname="welcome-full-width">
          <label>Password:</label>
          <input
            className={shouldMarkError('password') ? "error" : ""}
            type="password"
            value={this.state.userInfo.password}
            name="password"
            onBlur={e => this.handleBlur(e)}
            onChange={e => this.handleChange(e)}
          /><br />
        </div>

        <div className="welcome-full-width">
          <input type="submit" value="Log In" disabled={!isEnabled}/>
        </div>
      </form>
    );
  }
}

export default connect(null, { getToken })(Login);
