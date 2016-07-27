const React = require('react');
const PhotoStore = require('../stores/photo_store');
const PhotoActions = require('../actions/photo_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const IndexPhotos = React.createClass({
  getInitialState: function() {
    return {
      photos: PhotoStore.all()
    };
  },
  componentWillMount(){
    this.photoListener = PhotoStore.addListener(this._onChange);
    PhotoActions.fetchAllPhotos();
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
  render: function() {
    let photos = this.state.photos.map((photo)=>{
      return(
          <div className="photos-images" key={photo.id}>
            <img className="photos-image" src={photo.url} onClick={this._onClick.bind(this, photo.id)}></img>
            <div className="index-photo-info-container">
              <img className="user-icon-photo-index"
                src={photo.user.icon}></img>
              <div className="index-photo-info">
                <p className="photos-image-name">{photo.user.firstname} {photo.user.lastname}</p>
                <p className="photos-image-title">{photo.title}</p>
              </div>
            </div>
          </div>);
    });
    return (
      <div className="photos-index">
        {photos}
      </div>
    );
  }

});

module.exports = IndexPhotos;
