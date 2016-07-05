const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const AlbumConstants = require('../constants/album_constants');

let _albums = {};
const AlbumStore = new Store(AppDispatcher);

function _resetAlbums(albums){
  _albums = {};
  albums.forEach((album) =>{
    _albums[album.id] = album;
  });
  AlbumStore.__emitChange();
}

function _addAlbum(album){
  _albums[album.id] = album;
  AlbumStore.__emitChange();
}

function _removeAlbum(album){
  delete _albums[album.id];
  AlbumStore.__emitChange();
}

AlbumStore.all = function(){
  let albumArray = [];
  Object.keys(_albums).forEach((id) =>{
    albumArray.push(_albums[id]);
  });
  return albumArray;
};

AlbumStore.find = function(id){
  return _albums[id];
};


AlbumStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case AlbumConstants.ALBUMS_RECEIVED:
    _resetAlbums(payload.albums);
    break;
    case AlbumConstants.ALBUM_RECEIVED:
    _addAlbum(payload.album);
    break;
    case AlbumConstants.ALBUM_REMOVED:
    _removeAlbum(payload.album);
    break;
  }
};


module.exports = AlbumStore;
