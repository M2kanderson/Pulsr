const React = require('react');
const SessionStore = require("../stores/session_store");

const SettingsForm = React.createClass({

  render: function() {
    return (
      <div>


      <h1 className="account-settings-header">Your Account</h1>
        <table className="account-settings">
          <tbody>
            <tr>
              <th>Your Pulsr account</th>
              <td className="settings-td">
                <p>You are signed in to Pulsr with your email: {SessionStore.current_user().email}</p>
              </td>
              <td className="settings-edit">
                <a>Change your password</a>
              </td>
            </tr>
            <tr>
              <th>Your Exporer Icon</th>
              <td className="settings-td">
                <img className="settings-user-icon"
                     src={SessionStore.current_user().icon}></img>
              </td>
              <td className="settings-edit">
                <a >Edit</a>
              </td>
            </tr>
            <tr>
              <th>Your Screen Name</th>
              <td className="settings-td">
                <p> {SessionStore.current_user().username}</p>
              </td>
              <td className="settings-edit">
                <a >Edit</a>
              </td>
            </tr>

          </tbody>

        </table>
      </div>
    );
  }

});

module.exports = SettingsForm;
