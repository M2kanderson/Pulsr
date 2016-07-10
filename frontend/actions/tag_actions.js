const TagApiUtil = require("../util/tag_api_util");
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('../actions/error_actions');

const TagConstants = require('../constants/tag_constants');

const TagActions = {
  fetchAllTags(){
    TagApiUtil.fetchAllTags(this.receiveAllTags, ErrorActions.setErrors);
  },
  fetchPhotoTags(photoId){
    TagApiUtil.fetchPhotoTags(photoId,this.receiveAllTags, ErrorActions.setErrors);
  },
  fetchTag(id){
    TagApiUtil.fetchTag(id, this.receiveTag, ErrorActions.setErrors);
  },
  createTag(tag){
    TagApiUtil.createTag(tag, this.receiveTag, ErrorActions.setErrors);
  },
  removeTagFromPhoto(photoId, tag){
    TagApiUtil.removeTag(photoId, tag,this.removeTag, ErrorActions.setErrors);
  },
  deleteTag(id){
    TagApiUtil.deleteTag(id,this.removeTag, ErrorActions.setErrors);
  },
  receiveAllTags(tags){
    AppDispatcher.dispatch({
      actionType: TagConstants.TAGS_RECEIVED,
      tags: tags
    });
  },
  receiveTag(tag){
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_RECEIVED,
      tag: tag
    });
  },
  removeTag(tag){
    AppDispatcher.dispatch({
      actionType: TagConstants.TAG_REMOVED,
      tag: tag
    });
  },
};

module.exports = TagActions;
