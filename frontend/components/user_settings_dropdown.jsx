const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionActions = require("../actions/session_actions");

const UserSettingsDropdown = React.createClass({
  _logout(){
    SessionActions.logout();
    hashHistory.push("/");
  },
  render: function() {
    return (
      <div className="user-settings-dropdown">
        <div className="user-settings-view">
          <ul className="user-settings-nav">
            <li className="settings">Settings</li>
            <li onClick={this._logout}
                className="logout">Sign Out</li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = UserSettingsDropdown;
