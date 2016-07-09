const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const SignupForm = React.createClass({
  getInitialState: function() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      errors: {}
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._redirectIfLoggedIn);
    ErrorStore.addListener(this._getErrors);
  },
  _getErrors(){
    this.setState({errors: ErrorStore.formErrors("signup")});
  },
  _redirectIfLoggedIn(){
    if(SessionStore.isUserLoggedIn())
    {
      hashHistory.push("/");
    }
  },
  _onSubmit(e){
    e.preventDefault();
    SessionActions.signup(this.state);
    hashHistory.push("/");
  },
  _updateFirstName(e){
    this.setState({firstname: e.target.value});
  },
  _updateLastName(e){
    this.setState({lastname: e.target.value});
  },
  _updateUsername(e){
    this.setState({username: e.target.value.toLowerCase()});
  },
  _updatePassword(e){
    this.setState({password: e.target.value});
  },
  _updateEmail(e){
    this.setState({email: e.target.value});
  },
  render: function() {
    let errors;
    if(this.state.errors.base)
    {
      errors = this.state.errors.base.map((error) => {
        return <p key={error}>{error}</p>;
      });
    }
    else {
      errors = "";
    }
    return (
      <form className="login-form" onSubmit={this._onSubmit}>
        <h2 className="user-form-header">Sign Up</h2>
        <div className="errors">{errors}</div>
          <div className="user-form-body">
            <div className="user-form-row">
              <div className="user-form-row-column">
                <label for="username">First Name: </label>
                <input type="text"
                       id="first_name"
                       placeholder="First Name"
                       className="user-login-input"
                       onChange={this._updateFirstName}></input>
              </div>

               <div className="user-form-row-column">
                 <label for="username">Last Name: </label>
                 <input type="text"
                        id="last_name"
                        placeholder="Last Name"
                        className="user-login-input"
                        onChange={this._updateLastName}></input>
               </div>

            </div>
            <br></br>
            <div className="user-form-row">
              <div className="user-form-row-column">
                <label for="username">Username: </label>
                <input type="text"
                       id="username"
                       className="user-login-input"
                       placeholder="Username"
                       onChange={this._updateUsername}></input>
              </div>

              <div className="user-form-row-column">
                <label for="password">Password: </label>
                <input type="password"
                       id="password"
                       className="user-login-input"
                       placeholder="Password"
                       onChange={this._updatePassword}></input>
              </div>

            </div>

            <br></br>
            <div className="user-form-row">
              <div className="user-form-row-column">
                <label for="email">Email: </label>
                <input type="email"
                       id="email"
                       placeholder="Email"
                       className="user-login-input"
                       onChange={this._updateEmail}></input>
              </div>

            </div>
            <br></br>


          </div>
          <input className="login-form-submit" type="submit" value="Submit"></input>
      </form>
    );
  }

});

module.exports = SignupForm;
