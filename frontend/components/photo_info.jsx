const React = require('react');
const PhotoStore = require('../stores/photo_store');
const SessionStore = require('../stores/session_store');
const EditPhotoInfoForm = require('./edit_photo_info_form');



const PhotoInfo = React.createClass({
  getInitialState: function() {
    return {
      photo: this.props.photo,
      user: this.props.user,
      editInfo: null,
      buttonsHidden: true
    };
  },
  componentWillMount(){
    this.photoListener = PhotoStore.addListener(this._onChange);
  },
  _onChange(){
    let photo = PhotoStore.find(parseInt(this.props.photo.id));
    this.setState({editInfo:null, photo:photo});
  },
  componentWillUnmount(){
    this.photoListener.remove();
  },
  userPhoto(userId){
    return SessionStore.current_user().id === userId;
  },
  editInfo(photoId){
    this.setState({editInfo: photoId});
  },
  editButton(){
    let buttonClass = this.state.buttonsHidden ? "hidden-form" : "photo-info-edit";
    return <a className={buttonClass}
                   onClick={this.editInfo.bind(this,this.props.photo.id)}>
    </a>;
  },
  showButtons(){
    this.setState({buttonsHidden: false});
  },
  hideButtons(){
    this.setState({buttonsHidden: true});
  },
  info(){
    return (
      <section className="photo-info">
         <p className="photo-title">{this.props.photo.title}</p>
         <p className="photo-description">{this.props.photo.description}</p>
         <span className="photo-info-actions">
           {this.userPhoto(this.props.user.id) ?
                  this.editButton() : ""}
         </span>
      </section>);
  },
  render: function() {
    let infoClass = this.state.editInfo ? "photo-info-editing" : "photo-info";
    return (
      <div className="photo-info-view">
        <div className="user-icon">
          <img src={this.props.user.icon}></img>
        </div>
        <div className="photo-info-container">
          <p className="photo-author">
            <a href="#">{this.props.user.firstname} {this.props.user.lastname}</a>
          </p>
          <li className={infoClass}
              onMouseOver={this.showButtons}
              onMouseOut={this.hideButtons}>
            {this.state.editInfo === this.props.photo.id ?
                      <EditPhotoInfoForm photo={this.props.photo}/> :
                      this.info()}
          </li>
        </div>
      </div>

    );
  }

});

module.exports = PhotoInfo;
