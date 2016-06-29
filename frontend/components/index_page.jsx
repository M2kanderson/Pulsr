const React = require('react');

const IndexPage = React.createClass({

  render: function() {
    return (
      <div >
        <img className="index_image" src="http://res.cloudinary.com/pulsr/image/upload/c_crop,h_381,w_1024/v1467156976/Space-Galaxy-Stars-Wallpaper-High-Resolution-1024x576_ot028u.jpg"></img>
        <h1 className="index_header">The final fronteir for all your photos
          <p className="index_subheader">Upload, Access, Organize, and Share all your otherworldly photos from anywhere in the universe.</p>
        </h1>

      </div>
    );
  }

});

module.exports = IndexPage;
