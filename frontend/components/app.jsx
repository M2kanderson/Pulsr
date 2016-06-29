const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Link = ReactRouter.Link;

const SessionStore = require("../stores/session_store");
const SessionActions = require("../actions/session_actions");
const IndexPage = require("./index_page");

const App = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.current_user()
    };
  },
  componentWillMount(){
    SessionStore.addListener(this._onChange);
  },
  _onChange(){
    this.setState({currentUser: SessionStore.current_user()});
  },
  _signUp(){
    hashHistory.push("/users/new");
  },
  _signIn(){
    hashHistory.push("/session/new");
  },
  _logout(){
    SessionActions.logout();
  },
  render: function() {
    let greeting;
    if(!SessionStore.isUserLoggedIn())
    {
      greeting = (
        <div className="header-right">
          <button className="signup_button" onClick={this._signUp}>Sign Up</button>
          <button className="signin_button" onClick={this._signIn}>Sign In</button>
        </div>
      );
    }
    else {
      greeting = (
        <div className="header-right">
          <button className="signout_button" onClick={this._logout}>Sign Out</button>
        </div>
      );
    }
    return (
      <div>
        <div>
          <header>
            <div className="header-left">
              <h1 className="logo"><Link to={"/"}>Pulsr</Link></h1>
              <div className="explore-dropdown">
                <span>Explore</span>
                <div className="dropdown-content">
                  <ul>
                    <li><Link to={"/"}>Cameraroll</Link></li>
                    <li><Link to={"/"}>Albums</Link></li>
                  </ul>

                </div>
              </div>
            </div>
            {greeting}
          </header>
          {IndexPage}
          {this.props.children}
        </div>
      </div>
    );
  }

});

module.exports = App;
