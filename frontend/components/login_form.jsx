const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const LoginForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      errors: {}
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._redirectIfLoggedIn);
    ErrorStore.addListener(this._getErrors);
  },
  _getErrors(){
    this.setState({errors: ErrorStore.formErrors("login")});
  },
  _redirectIfLoggedIn(){
    if(SessionStore.isUserLoggedIn())
    {
      hashHistory.push("/");
    }
  },
  _onSubmit(e){
    e.preventDefault();
    SessionActions.login({username: this.state.username, password: this.state.password});
  },
  _updateUsername(e){
    this.setState({username: e.target.value.toLowerCase()});
  },
  _updatePassword(e){
    this.setState({password: e.target.value});
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
      <form onSubmit={this._onSubmit}>
        <h2 className="user-form-header">Log In</h2>
        {errors}

          <label for="username">Username: </label>
          <input type="text" id="description" onChange={this._updateUsername}></input>
          <label for="password">Password: </label>
          <input type="password" id="password" onChange={this._updatePassword}></input>
          <br></br>
          <br></br>

        <input type="submit" value="Submit"></input>
      </form>
    );
  }

});

module.exports = LoginForm;
