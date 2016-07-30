const React = require('react');

const IndexSplashPage = React.createClass({

  render: function() {
    return (
      <div className="splash-page">
        <div className="index-image">
          <div className="crosshair-left"></div>
          <div className="crosshair-right"></div>
          <div className="crosshair-center"></div>
          <h1 className="index-header">The final frontier for all your photos</h1>
          <p className="index-subheader">Upload, Access, Organize, and Share all your otherworldly photos from anywhere in the universe.</p>
        </div>
        <div className="explore-image">
          <button>Explore</button>
          <img src="http://res.cloudinary.com/pulsr/image/upload/c_crop,h_381,w_1024/v1467156976/Space-Galaxy-Stars-Wallpaper-High-Resolution-1024x576_ot028u.jpg"></img>
        </div>
        <div className="features">
          <div className="space-feature"></div>
          <div className="location-feature"></div>
        </div>
      </div>
    );
  }

});

module.exports = IndexSplashPage;
