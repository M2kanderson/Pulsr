const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');

let _users = {};
const UserStore = new Store(AppDispatcher);

function _resetUsers(users){
  _users = {};
  users.forEach((user) =>{
    _users[user.id] = user;
  });
  UserStore.__emitChange();
}

function _addUser(user){
  _users[user.id] = user;
  UserStore.__emitChange();
}

function _removeUser(user){
  delete _users[user.id];
  UserStore.__emitChange();
}

UserStore.all = function(){
  let userArray = [];
  Object.keys(_users).forEach((id) =>{
    userArray.push(_users[id]);
  });
  return userArray;
};

UserStore.find = function(id){
  return _users[id];
};


UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case UserConstants.USERS_RECEIVED:
    _resetUsers(payload.users);
    break;
    case UserConstants.USER_RECEIVED:
    _addUser(payload.user);
    break;
    case UserConstants.USER_REMOVED:
    _removeUser(payload.user);
    break;
  }
};


module.exports = UserStore;
