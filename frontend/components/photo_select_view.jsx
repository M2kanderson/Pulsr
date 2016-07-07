const React = require('react');
const PhotoStore = require('../stores/photo_store');
const PhotoActions = require('../actions/photo_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const AlbumModal = require("./album_modal");



const PhotoSelectView = React.createClass({
  getInitialState: function() {
    return {
      photoIds: this.props.photoIds
    };
  },
  componentWillReceiveProps(){
    this.setState({photoIds:this.props.photoIds});
  },
  deletePhotos(){
    PhotoActions.deletePhotos(this.props.photoIds);
  },
  addToAlbum(){
    return <AlbumModal />;
  },
  render: function() {
    let photos= this.props.photoIds.map((photoId) => {
      return <div key={photoId} className="selected-photo">
        <img src={PhotoStore.find(photoId).url}></img>
      </div>;

    });
    return(
      <div className="photo-select-view">
        <div className="number-of-selected-photos">
          <h3>{this.props.photoIds.length} Selected</h3>
        </div>

        <div className="cameraroll-tray">
          {photos}
        </div>

        <div className="selection-tray-tools">
          <div className="cameraroll-delete-view">
            <div className="delete-selected-photos"
                 onClick={this.deletePhotos}>
              <div className="delete-selected-photos-icon"></div>
              <span>Delete</span>
            </div>
          </div>
          <div className="cameraroll-album-view">
            <div className="album-selected-photos">
              <div className="album-selected-photos-icon"></div>
              <span onClick={this.addToAlbum}>Add to album</span>
            </div>
          </div>
          <a className="clearSelection"
            onClick={this.props.clearSelection}>Clear Selection</a>
        </div>
      </div>
    );
  }

});

module.exports = PhotoSelectView;
