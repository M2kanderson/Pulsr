const React = require('react');
const PhotoStore = require('../stores/photo_store');
const PhotoActions = require('../actions/photo_actions');
const Modal = require('react-modal');
const ModalStyle = require('../photo_modal_style');
const PhotoDetail = require('./photo_detail');
const Lightbox = require('react-images');


const PhotoShow = React.createClass({
  getInitialState: function() {
    PhotoActions.fetchAllPhotos();
    let potentialPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    return {
      photo: potentialPhoto ? potentialPhoto : {},
      modalOpen: false
    };
  },
  componentWillMount(){
    this.photoListener = PhotoStore.addListener(this._onChange);
    // PhotoActions.fetchAllPhotos();
  },
  componentWillUnmount(){
    this.photoListener.remove();
  },
  _onChange(){
    let potentialPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    this.setState({photo: potentialPhoto ? potentialPhoto : {}});
  },
  _popOutPhoto(){
    this.component = <PhotoDetail photo={this.state.photo}/>;
    this.setState({modalOpen:true});
  },
  onModalClose(){
    this.setState({modalOpen: false});
  },
  onModalOpen(){
    ModalStyle.content.width = "1200px";
    ModalStyle.content.height = "550px";
    ModalStyle.content.padding = "0";
    ModalStyle.content.margin = "0";
    ModalStyle.content.opacity = 100;
  },
  render: function() {
    return (
      <div >
        <div className="photo-detail">
          <img className="photo_image_detail"
                src={this.state.photo.url}
                onClick={this._popOutPhoto}></img>

          <p>{this.state.photo.title}</p>
        </div>
        <Modal
           isOpen={this.state.modalOpen}
           onRequestClose={this.onModalClose}
           style={ModalStyle}
           onAfterOpen={this.onModalOpen}>
           <div onClick={this.onModalClose}>
             <PhotoDetail photo={this.state.photo}/>
           </div>
        </Modal>;
      </div>
    );
  }

});

module.exports = PhotoShow;
