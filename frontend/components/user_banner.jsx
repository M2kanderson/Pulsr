const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;

const UserBanner = React.createClass({
  navItems(){
    return <div className="user-banner-nav-items">
      <Link className={(document.URL.indexOf("cameraroll") > -1) ?
        "current-nav-item" : ""}
        to={"/cameraroll"}>Cameraroll</Link>
      <Link className={(document.URL.indexOf("photostream") > -1) ?
        "current-nav-item" : ""}
        to={"/photostream"}>Photostream</Link>
      <Link className={(document.URL.indexOf("albums") > -1) ?
        "current-nav-item" : ""}
        to={"/albums"}>Albums</Link>
    </div>;
  },
  render: function() {
    let currentUser=SessionStore.current_user();
    return (
      <div>
        <div className="user-banner">
          <img className="user-banner-icon" src={currentUser.icon}></img>
          <p className="user-banner-name">{currentUser.firstname} {currentUser.lastname}</p>
          <p className="user-banner-username">{currentUser.username}</p>
        </div>
        <div className="user-banner-nav">
          {this.navItems()}
        </div>
      </div>

    );
  }

});

module.exports = UserBanner;
