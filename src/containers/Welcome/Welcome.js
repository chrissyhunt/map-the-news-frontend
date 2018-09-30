import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signup from './Signup';
import Login from './Login';
import { getToken } from '../../actions/Users';
import { clearErrors } from '../../actions/Application';

class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      displayLogin: true
    }
  }

  toggleDisplay = (event) => {
    event.preventDefault();
    this.setState({
      displayLogin: !this.state.displayLogin
    })
    this.props.clearErrors();
  }

  displayCreateAccount = (event) => {
    event.preventDefault();
    this.setState({
      displayLogin: false
    })
  }



  render() {
    const form = this.state.displayLogin ? <Login history={this.props.history}/> : <Signup history={this.props.history}/>
    const loginClasses = `tab tab-left${this.state.displayLogin ? ' tab-active' : ''}`
    const signupClasses = `tab tab-right${!this.state.displayLogin ? ' tab-active' : ''}`

    return (
      <React.Fragment>
        <div className="welcome-header">
          <p>Welcome to</p>
          <h1>Map the News</h1>
        </div>

        <div className="welcome-container">
          <div className="welcome-shadow">
            <div className="welcome-menu">
              <div className={loginClasses}>
                <h2><a role="button" onClick={this.toggleDisplay}>Log In</a></h2>
              </div>
              <div className={signupClasses}>
                <h2><a role="button" onClick={this.toggleDisplay}>Create Account</a></h2>
              </div>
            </div>

            <div className="welcome-main">
              {form}
            </div>
          </div>

          <p className="welcome-footer">Built in React by <a href="http://chrissyhunt.com/">Chrissy Hunt</a> and powered by the <a href="https://newsapi.org/">News API</a>.</p>
        </div>

        <div className="image-layer">
          &nbsp;
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}

export default connect(mapStateToProps, { getToken, clearErrors })(Welcome);
