const React = require('react');
const PhotoStore = require('../stores/photo_store');
const PhotoActions = require('../actions/photo_actions');
const Modal = require('react-modal');
const ModalStyle = require('../photo_modal_style');
const PhotoDetail = require('./photo_detail');
// const Slider = require('react-slick');
const Comments = require('./comments');
const Tags = require('./tags');
const PhotoAlbums = require("./photo_albums");


let sliderSettings ={
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll : 1,
  initialSlide: 2,
};

const PhotoShow = React.createClass({
  getInitialState: function() {
    PhotoActions.fetchAllPhotos();
    let potentialPhoto = PhotoStore.find(parseInt(this.props.params.photoId));
    let albumPhotos = [];
    if(potentialPhoto){
      albumPhotos = potentialPhoto.album ? potentialPhoto.album.photos : [];
    }
    return {
      photo: potentialPhoto ? {title: potentialPhoto.title,
                               description: potentialPhoto.description,
                               url: potentialPhoto.url,
                               id: potentialPhoto.id} : {},
      user: potentialPhoto ? potentialPhoto.user: {},
      album: potentialPhoto ? potentialPhoto.album : {},
      albumPhotos: albumPhotos,
      editing: null,
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
    let albumPhotos = [];
    if(potentialPhoto){
      albumPhotos = potentialPhoto.album ? potentialPhoto.album.photos : [];
    }
    this.setState({photo: potentialPhoto ? {title: potentialPhoto.title,
                                            description: potentialPhoto.description,
                                            url: potentialPhoto.url,
                                            id: potentialPhoto.id} : {},
                  user: potentialPhoto ? potentialPhoto.user: {},
                  album: potentialPhoto ? potentialPhoto.album : {},
                  albumPhotos: albumPhotos
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
  renderItemOrEditField(item){
      switch (item) {
        case "title":
        if(this.state.editing === "title"){
          return (
            <form onSubmit={this._updatePhoto}>
              <input type="text" id="title"
                          onChange={this.updateTitle}
                          value={this.state.photo.title}></input>
              <input type="submit" value="Finish Editing"></input>
            </form>);

        }else{
          return (<div className="photo-info-item">
            <p
              key={ item }
              className="photo-show-title">{this.state.photo.title}
              <img className="edit-icon" onClick={this.toggleEditing.bind(null, item)} src="http://res.cloudinary.com/pulsr/image/upload/v1467413964/edit_256.png"></img>
            </p>
          </div>);

        }
        case "description":
        if(this.state.editing === "description"){
          return (
            <form onSubmit={this._updatePhoto}>
              <textarea onChange={this.updateDescription}
                        value={this.state.photo.description}>
              </textarea>
            <input type="submit" value="Finish Editing"></input>
            </form>);
        }else{
          return (<div className="photo-info-item">
            <p
              key={ item }
              className="photo-show-description">{this.state.photo.description}
              <img className="edit-icon" onClick={this.toggleEditing.bind(null, item)} src="http://res.cloudinary.com/pulsr/image/upload/v1467413964/edit_256.png"></img>
            </p>
          </div>);
        }
      }

  },
  render: function() {
    let images = this.state.albumPhotos.map((photo) =>{
      return <img className="photo_image_show"
            src={photo.url}
            onClick={this._popOutPhoto.bind(this, photo)}></img>;
    });
    return (
      <div >
        <div className="photo-show">
          <img className="photo_image_show"
                src={this.state.photo.url}
                onClick={this._popOutPhoto}></img>;
        </div>
        <div className="photo-show-info">

          <div className="photo-left-view">
            <img className="user-icon" src={this.state.user.icon}></img>
            <p className="photo-show-user">
              {this.state.user.firstname}  {this.state.user.lastname}</p>
            {this.renderItemOrEditField("title")}
            {this.renderItemOrEditField("description")}
            <div className="comments-view">
              <Comments photoId={this.props.params.photoId}/>
            </div>
          </div>

          <div className="photo-right-view">
            <div className="album-view">
              <h5>This photo has 1 album</h5>
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
