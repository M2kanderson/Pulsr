const CommentApiUtil = {
  fetchAllComments(success, error){
    $.ajax({
      url: 'api/comments',
      type: 'GET',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAll",resp);
      }
    });
  },
  fetchComment(id, success, error){
    $.ajax({
      url: `api/comments/${id}`,
      type: 'GET',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetch",resp);
      }
    });
  },
  createComment(comment, success, error){
    $.ajax({
      url: 'api/comments',
      type: 'POST',
      data_type: 'json',
      data: {comment: comment},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("create",resp);
      }
    });
  },
  updateComment(comment, success, error){
    $.ajax({
      url: `api/comments/${comment.id}`,
      type: 'PATCH',
      data_type: 'json',
      data: {comment: comment},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("update",resp);
      }
    });
  },
  deleteComment(id,success, error){
    $.ajax({
      url: `api/comments/${id}`,
      type: 'DELETE',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("delete",resp);
      }
    });
  }
};


module.exports = CommentApiUtil;
