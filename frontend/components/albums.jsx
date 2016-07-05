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
      return(
        <div className="album" key={album.id}>
          <img className="albums_image"
               src={album.photos[0].url}
               onClick={this._onClick.bind(this, album.id)}></img>
          <p>{album.title}</p>
        </div>);
    });
    return (
      <div className="albums-index">
        <h1>Albums</h1>
        {albums}
      </div>
    );
  }

});

module.exports = IndexAlbums;
