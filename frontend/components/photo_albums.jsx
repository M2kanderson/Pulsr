const React = require('react');
const AlbumStore = require('../stores/album_store');
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
      let src = album.albumMemberCount > 0 ? album.firstPhotoUrl : "http://res.cloudinary.com/pulsr/image/upload/v1467306727/camera-icon-2_dc0oce.png";
      return(
        <li className="photo-album" key={album.id}>
          <a className="thumbnail"
             onClick={this._onClick.bind(this, album.id)}
             style={{backgroundImage: 'url(' + src + ')'}}
            ></a>
          <span className="title">
            <a onClick={this._onClick.bind(this, album.id)}>{album.title}</a>
          </span>
          <span className="counts">{album.albumMemberCount + " item(s)"}</span>
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
