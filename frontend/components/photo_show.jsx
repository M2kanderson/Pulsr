const React = require('react');
const PhotoStore = require('../stores/photo_store');
const PhotoActions = require('../actions/photo_actions');
const Modal = require('react-modal');
const ModalStyle = require('../photo_modal_style');
const PhotoDetail = require('./photo_detail');
const Comments = require('./comments');
const Tags = require('./tags');
const PhotoAlbums = require("./photo_albums");
const PhotoInfo = require("./photo_info");


const PhotoShow = React.createClass({
  getInitialState: function() {
    PhotoActions.fetchAllPhotos();
    let potentialPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    return {
      photo: potentialPhoto ? {title: potentialPhoto.title,
                               description: potentialPhoto.description,
                               url: potentialPhoto.url,
                               id: potentialPhoto.id} : {},
      user: potentialPhoto ? potentialPhoto.user: {},
      albums: potentialPhoto ? potentialPhoto.albums : {},
      editing: null,
      modalOpen: false
    };
  },
  componentWillMount(){
    this.photoListener = PhotoStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.photoListener.remove();
  },
  _onChange(){
    let potentialPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    this.setState({photo: potentialPhoto ? {title: potentialPhoto.title,
                                            description: potentialPhoto.description,
                                            url: potentialPhoto.url,
                                            id: potentialPhoto.id} : {},
                  user: potentialPhoto ? potentialPhoto.user: {},
                  albums: potentialPhoto ? potentialPhoto.albums : {}
                });
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
  updateTitle(e){
    this.setState({photo: {title:e.target.value,
                   description:this.state.photo.description,
                   url:this.state.photo.url,
                   id:this.state.photo.id
                   }});
  },
  updateDescription(e){
    this.setState({photo: {title:this.state.photo.title,
                   description:e.target.value,
                   url:this.state.photo.url,
                   id:this.state.photo.id
                   }});
  },
  toggleEditing(itemId){
    this.setState({editing: itemId});
  },
  _updatePhoto(){
    this.toggleEditing(null);
    PhotoActions.updatePhoto(this.state.photo);
  },
  render: function() {
    return (
      <div >
        <div className="photo-show">
          <img className="photo_image_show"
                src={this.state.photo.url}
                onClick={this._popOutPhoto}></img>;
        </div>
        <div className="photo-show-info">

          <div className="photo-left-view">
            <PhotoInfo photo={this.state.photo} user={this.state.user}></PhotoInfo>
            <div className="comments-view">
              <Comments photoId={this.props.params.photoId}/>
            </div>
          </div>

          <div className="photo-right-view">
            <div className="album-view">
              <h5>This photo has {this.state.albums.length} album(s)</h5>
              <PhotoAlbums photoId={this.props.params.photoId}/>
            </div>
            <div className="tag-view">
              <Tags userId={this.state.user.id} photoId={this.props.params.photoId} />
            </div>
          </div>
        </div>

        <Modal
           isOpen={this.state.modalOpen}
           onRequestClose={this.onModalClose}
           style={ModalStyle}
           onAfterOpen={this.onModalOpen}>
           <div onClick={this.onModalClose}>
             <PhotoDetail photo={this.state.photo}/>
           </div>
        </Modal>
      </div>
    );
  }

});

module.exports = PhotoShow;
