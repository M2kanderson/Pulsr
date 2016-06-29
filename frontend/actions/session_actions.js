const SessionApiUtil = require("../util/session_api_util");
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('../actions/error_actions');

const SessionConstants = require('../constants/session_constants');

const SessionActions = {
  signup(user){
    SessionApiUtil.signup(user,this.receiveCurrentUser, ErrorActions.setErrors);
  },
  login(user){
    SessionApiUtil.login(user,this.receiveCurrentUser, ErrorActions.setErrors);
  },
  logout(){
    SessionApiUtil.logout(this.logoutCurrentUser, ErrorActions.setErrors);
  },
  receiveCurrentUser(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },
  logoutCurrentUser(){
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};

module.exports = SessionActions;
