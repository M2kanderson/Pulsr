const PhotoApiUtil = {
  fetchAllPhotos(success, error){
    $.ajax({
      url: 'api/photos',
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
  fetchPhoto(id, success, error){
    $.ajax({
      url: `api/photos/${id}`,
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
  createPhoto(photo, success, error){
    $.ajax({
      url: 'api/photos',
      type: 'POST',
      data_type: 'json',
      data: {photo: photo},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("create",resp);
      }
    });
  },
  updatePhoto(photo, success, error){
    $.ajax({
      url: `api/photos/${photo.id}`,
      type: 'PATCH',
      data_type: 'json',
      data: {photo: photo},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("update",resp);
      }
    });
  },
  deletePhoto(id,success, error){
    $.ajax({
      url: `api/photos/${id}`,
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


module.exports = PhotoApiUtil;
