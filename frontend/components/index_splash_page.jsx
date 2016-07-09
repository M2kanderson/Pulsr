const React = require('react');

const IndexSplashPage = React.createClass({

  render: function() {
    return (
      <div className="splash-page">
        <img className="index-image" src="http://res.cloudinary.com/pulsr/image/upload/c_crop,h_381,w_1024/v1467156976/Space-Galaxy-Stars-Wallpaper-High-Resolution-1024x576_ot028u.jpg"></img>
        <h1 className="index-header">The final frontier for all your photos
          <p className="index-subheader">Upload, Access, Organize, and Share all your otherworldly photos from anywhere in the universe.</p>
        </h1>

      </div>
    );
  }

});

module.exports = IndexSplashPage;
