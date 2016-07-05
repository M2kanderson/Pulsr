const AlbumApiUtil = {
  fetchAllAlbums(success, error){
    $.ajax({
      url: 'api/albums',
      type: 'GET',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAllAlbums",resp);
      }
    });
  },
  fetchUserAlbums(userId, success, error){
    if(!userId)
    {
      userId = -1;
    }
    $.ajax({
      url: 'api/albums',
      type: 'GET',
      data_type: 'json',
      data: {user_id: userId},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAllAlbums",resp);
      }
    });
  },
  fetchPhotoAlbums(photoId, success, error){
    if(!photoId)
    {
      photoId = -1;
    }
    $.ajax({
      url: 'api/albums',
      type: 'GET',
      data_type: 'json',
      data: {photo_id: photoId},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAllAlbums",resp);
      }
    });
  },
  fetchAlbum(id, success, error){
    $.ajax({
      url: `api/albums/${id}`,
      type: 'GET',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("fetchAlbum",resp);
      }
    });
  },
  createAlbum(album, success, error){
    $.ajax({
      url: 'api/albums',
      type: 'POST',
      data_type: 'json',
      data: {album: album},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("createAlbum",resp);
      }
    });
  },
  updateAlbum(album, success, error){
    $.ajax({
      url: `api/albums/${album.id}`,
      type: 'PATCH',
      data_type: 'json',
      data: {album: album},
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("updateAlbum",resp);
      }
    });
  },
  deleteAlbum(id,success, error){
    $.ajax({
      url: `api/albums/${id}`,
      type: 'DELETE',
      data_type: 'json',
      success: function(resp) {
        success(resp);
      },
      error: function(resp) {
        error("deleteAlbum",resp);
      }
    });
  }
};


module.exports = AlbumApiUtil;
