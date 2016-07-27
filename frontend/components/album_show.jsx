const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;
const AlbumStore = require('../stores/album_store');
const SessionStore = require('../stores/session_store');
const AlbumActions = require('../actions/album_actions');
const Masonry = require('react-masonry-component');


let masonryOptions = {
  transitionDuration: 0
};

let style = {
};

const AlbumShow = React.createClass({
  getInitialState: function() {
    let potentialAlbum = AlbumStore.find(parseInt(this.props.params.albumId));
    return {
      album: potentialAlbum ? potentialAlbum : {},
      photos: potentialAlbum ? potentialAlbum.photos: [],
      user: potentialAlbum ? potentialAlbum.user: {}
    };
  },
  componentWillMount(){
    this.albumListener = AlbumStore.addListener(this._onChange);
    AlbumActions.fetchAlbum(this.props.params.albumId);
  },
  componentWillUnmount(){
    this.albumListener.remove();
  },
  _onChange(){
    let potentialAlbum = AlbumStore.find(parseInt(this.props.params.albumId));
    this.setState({album: potentialAlbum ? potentialAlbum : {},
                  photos: potentialAlbum ? potentialAlbum.photos: [],
                  user: potentialAlbum ? potentialAlbum.user: {}
                });
  },
  _showImage(id){
    hashHistory.push(`/photos/${id}`);
  },
  photos(){
    return this.state.photos.map((photo) => {
      return(
        <li key={photo.id} className="grid-item">
          <img onClick={this._showImage.bind(this, photo.id)} src={photo.url} />
        </li>
      );

    });
  },
  render: function() {
    return (
      <div className="album-show">
        <Link className="album-back-link" to={"/albums"}>&lt; Back to Albums List</Link>
        <div className="album-header">
          <div className="album-header-image"
               style={{backgroundImage: 'url(' + this.state.album.firstPhotoUrl + ')'}}>
               <div className="dimmer"></div>
               <div className="album-header-title">
                 {this.state.album.title}</div>
               <div className="album-header-desc">
                 {this.state.album.description}</div>
               <div className="album-header-stats">
                 {this.state.album.albumMemberCount} photos</div>
               <div className="album-header-name">
                 By&#58; {this.state.user.firstname} {this.state.user.lastname}
               </div>
          </div>
        </div>
        <div className= "grid-container">
          <div className="grid">
            <Masonry
              className={'album-gallery'}
              style={style}
              elementType={'ul'}
              options={this.masonryOptions}
              diableImagesLoaded={false}
              updateOnEachImageLoad={false}>
              {this.photos()}
            </Masonry>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = AlbumShow;
