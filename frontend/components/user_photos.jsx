const React = require('react');
const PhotoStore = require('../stores/photo_store');
const SessionStore = require('../stores/session_store');
const PhotoActions = require('../actions/photo_actions');
const Masonry = require('react-masonry-component');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const UserBanner = require('./user_banner');


const UserPhotos = React.createClass({
  getInitialState: function() {
    return {
      photos: PhotoStore.all()
    };
  },
  componentWillMount(){
    this.photoListener = PhotoStore.addListener(this._onChange);
    PhotoActions.fetchUserPhotos(SessionStore.current_user().id);
  },
  _onChange(){
    this.setState({photos: PhotoStore.all()});
  },
  componentWillUnmount(){
    this.photoListener.remove();
  },
  _onClick(id){
    hashHistory.push(`/photos/${id}`);
  },
  postImage(image){
    let img = {url:image.url, user_id: SessionStore.current_user().id, title:image.public_id, public: false};
    PhotoActions.createPhoto(img);
  },
  render: function() {
    let pubPhotos = this.state.photos.filter((photo) => {
      return photo.public;
    });
    let photos = pubPhotos.map((photo)=>{

        return(
          <div className="grid-item" key={photo.id}>
            <img className="photo_image"
                 src={photo.url}
                 onClick={this._onClick.bind(this, photo.id)}></img>
          </div>);


    });
    if(photos.length === 0){
      return (
        <div>
          <UserBanner />
            <p className="photostream-no-photos">Welcome to your photostream!
            This is your public face and only shows what other users can view.
            You haven't set any photos to public yet! Set your photos to be
            viewable by other users in the Cameraroll Tab.</p>
        </div>);
    }
    return (
      <div>
        <UserBanner />
          <div className="albums-index">
              <div className= "grid-container">
                <div className="grid">
                  <Masonry
                    className={'photo-gallery'}
                    elementType={'ul'}
                    options={this.masonryOptions}
                    diableImagesLoaded={false}
                    updateOnEachImageLoad={false}>
                    {photos}
                  </Masonry>
                </div>
              </div>
          </div>
      </div>

    );
  }

});

module.exports = UserPhotos;
