const React = require('react');
const PhotoActions = require('../actions/photo_actions');
var ReactTooltip = require("react-tooltip");


const Photo = React.createClass({
  getInitialState: function() {
    return {
      photo: this.props.photo
    };
  },
  logClick(e){
    e.stopPropagation();
    this.props.photo.public = !this.props.photo.public;
    PhotoActions.updatePhoto(this.props.photo);
  },
  render: function() {
      let className = this.props.selected ?
            "cameraroll-photo-container selected" :
            "cameraroll-photo-container";
      let check = this.props.selected ? (
              <div className="select-check check-selected"
                ></div>) :
              <div className="select-check"
                ></div>;
      let privacyButton = this.props.photo.public ?
          <button data-tip="Photo is public"
                  className="privacy-button public"
                  onClick={this.logClick}></button> :
          <button data-tip="Photo is private"
                  className="privacy-button private"
                  onClick={this.logClick}></button>;
      return(
        <div className="cameraroll-photo-items">
          {privacyButton}
          <div className={className}>
            {check}

            <img className="cameraroll-photo"
                 src={this.props.photo.url}
                 id={this.props.photo.id}></img>
          </div>
          <ReactTooltip />
        </div>);

  }

});

module.exports = Photo;
