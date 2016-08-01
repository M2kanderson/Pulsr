const React = require('react');
const AlbumStore = require('../stores/album_store');
const SessionStore = require('../stores/session_store');
const AlbumActions = require('../actions/album_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const UserBanner = require('./user_banner');


const IndexAlbums = React.createClass({
  getInitialState: function() {
    AlbumActions.fetchUserAlbums(SessionStore.current_user().id);
    return {
      albums: AlbumStore.all()
    };
  },
  componentWillMount(){
    this.albumListener = AlbumStore.addListener(this._onChange);
    AlbumActions.fetchUserAlbums(SessionStore.current_user().id);
  },
  _onChange(){
    this.setState({albums: AlbumStore.all()});
  },
  componentWillUnmount(){
    this.albumListener.remove();
  },
  _onClick(id){
    hashHistory.push(`/albums/${id}`);
  },
  albums(){
    if(this.state.albums.length === 0){
      return <p>Welcome to the Albums Tab! You haven't created any albums yet
      for your photos.  Try adding some photos to an album in the cameraroll tab
    </p>;
    }
    return this.state.albums.map((album)=>{
      let src = album.photos.length > 0 ? album.photos[0].url : "http://res.cloudinary.com/pulsr/image/upload/v1467306727/camera-icon-2_dc0oce.png";
      return(
        <div className="photo-album" key={album.id}>
          <div className="albums-image-container">
            <img className="albums-image"
                 src={src}
                 onClick={this._onClick.bind(this, album.id)}></img>
          </div>
          <div className="album-info-container">
            <span className="title">
              <a onClick={this._onClick.bind(this, album.id)}>{album.title}</a>
            </span>
            <span className="counts">{album.photos.length + " item(s)"}</span>
          </div>
        </div>);
    });
  },
  render: function() {
    return (
      <div>
        <UserBanner />
          <div className="albums-index">
            <div className="albums-container">
              {this.albums()}
            </div>
          </div>
      </div>
    );
  }

});

module.exports = IndexAlbums;
