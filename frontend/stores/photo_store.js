const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');
const AlbumConstants = require('../constants/album_constants');

let _photos = {};
const PhotoStore = new Store(AppDispatcher);

function _resetPhotos(photos){
  _photos = {};
  photos.forEach((photo) =>{
    _photos[photo.id] = photo;
  });
  PhotoStore.__emitChange();
}

function _addPhoto(photo){
  _photos[photo.id] = photo;
  PhotoStore.__emitChange();
}

function _removePhoto(photo){
  delete _photos[photo.id];
  PhotoStore.__emitChange();
}

function _removePhotos(photos){
  photos.forEach((photo) =>{
    delete _photos[photo.id];
  });
  PhotoStore.__emitChange();
}

function _addAlbumPhotos(album, photoIds){
  photoIds.forEach((photoId) =>{
    let photo = PhotoStore.find(photoId);
    photo.albums.push(album);
  });
}

PhotoStore.all = function(){
  let photoArray = [];
  Object.keys(_photos).forEach((id) =>{
    photoArray.push(_photos[id]);
  });
  return photoArray.sort(
    function(a, b) {
        return a.created_at - b.created_at;
    }
  );
};

PhotoStore.find = function(id){
  return _photos[id];
};


PhotoStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case PhotoConstants.PHOTOS_RECEIVED:
    _resetPhotos(payload.photos);
    break;
    case PhotoConstants.PHOTO_RECEIVED:
    _addPhoto(payload.photo);
    break;
    case PhotoConstants.PHOTO_REMOVED:
    _removePhoto(payload.photo);
    break;
    case PhotoConstants.PHOTOS_REMOVED:
    _removePhotos(payload.photos);
    break;
    case AlbumConstants.ALBUM_WITH_PHOTOS_RECEIVED:
    _addAlbumPhotos(payload.album, payload.photoIds);
    break;
  }
};


module.exports = PhotoStore;
