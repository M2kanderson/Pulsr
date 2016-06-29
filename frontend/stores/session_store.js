const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

let _currentUser = {};
const SessionStore = new Store(AppDispatcher);

function _login(user){
  _currentUser = user;
  SessionStore.__emitChange();
}
function _logout(){
  _currentUser = {};
  SessionStore.__emitChange();
}

SessionStore.current_user = function(){
  return _currentUser;
};

SessionStore.isUserLoggedIn = function(){
  return Boolean(_currentUser.id);
};

SessionStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
    _login(payload.user);
    break;
    case SessionConstants.LOGOUT:
    _logout();
    break;
  }
};


module.exports = SessionStore;
