const React = require('react');
const PhotoStore = require('../stores/photo_store');
const PhotoActions = require('../actions/photo_actions');
const Masonry = require('react-masonry-component');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const FilteredPhotos = React.createClass({
  getInitialState: function() {
    return {
      photos: PhotoStore.all()
    };
  },
  componentWillMount(){
    this.photoListener = PhotoStore.addListener(this._onChange);
    PhotoActions.fetchTagPhotos(this.props.location.query.tagNames);
  },
  componentWillReceiveProps(){
    PhotoActions.fetchTagPhotos(this.props.location.query.tagNames);
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
        <div className="photos-grid-item" key={photo.id}>
          <img className="photo_image"
               src={photo.url}
               onClick={this._onClick.bind(this, photo.id)}></img>
        </div>);
    });
    return (
      <div className="search-container">
        <h2 className="search-title">Everyone's Photos</h2>
          <div className= "photos-grid-container">
            <div className="photos-grid">
              <Masonry
                elementType={'ul'}
                options={this.masonryOptions}
                diableImagesLoaded={false}
                updateOnEachImageLoad={false}>
                {photos}
              </Masonry>
            </div>
          </div>
      </div>
    );
  }

});

module.exports = FilteredPhotos;
