const CommentApiUtil = require("../util/comment_api_util");
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('../actions/error_actions');

const CommentConstants = require('../constants/comment_constants');

const CommentActions = {
  fetchAllComments(){
    CommentApiUtil.fetchAllComments(this.receiveAllComments, ErrorActions.setErrors);
  },
  fetchComment(id){
    CommentApiUtil.fetchComment(id, this.receiveComment, ErrorActions.setErrors);
  },
  createComment(photo){
    CommentApiUtil.createComment(photo,this.receiveComment, ErrorActions.setErrors);
  },
  updateComment(photo){
    CommentApiUtil.updateComment(photo,this.receiveComment, ErrorActions.setErrors);
  },
  deleteComment(id){
    CommentApiUtil.createComment(id,this.removeComment, ErrorActions.setErrors);
  },
  receiveAllComments(photos){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      photos: photos
    });
  },
  receiveComment(photo){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      photo: photo
    });
  },
  removeComment(photo){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_REMOVED,
      photo: photo
    });
  },
};

module.exports = CommentActions;
