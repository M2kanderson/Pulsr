const React = require('react');
const IndexSplashPage = require('./index_splash_page');
const SessionStore = require('../stores/session_store');
const IndexPhotos = require('./index_photos');

const IndexPage = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.current_user()
    };
  },
  componentWillMount(){
    this.sessionListener = SessionStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.sessionListener.remove();
  },
  _onChange(){
    this.setState({currentUser: SessionStore.current_user()});
  },
  render: function() {
    let Page;
    if(!SessionStore.isUserLoggedIn())
    {
      Page = <IndexSplashPage />;
    }else {
      Page = <IndexPhotos />;
    }
    return (
      <div >
        {Page}
      </div>
    );
  }

});

module.exports = IndexPage;
