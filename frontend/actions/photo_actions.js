const PhotoApiUtil = require("../util/photo_api_util");
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('../actions/error_actions');

const PhotoConstants = require('../constants/photo_constants');

const PhotoActions = {
  fetchAllPhotos(){
    PhotoApiUtil.fetchAllPhotos(this.receiveAllPhotos, ErrorActions.setErrors);
  },
  fetchUserPhotos(userId){
    PhotoApiUtil.fetchUserPhotos(userId,this.receiveAllPhotos, ErrorActions.setErrors);
  },
  fetchTagPhotos(tagNames)
  {
    PhotoApiUtil.fetchTagPhotos(tagNames,this.receiveAllPhotos, ErrorActions.setErrors);
  },
  fetchPhoto(id){
    PhotoApiUtil.fetchPhoto(id, this.receivePhoto, ErrorActions.setErrors);
  },
  createPhoto(photo){
    PhotoApiUtil.createPhoto(photo,this.receivePhoto, ErrorActions.setErrors);
  },
  updatePhoto(photo){
    PhotoApiUtil.updatePhoto(photo,this.receivePhoto, ErrorActions.setErrors);
  },
  deletePhoto(id){
    PhotoApiUtil.deletePhoto(id,this.removePhoto, ErrorActions.setErrors);
  },
  receiveAllPhotos(photos){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECEIVED,
      photos: photos
    });
  },
  receivePhoto(photo){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_RECEIVED,
      photo: photo
    });
  },
  removePhoto(photo){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.PHOTO_REMOVED,
      photo: photo
    });
  },
};

module.exports = PhotoActions;
