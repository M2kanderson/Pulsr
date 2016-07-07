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


const Header = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.current_user(),
      modalOpen: false
    };
  },
  componentWillMount(){
    SessionStore.addListener(this._onChange);
  },
  _onChange(){
    this.setState({modalOpen: false, currentUser: SessionStore.current_user()});
  },
  _signUp(){
    this.component = <SignupForm />;
    this.setState({modalOpen: true});
    // hashHistory.push("/users/new");
  },
  _signIn(){
    this.component = <LoginForm />;
    this.setState({modalOpen: true});
    // hashHistory.push("/session/new");
  },
  _guest(){
    this.component = <LoginForm guest="true" />;
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
  headerButtons(){
    if(!SessionStore.isUserLoggedIn())
    {
      return (
        <div className="header-right">
          <button className="signup_button"
                  onClick={this._signUp}>Sign Up</button>
          <button className="guest_button"
                  onClick={this._guest}>Guest</button>
          <button className="signin_button"
                  onClick={this._signIn}>Sign In</button>
          <Searchbar/>

        </div>
      );
    }else {
        return (
          <div className="header-right">
            <img className="user-icon-header" src={this.state.currentUser.icon}></img>
            <button className="signout_button"
                    onClick={this._logout}>Sign Out</button>
            <Searchbar/>
          </div>
        );
      }
  },
  render: function() {
    return (
        <header>
          <div className="header-left">
            <h1 className="logo"><Link to={"/"}>Pulsr</Link></h1>
            <div className="explore-dropdown">
              <span>Explore</span>
              <div className="dropdown-content">
                <ul>
                  <li><Link to={"/cameraroll"}>Cameraroll</Link></li>
                  <li><Link to={"/photostream"}>Photostream</Link></li>
                  <li><Link to={"/albums"}>Albums</Link></li>
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
            <button onClick={this.onModalClose}>X</button>
            {this.component}
          </Modal>
        </header>

    );
  }

});

module.exports = Header;
