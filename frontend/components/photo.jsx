const React = require('react');


const Photo = React.createClass({
  getInitialState: function() {
    return {
      photo: this.props.photo
    };
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
      return(
        <div className={className}>
          {check}
          <img className="cameraroll-photo"
               src={this.props.photo.url}
               id={this.props.photo.id}></img>
        </div>);
  }

});

module.exports = Photo;
