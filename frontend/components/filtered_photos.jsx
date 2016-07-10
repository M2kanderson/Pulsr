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
  noPhotosFoundMessage(){
    return <div className="nothing-found">
      <p>Oops! No photos were found matching "{this.props.location.query.tagNames}" 	&#9785;. Please try again.</p>
    </div>;
  },
  photos(){
    if(this.state.photos.length <=0){
      return this.noPhotosFoundMessage();
    }
    return this.state.photos.map((photo)=>{
      return(
        <div className="photos-grid-item" key={photo.id}>
          <img className="photo_image"
               src={photo.url}
               onClick={this._onClick.bind(this, photo.id)}></img>
        </div>);
    });
  },
  render: function() {
    let title = this.state.photos.length > 0 ?
        <h2 className="search-title">Everyone's Photos</h2> : "";
    return (
      <div className="search-container">
        {title}
          <div className= "photos-grid-container">
            <div className="photos-grid">
              <Masonry
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

module.exports = FilteredPhotos;
