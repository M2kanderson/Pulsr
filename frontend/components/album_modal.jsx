const React = require('react');
const AlbumStore = require('../stores/album_store');
const AlbumActions = require('../actions/album_actions');
const SessionStore = require('../stores/session_store');
const Modal = require('react-modal');
const AlbumModalStyle = require("../album_modal_style");
const AlbumForm = require("./album_form");



const AlbumModal = React.createClass({
  getInitialState: function() {
    return {
      albums: AlbumStore.all(),
      openModal: this.props.openModal,
      albumForm: false
    };
  },
  componentWillMount(){
    this.albumListener = AlbumStore.addListener(this._onChange);
    AlbumActions.fetchUserAlbums(SessionStore.current_user().id);
  },
  _onChange(){
    this.setState({albums: AlbumStore.all(), albumForm: false});
  },
  componentWillUnmount(){
    this.albumListener.remove();
  },
  componentWillReceiveProps(){
    this.setState({openModal:this.props.openModal});
  },
  onModalClose(){
    AlbumModalStyle.content.opacity = 0;
    this.setState({albumForm:false});
    this.props.closeModal();
  },
  onModalOpen(){
    AlbumModalStyle.content.opacity = 100;
  },
  addToAlbum(album){
    AlbumActions.addPhotosToAlbum(album, this.props.photoIds);
    // this.props.photoIds.forEach((photoId) =>{
    //   let photo = PhotoStore.find(photoId);
    //   console.log(photo.albums);
    //   photo.albums.push(album);
    //   PhotoActions.updatePhoto(photo);
    // });

  },
  createAlbum(){
    this.setState({albumForm: true});
  },
  closeAlbumForm(){
    this.setState({albumForm: false});
  },
  albums(){
    return this.state.albums.map((album)=>{
      let src = album.albumMemberCount > 0 ? album.firstPhotoUrl : "http://res.cloudinary.com/pulsr/image/upload/v1467306727/camera-icon-2_dc0oce.png";
      return(
        <div className="album-selection-list-item"
             key={album.id}
             onClick={this.addToAlbum.bind(null, album)}>
          <div className="album-selection-list-item-container">
            <img className="album-selection-list-item-icon"
                 src={src}></img>
          </div>
         <div className="album-selection-list-item-labels">
           <span className="album-selection-list-item-title">{album.title}
           </span>
           <span className="album-selection-list-item-stats">
             {album.photos.length} item(s)</span>
         </div>

        </div>);
    });
  },
  modalView(){
    return (<div className="album-modal-view">
      <div className="album-modal-head">
        Add this photo to an album
      </div>
      <div className="album-modal-body">
        <div className="album-selection-list">
          <li onClick={this.createAlbum}
            className="album-selection-list-item">
            <span className="album-selection-list-item-title">
              Create new album</span>
          </li>
          {this.albums()}
        </div>
      </div>
    </div>);
  },
  albumModal(){
    let form = this.state.albumForm ?
     <AlbumForm closeAlbumForm={this.closeAlbumForm}
                photoIds={this.props.photoIds} /> : this.modalView();
    return <Modal
       isOpen={this.props.openModal}
       onRequestClose={this.onModalClose}
       style={AlbumModalStyle}
       onAfterOpen={this.onModalOpen}>
      <span className="close-x" onClick={this.onModalClose}>X</span>
      {form}
    </Modal>;
  },
  render: function() {
    return this.albumModal();
  }

});

module.exports = AlbumModal;
