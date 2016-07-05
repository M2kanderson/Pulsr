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
        error("fetchAllComments",resp);
      }
    });
  },
  fetchPhotoComments(photoId, success, error){
    if(!photoId)
    {
      photoId = -1;
    }
    $.ajax({
      url: 'api/comments',
      type: 'GET',
      data_type: 'json',
      data: {photo_id: photoId},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAllComments",resp);
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
        error("fetchComment",resp);
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
        error("createComment",resp);
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
        error("updateComment",resp);
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
        error("deleteComment",resp);
      }
    });
  }
};


module.exports = CommentApiUtil;
