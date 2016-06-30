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
      return(<div className="photos-images" key={photo.id}>
        <img className="photos_image" src={photo.url} onClick={this._onClick.bind(this, photo.id)}></img>
        <p>{photo.title}</p>
        <p>{photo.description}</p>
      </div>);
    });
    return (
      <div >
        {photos}
      </div>
    );
  }

});

module.exports = IndexPhotos;
