const React = require('react');

const SessionStore = require("../stores/session_store");
const Header = require("./header");
const Footer = require("./footer");
import Joyride from 'react-joyride';

const App = React.createClass({
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
  render: function() {
    return (
      <div className="app">

        <div className="wrapper">
          <Header />
          {this.props.children}
        </div>
        <div className="footer">
          <Footer />
        </div>

      </div>
    );
  }

});

module.exports = App;
