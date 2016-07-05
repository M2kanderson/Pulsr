const TagApiUtil = {
  fetchAllTags(success, error){
    $.ajax({
      url: 'api/tags',
      type: 'GET',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAllTags",resp);
      }
    });
  },
  fetchPhotoTags(photoId, success, error){
    if(!photoId)
    {
      photoId = -1;
    }
    $.ajax({
      url: 'api/tags',
      type: 'GET',
      data_type: 'json',
      data: {photo_id: photoId},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAllTags",resp);
      }
    });
  },
  fetchTag(id, success, error){
    $.ajax({
      url: `api/tags/${id}`,
      type: 'GET',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchTag",resp);
      }
    });
  },
  createTag(tag, success, error){
    $.ajax({
      url: 'api/tags',
      type: 'POST',
      data_type: 'json',
      data: {tag: {name: tag.name}, photo_id: tag.photo_id},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("createTag",resp);
      }
    });
  },
  deleteTag(id,success, error){
    $.ajax({
      url: `api/tags/${id}`,
      type: 'DELETE',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("deleteTag",resp);
      }
    });
  }
};


module.exports = TagApiUtil;
