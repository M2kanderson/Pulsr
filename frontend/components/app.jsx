const React = require('react');
const ReactRouter = require('react-router');

const SessionStore = require("../stores/session_store");
const SessionActions = require("../actions/session_actions");
const Header = require("./header");
const Footer = require("./footer");

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
