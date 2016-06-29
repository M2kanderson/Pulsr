const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app.jsx');
const signupForm = require('./components/signup_form');
const loginForm = require('./components/login_form');
const Index = require('./components/index_page');
const SessionActions = require('./actions/session_actions');

window.SessionStore = require("./stores/session_store");

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="index" component={Index}></Route>
      <Route path="/users/new" component={signupForm}></Route>
      <Route path="/session/new" component={loginForm}></Route>
    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function() {
  const root = document.getElementById('content');
  SessionActions.receiveCurrentUser(window.currentUser);
  ReactDOM.render(appRouter, root);
});
