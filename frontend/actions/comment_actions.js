const CommentApiUtil = require("../util/comment_api_util");
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('../actions/error_actions');

const CommentConstants = require('../constants/comment_constants');

const CommentActions = {
  fetchAllComments(){
    CommentApiUtil.fetchAllComments(this.receiveAllComments, ErrorActions.setErrors);
  },
  fetchPhotoComments(photoId){
    CommentApiUtil.fetchPhotoComments(photoId,this.receiveAllComments, ErrorActions.setErrors);
  },
  fetchComment(id){
    CommentApiUtil.fetchComment(id, this.receiveComment, ErrorActions.setErrors);
  },
  createComment(comment){
    CommentApiUtil.createComment(comment,this.receiveComment, ErrorActions.setErrors);
  },
  updateComment(comment){
    CommentApiUtil.updateComment(comment,this.receiveComment, ErrorActions.setErrors);
  },
  deleteComment(id){
    CommentApiUtil.deleteComment(id,this.removeComment, ErrorActions.setErrors);
  },
  receiveAllComments(comments){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENTS_RECEIVED,
      comments: comments
    });
  },
  receiveComment(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },
  removeComment(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.COMMENT_REMOVED,
      comment: comment
    });
  },
};

module.exports = CommentActions;
