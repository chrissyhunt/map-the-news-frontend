import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DarkenBackground from '../../components/DarkenBackground';
import CloseButton from '../../components/CloseButton';
import ErrorMessage from '../../components/ErrorMessage';
import { deactivateUserSettingsBox, clearErrors } from '../../actions/Application';
import { updateUser } from '../../actions/Users';

class UserSettingsModal extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      errors: {
        firstName: true,
        password: false,
        firstName: true,
        lastName: false
      },
      touched: {
        email: false,
        password: false,
        firstName: false,
        lastName: false
      }
    }
  }

  componentDidMount() {
    if (this.props.userInfo.user) {
      this.setState({
        user: {
          ...this.state.user,
          firstName: this.props.userInfo.user.firstName,
          lastName: this.props.userInfo.user.lastName,
          email: this.props.userInfo.user.email
        }
      })
    }
  }

  closeModal = (event) => {
    event.preventDefault();
    this.props.deactivateUserSettingsBox();
    this.props.clearErrors();
  }

  handleChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateUser(this.state.user);
  }

  handleBlur = (event) => {
    this.setState({
      touched: {
        ...this.state.touched,
        [event.target.name]: true
      }
    })
  }

  validate = (email, firstName) => {
    return {
      email: !email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g),
      firstName: firstName.length === 0
    }
  }

  render() {
    const errors = this.validate(this.state.user.email, this.state.user.firstName);
    const isEnabled = !Object.keys(errors).some(x => errors[x])
    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError && shouldShow;
    }

    return (
      <React.Fragment>
        <DarkenBackground closeModal={this.closeModal} />

        <div className="user-settings-modal">
          <CloseButton closeModal={this.closeModal} />
          <div className="user-settings-detail">
            <h1>Update Your Account Settings</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="half-width left-half">
                <label>First Name:</label><br />
                <input
                  className={shouldMarkError('firstName') ? "error" : ""}
                  type="text"
                  value={this.state.user.firstName}
                  name="firstName"
                  onChange={e => this.handleChange(e)}
                  onBlur={e => this.handleBlur(e)}
                /><br />
              </div>

              <div className="half-width right-half">
                <label>Last Name:</label><br />
                <input
                  className={shouldMarkError('lastName') ? "error" : ""}
                  type="text"
                  value={this.state.user.lastName}
                  name="lastName"
                  onChange={e => this.handleChange(e)}
                  onBlur={e => this.handleBlur(e)}
                /><br />
              </div>

              <div className="full-width">
                <label>Email:</label><br />
                <input
                  className={shouldMarkError('email') ? "error" : ""}
                  type="email"
                  value={this.state.user.email}
                  name="email"
                  onChange={e => this.handleChange(e)}
                  onBlur={e => this.handleBlur(e)}
                /><br />
              </div>

              <div className="full-width">
                <label>New Password:</label><br />
                <input
                  className={shouldMarkError('password') ? "error" : ""}
                  type="password"
                  value={this.state.user.password}
                  name="password"
                  onChange={e => this.handleChange(e)}
                  onBlur={e => this.handleBlur(e)}
                /><br />
              </div>

              <div className="full-width">
                <input type="submit" value="Update Account" disabled={!isEnabled}/>
              </div>

              <div className="full-width errors">
                {this.props.application.errors && this.props.application.errors.map(error => {
                  return <ErrorMessage message={error} />
                })}
              </div>

            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application,
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, { deactivateUserSettingsBox, updateUser, clearErrors })(UserSettingsModal);
