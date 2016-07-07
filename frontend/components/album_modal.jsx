const React = require('react');
const AlbumActions = require('../actions/photo_actions');
const Modal = require('react-modal');
const ModalStyle = require("../modal_style");



const AlbumModal = React.createClass({
  getInitialState: function() {
    return {
      photos: this.props.albums
    };
  },
  onModalClose(){
    ModalStyle.content.opacity = 0;
    this.setState({modalOpen: false});
  },
  onModalOpen(){
    ModalStyle.content.opacity = 100;
  },
  albums(){
    return this.state.albums.map((album)=>{
      return(
        <div className="album" key={album.id}>
          <img className="album_image"
               src={album.photos[0].url}
               onClick={this._onClick.bind(this, album.id)}></img>
          <span>{album.title}</span>
        </div>);
    });
  },
  modalView(){
    return (<div className="album-modal-view">
      <div className="album-modal-head">
        Add this photo to an album
      </div>
      <div className="album-modal-body">
        <p>Create new album</p>
        {this.albums()}
      </div>
    </div>);
  },
  albumModal(){
    return <Modal
       isOpen={this.state.modalOpen}
       onRequestClose={this.onModalClose}
       style={ModalStyle}
       onAfterOpen={this.onModalOpen}>
      <button onClick={this.onModalClose}>X</button>
      {this.modalView()}
    </Modal>;
  },
  render: function() {
    return this.albumModal();
  }

});

module.exports = AlbumModal;
