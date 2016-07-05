const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const TagConstants = require('../constants/tag_constants');

let _tags = {};
const TagStore = new Store(AppDispatcher);

function _resetTags(tags){
  _tags = {};
  tags.forEach((tag) =>{
    _tags[tag.id] = tag;
  });
  TagStore.__emitChange();
}

function _addTag(tag){
  _tags[tag.id] = tag;
  TagStore.__emitChange();
}

function _removeTag(tag){
  delete _tags[tag.id];
  TagStore.__emitChange();
}

TagStore.all = function(){
  let tagArray = [];
  Object.keys(_tags).forEach((id) =>{
    tagArray.push(_tags[id]);
  });
  return tagArray;
};

TagStore.find = function(id){
  return _tags[id];
};


TagStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case TagConstants.TAGS_RECEIVED:
    _resetTags(payload.tags);
    break;
    case TagConstants.TAG_RECEIVED:
    _addTag(payload.tag);
    break;
    case TagConstants.TAG_REMOVED:
    _removeTag(payload.tag);
    break;
  }
};


module.exports = TagStore;
