const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const PhotoConstants = require('../constants/photo_constants');

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

PhotoStore.all = function(){
  let photoArray = [];
  Object.keys(_photos).forEach((id) =>{
    photoArray.push(_photos[id]);
  });
  return photoArray;
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
  }
};


module.exports = PhotoStore;
