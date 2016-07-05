const UserApiUtil = require("../util/user_api_util");
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('../actions/error_actions');

const UserConstants = require('../constants/user_constants');

const UserActions = {
  fetchAllUsers(){
    UserApiUtil.fetchAllUsers(this.receiveAllUsers, ErrorActions.setErrors);
  },
  fetchUser(id){
    UserApiUtil.fetchUser(id, this.receiveUser, ErrorActions.setErrors);
  },
  createUser(user){
    UserApiUtil.createUser(user,this.receiveUser, ErrorActions.setErrors);
  },
  updateUser(user){
    UserApiUtil.updateUser(user,this.receiveUser, ErrorActions.setErrors);
  },
  deleteUser(id){
    UserApiUtil.deleteUser(id,this.removeUser, ErrorActions.setErrors);
  },
  receiveAllUsers(users){
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },
  receiveUser(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
  removeUser(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_REMOVED,
      user: user
    });
  },
};

module.exports = UserActions;
