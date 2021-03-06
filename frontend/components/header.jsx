const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;

const Modal = require('react-modal');
const ModalStyle = require("../modal_style");

const SessionStore = require("../stores/session_store");
const SessionActions = require("../actions/session_actions");

const SignupForm = require("./signup_form");
const LoginForm = require("./login_form");
const Searchbar = require("./searchbar");
const UserSettingsDropdown = require("./user_settings_dropdown");


const Header = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.current_user(),
      modalOpen: false,
      userSettingsOpen: false
    };
  },
  componentWillMount(){
    SessionStore.addListener(this._onChange);
  },
  _onChange(){
    this.setState({modalOpen: false, userSettingsOpen:false, currentUser: SessionStore.current_user()});
  },
  _signUp(){
    this.component = <SignupForm />;
    this.setState({modalOpen: true});
    // hashHistory.push("/users/new");
  },
  _signIn(){
    this.component = <LoginForm modal="true"/>;
    this.setState({modalOpen: true});
    // hashHistory.push("/session/new");
  },
  _guest(){
    this.component = <LoginForm guest="true" modal="true"/>;
    this.setState({modalOpen: true});
    // hashHistory.push("/session/new");
  },
  _logout(){
    SessionActions.logout();
    hashHistory.push("/");
  },
  onModalClose(){
    ModalStyle.content.opacity = 0;
    this.setState({modalOpen: false});
  },
  onModalOpen(){
    ModalStyle.content.opacity = 100;
  },
  toggleUserSettings(){
    this.setState({userSettingsOpen: !this.state.userSettingsOpen});
  },
  headerButtons(){
    if(!SessionStore.isUserLoggedIn())
    {
      return (
        <div className="header-right">
          <Searchbar/>
          <button className="signin_button"
                  onClick={this._signIn}>Sign In</button>
          <button className="signup_button"
                  onClick={this._signUp}>Sign Up</button>
          <button className="guest_button"
                  onClick={this._guest}>Guest</button>


        </div>
      );
    }else {
        let settingsClass = this.state.userSettingsOpen ?
        "user-settings-dropdown active" : "user-settings-dropdown hidden";
        return (
          <div className="header-right">
            <Searchbar/>
            <img className="user-icon-header"
              src={this.state.currentUser.icon}
              onClick={this.toggleUserSettings}></img>
            <UserSettingsDropdown className={settingsClass}
                                  toggleMenu={this.toggleUserSettings}/>
          </div>
        );
      }
  },
  userDropdown(){
    if(SessionStore.isUserLoggedIn()){
      return (<div className="explore-dropdown">
        <span>Your Voyages</span>
        <ul className="dropdown-content">
          <li><Link to={"/cameraroll"}>Cameraroll</Link></li>
          <li><Link to={"/photostream"}>Photostream</Link></li>
          <li><Link to={"/albums"}>Albums</Link></li>
        </ul>
      </div>);
    }
  },
  render: function() {
    return (
        <header>
          <div className="header-left">
            <h1 className="logo"><Link to={"/"}>Pulsr</Link></h1>
            {this.userDropdown()}
            <div className="explore-dropdown">
              <span>Explore</span>
              <div className="dropdown-content">
                <ul>
                  <li><Link to={"/search"}>Find Photos</Link></li>
                </ul>

              </div>
            </div>
          </div>
          {this.headerButtons()}
          <Modal
             isOpen={this.state.modalOpen}
             onRequestClose={this.onModalClose}
             style={ModalStyle}
             onAfterOpen={this.onModalOpen}>
            <a className="close-x" onClick={this.onModalClose}>X</a>
            {this.component}
          </Modal>

        </header>

    );
  }

});

module.exports = Header;
