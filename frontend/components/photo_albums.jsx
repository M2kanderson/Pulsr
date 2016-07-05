const React = require('react');
const AlbumStore = require('../stores/album_store');
const SessionStore = require('../stores/session_store');
const AlbumActions = require('../actions/album_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const PhotoAlbums = React.createClass({
  getInitialState: function() {
    return {
      albums: AlbumStore.all()
    };
  },
  componentWillMount(){
    this.albumListener = AlbumStore.addListener(this._onChange);
    AlbumActions.fetchPhotoAlbums(this.props.photoId);
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
      return(
        <li className="photo-album" key={album.id}>
          <a className="thumbnail"
             onClick={this._onClick.bind(this, album.id)}
             style={{backgroundImage: 'url(' + album.photos[0].url + ')'}}
            ></a>
          <span className="title">
            <a onClick={this._onClick.bind(this, album.id)}>{album.title}</a>
          </span>
          <span className="counts">{album.photos.length + " item(s)"}</span>
        </li>);
    });
    return (
      <ul className="album-list">
        {albums}
      </ul>
    );
  }

});

module.exports = PhotoAlbums;
