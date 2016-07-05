const React = require('react');
const UploadButton = React.createClass({
  _addPhoto(){
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) =>{
      if(error === null){
        images.forEach((image) =>{
          this.props.postImage(image);
        });

      }
    });
  },
  render: function() {
    return (
      <div>
        <img className="add-photo" onClick={this._addPhoto}
             src="http://res.cloudinary.com/pulsr/image/upload/v1467399198/star%20wars/add.png">
        </img>
        <p>Add Photo</p>
      </div>
    );
  }

});

module.exports = UploadButton;
