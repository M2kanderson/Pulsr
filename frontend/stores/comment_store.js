const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants');

let _comments = {};
const CommentStore = new Store(AppDispatcher);

function _resetComments(comments){
  _comments = {};
  comments.forEach((comment) =>{
    _comments[comment.id] = comment;
  });
  CommentStore.__emitChange();
}

function _addComment(comment){
  _comments[comment.id] = comment;
  CommentStore.__emitChange();
}

function _removeComment(comment){
  delete _comments[comment.id];
  CommentStore.__emitChange();
}

CommentStore.all = function(){
  let commentArray = [];
  Object.keys(_comments).forEach((id) =>{
    commentArray.push(_comments[id]);
  });
  return commentArray;
};

CommentStore.find = function(id){
  return _comments[id];
};


CommentStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case CommentConstants.COMMENTS_RECEIVED:
    _resetComments(payload.comments);
    break;
    case CommentConstants.COMMENT_RECEIVED:
    _addComment(payload.comment);
    break;
    case CommentConstants.COMMENT_REMOVED:
    _removeComment(payload.comment);
    break;
  }
};


module.exports = CommentStore;
