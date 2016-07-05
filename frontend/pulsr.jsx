const React = require('react');
const ReactDOM = require('react-dom');

const Modal = require('react-modal');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

//components
const App = require('./components/app.jsx');
const signupForm = require('./components/signup_form');
const loginForm = require('./components/login_form');
const Index = require('./components/index_page');
const IndexSplashPage = require('./components/index_splash_page');
const IndexPhotos = require('./components/index_photos');
const PhotoShow = require('./components/photo_show');
const Albums = require('./components/albums');
const AlbumShow = require('./components/album_show');
const UserPhotos = require('./components/user_photos');
const FilteredPhotos = require("./components/filtered_photos");

//actions
const SessionActions = require('./actions/session_actions');

//stores
const SessionStore = require('./stores/session_store');

window.SessionStore = require("./stores/session_store");
window.PhotoApiUtil = require("./util/photo_api_util");
window.PhotoActions = require("./actions/photo_actions");
window.PhotoStore = require("./stores/photo_store");
window.AlbumStore = require("./stores/album_store");
window.AlbumActions = require("./actions/album_actions");
window.CommentActions = require("./actions/comment_actions");
window.CommentStore = require("./stores/comment_store");
window.TagActions = require("./actions/tag_actions");
window.TagStore = require("./stores/tag_store");

function _ensureLoggedIn(nextState, replace){
  if(!SessionStore.isUserLoggedIn())
  {
    replace('/session/new');
  }
}

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="/users/new" component={signupForm}></Route>
      <Route path="/session/new" component={loginForm}></Route>
      <Route path="/photos" component={IndexPhotos}></Route>
      <Route path="/index_splash_page" component={IndexSplashPage}></Route>
      <Route path="photos/:photoId" component={PhotoShow}></Route>
      <Route path="/albums" component={Albums} onEnter={_ensureLoggedIn}></Route>
      <Route path="/albums/:albumId" component={AlbumShow}></Route>
      <Route path="/photostream" component={UserPhotos}></Route>
      <Route path="/search" component={FilteredPhotos}></Route>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function() {
  Modal.setAppElement(document.body);
  const root = document.getElementById('content');
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(appRouter, root);
});
