const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const SignupForm = React.createClass({
  getInitialState: function() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: ""
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._redirectIfLoggedIn);
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
    return (
      <form onSubmit={this._onSubmit}>
        <h2 className="user-form-header">Sign Up</h2>
          <div className="user-form-body">
            <div className="user-form-row">
              <label for="first_name">First Name: </label>
              <input type="text" id="first_name" onChange={this._updateFirstName}></input>
              <label for="last_name">Last Name: </label>
              <input type="text" id="last_name" onChange={this._updateLastName}></input>
            </div>
            <br></br>
            <br></br>
            <div className="user-form-row">
              <label for="username">Username: </label>
              <input type="text" id="username" onChange={this._updateUsername}></input>
              <label for="password">Password: </label>
              <input type="password" id="password" onChange={this._updatePassword}></input>
            </div>

            <br></br>
            <br></br>
            <div className="user-form-row">
              <div>
                <label for="email">Email: </label>
                <input type="email" id="email" onChange={this._updateEmail}></input>
              </div>

            </div>
            <br></br>
            <br></br>


          </div>
          <input type="submit" value="Submit"></input>
      </form>
    );
  }

});

module.exports = SignupForm;
