const AlbumApiUtil = require("../util/album_api_util");
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('../actions/error_actions');

const AlbumConstants = require('../constants/album_constants');

const AlbumActions = {
  fetchAllAlbums(){
    AlbumApiUtil.fetchAllAlbums(this.receiveAllAlbums, ErrorActions.setErrors);
  },
  fetchUserAlbums(userId){
    AlbumApiUtil.fetchUserAlbums(userId,this.receiveAllAlbums, ErrorActions.setErrors);
  },
  fetchPhotoAlbums(photoId){
    AlbumApiUtil.fetchPhotoAlbums(photoId,this.receiveAllAlbums, ErrorActions.setErrors);
  },
  fetchAlbum(id){
    AlbumApiUtil.fetchAlbum(id, this.receiveAlbum, ErrorActions.setErrors);
  },
  createAlbum(album){
    AlbumApiUtil.createAlbum(album,this.receiveAlbum, ErrorActions.setErrors);
  },
  createAlbumWithPhotos(album, photoIds){
    AlbumApiUtil.createAlbumWithPhotos(album,photoIds,this.receiveAlbum, ErrorActions.setErrors);
  },
  updateAlbum(album){
    AlbumApiUtil.updateAlbum(album,this.receiveAlbum, ErrorActions.setErrors);
  },
  addPhotosToAlbum(album, photoIds){
    AlbumApiUtil.addPhotosToAlbum(album,photoIds,this.receiveAlbum, ErrorActions.setErrors);
  },
  deleteAlbum(id){
    AlbumApiUtil.deleteAlbum(id,this.removeAlbum, ErrorActions.setErrors);
  },
  receiveAllAlbums(albums){
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUMS_RECEIVED,
      albums: albums
    });
  },
  receiveAlbum(album){
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_RECEIVED,
      album: album
    });
  },
  removeAlbum(album){
    AppDispatcher.dispatch({
      actionType: AlbumConstants.ALBUM_REMOVED,
      album: album
    });
  },
};

module.exports = AlbumActions;
