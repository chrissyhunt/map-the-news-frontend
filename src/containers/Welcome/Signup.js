import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/Users';
import ErrorMessage from '../../components/ErrorMessage';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
      },
      errors: {
        email: true,
        password: true,
        first_name: true,
        last_name: false
      },
      touched: {
        email: false,
        password: false,
        first_name: false,
        last_name: false
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state.userInfo, this.props.history)
  }

  handleBlur = (event) => {
    this.setState({
      touched: {
        ...this.state.touched,
        [event.target.name]: true
      }
    })
  }

  validate = (email, password, first_name) => {
    return {
      email: !email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g),
      password: password.length === 0,
      first_name: first_name.length === 0
    }
  }

  render() {
    const errors = this.validate(this.state.userInfo.email, this.state.userInfo.password, this.state.userInfo.first_name);
    const isEnabled = !Object.keys(errors).some(x => errors[x])
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError && shouldShow;
    }

    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className="welcome-half-width tab-left">
          <label>First Name:</label>
          <input
            className={shouldMarkError('first_name') ? "error" : ""}
            type="text"
            value={this.state.userInfo.first_name}
            name="first_name"
            onChange={e => this.handleChange(e)}
            onBlur={e => this.handleBlur(e)}
          /><br />
        </div>

        <div className="welcome-half-width tab-right">
          <label>Last Name:</label>
          <input
            className={shouldMarkError('last_name') ? "error" : ""}
            type="text"
            value={this.state.userInfo.last_name}
            name="last_name"
            onChange={e => this.handleChange(e)}
            onBlur={e => this.handleBlur(e)}
          /><br />
        </div>

        <div className="welcome-full-width">
          <label>Email:</label>
          <input
            className={shouldMarkError('email') ? "error" : ""}
            type="text"
            value={this.state.userInfo.email}
            name="email"
            onChange={e => this.handleChange(e)}
            onBlur={e => this.handleBlur(e)}
          /><br />
        </div>

        <div classname="welcome-full-width">
          <label>Password:</label>
          <input
            className={shouldMarkError('password') ? "error" : ""}
            type="password"
            value={this.state.userInfo.password}
            name="password"
            onChange={e => this.handleChange(e)}
            onBlur={e => this.handleBlur(e)}
          /><br />
        </div>

        <div className="welcome-full-width">
          <input type="submit" value="Create Account" disabled={!isEnabled}/>
        </div>

        <div className="welcome-full-width errors">
          {this.props.application.errors && this.props.application.errors.map(error => {
            return <ErrorMessage message={error} />
          })}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}

export default connect(mapStateToProps, { createUser })(Signup);
