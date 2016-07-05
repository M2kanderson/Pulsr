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
        error("fetchAllPhotos",resp);
      }
    });
  },
  fetchUserPhotos(userId, success, error){
    if(!userId)
    {
      userId = -1;
    }
    $.ajax({
      url: 'api/photos',
      type: 'GET',
      data_type: 'json',
      data: {user_id: userId},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAllPhotos",resp);
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
        error("fetchPhoto",resp);
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
        error("createPhoto",resp);
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
        error("updatePhoto",resp);
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
        error("deletePhoto",resp);
      }
    });
  }
};


module.exports = PhotoApiUtil;
