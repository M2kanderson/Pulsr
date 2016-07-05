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
      errors: {},
      guest: this.props.guest
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
    SessionActions.login({username: this.state.username,
                          password: this.state.password});
  },
  _updateUsername(e){
    this.setState({username: e.target.value.toLowerCase()});
  },
  _updatePassword(e){
    this.setState({password: e.target.value});
  },
  _addUsername(){
    this.setState({guest: false});
    let username = "guest";
    let password = "guestlogin";
    let index = 1;
    let usernameInterval = setInterval(()=>{
      if(index <= username.length)
      {
        this.setState({username: username.slice(0,index)});
        index += 1;
      }
      else{
        clearInterval(usernameInterval);
        index = 1;
        let passwordInterval = setInterval(()=>{
          if(index <= password.length){
            this.setState({password: password.slice(0,index)});
            index += 1;
          }
          else{
            clearInterval(passwordInterval);
            SessionActions.login({username: this.state.username,
                                  password: this.state.password});
          }
        }, 250);
      }

    }, 250);

  },
  render: function() {
    if(this.state.guest === "true")
    {
      this._addUsername();
      //
      // SessionActions.login({username: "guest",
      //                       password: "guestlogin"});
    }
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
          <input type="text" id="description"
                  onChange={this._updateUsername}
                  value={this.state.username}></input>
          <label for="password">Password: </label>
          <input type="password" id="password"
                 onChange={this._updatePassword}
                 value={this.state.password}></input>
          <br></br>
          <br></br>

        <input type="submit" value="Submit"></input>
      </form>
    );
  }

});

module.exports = LoginForm;
