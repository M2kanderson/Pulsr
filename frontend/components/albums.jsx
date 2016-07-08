const React = require('react');
const AlbumStore = require('../stores/album_store');
const SessionStore = require('../stores/session_store');
const AlbumActions = require('../actions/album_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const IndexAlbums = React.createClass({
  getInitialState: function() {
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
  render: function() {
    let albums = this.state.albums.map((album)=>{
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
    return (
      <div className="albums-index">
        <h1>Albums</h1>
        <div className="albums-container">
          {albums}
        </div>
      </div>
    );
  }

});

module.exports = IndexAlbums;
