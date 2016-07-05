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
    AlbumActions.fetchUserAlbums(SessionStore.current_user().id);
    let potentialAlbum = AlbumStore.find(parseInt(this.props.params.albumId));
    return {
      album: potentialAlbum ? potentialAlbum : {},
      photos: potentialAlbum ? potentialAlbum.photos: []
    };
  },
  componentWillMount(){
    this.albumListener = AlbumStore.addListener(this._onChange);
    // PhotoActions.fetchAllPhotos();
  },
  componentWillUnmount(){
    this.albumListener.remove();
  },
  _onChange(){
    let potentialAlbum = AlbumStore.find(parseInt(this.props.params.albumId));
    this.setState({album: potentialAlbum ? potentialAlbum : {},
                  photos: potentialAlbum ? potentialAlbum.photos: {}
                });
  },
  _showImage(id){
    hashHistory.push(`/photos/${id}`);
  },
  render: function() {
    let childElements = this.state.photos.map((photo) => {
      return(
        <li key={photo.id} className="grid-item">
          <img onClick={this._showImage.bind(this, photo.id)} src={photo.url} />
        </li>
      );

    });
    return (
      <div className="album-show">
        <Link className="album-back-link" to={"/albums"}>&lt; Back to Albums List</Link>
        <div className= "grid-container">
          <div className="grid">
            <Masonry
              className={'album-gallery'}
              style={style}
              elementType={'ul'}
              options={this.masonryOptions}
              diableImagesLoaded={false}
              updateOnEachImageLoad={false}>
              {childElements}
            </Masonry>
          </div>
        </div>
      </div>


    );
  }

});

module.exports = AlbumShow;
