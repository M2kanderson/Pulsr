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
    if(this.props.guest === "true")
    {
      this._addUsername();
      //
      // SessionActions.login({username: "guest",
      //                       password: "guestlogin"});
    }
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
        }, 150);
      }

    }, 150);

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

    let klassName = "login-form";
    if(this.props.modal) {
      klassName += " modal";
    }
    return (
      <form className={klassName} onSubmit={this._onSubmit}>
        <h2 className="user-form-header">Sign In</h2>
        <div className="errors">{errors}</div>
        <div className="user-login-body">
          <input type="text" id="description"
                  className="user-login-input"
                  onChange={this._updateUsername}
                  value={this.state.username}
                  placeholder="Username"></input>
          <input type="password" id="password"
                 className="user-login-input"
                 onChange={this._updatePassword}
                 value={this.state.password}
                 placeholder="Password"></input>
          <br></br>

        <input className="login-form-submit" type="submit" value="Submit"></input>
        </div>

      </form>
    );
  }

});

module.exports = LoginForm;
