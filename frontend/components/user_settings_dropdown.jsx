const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require("../actions/session_actions");
const SessionStore = require("../stores/session_store");

const UserSettingsDropdown = React.createClass({
  _logout(){
    this.props.toggleMenu();
    SessionActions.logout();
    hashHistory.push("/");
  },
  render: function() {
    return (
      <div className={this.props.className}>
        <div className="user-settings-view">
          <h2 className="user-settings-header">Hello {SessionStore.current_user().username}!</h2>
          <ul className="user-settings-nav">
            <li className="settings">
              <Link className="settings-link" to={"/settings"} onClick={this.props.toggleMenu} >
                <img src="http://res.cloudinary.com/pulsr/image/upload/c_scale,w_25/v1468014924/icons/2000px-WMF-Agora-Settings_BCBCBC.svg.png"></img>
                <p className="user-settings-nav-item">Settings</p>
              </Link>
            </li>
            <li onClick={this._logout}
                className="logout">
                <img src="http://res.cloudinary.com/pulsr/image/upload/c_scale,w_25/v1468015730/icons/logout-xxl.png"></img>
                <p className="user-settings-nav-item">Sign Out</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = UserSettingsDropdown;
