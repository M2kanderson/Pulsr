const React = require('react');

let photos = [
  "http://res.cloudinary.com/pulsr/image/upload/v1470010302/pulsr-photos/Beautiful-amazing-great-font-b-landscape-b-font-font-b-planets-b-font-stars-space-font.jpg",
  "http://res.cloudinary.com/pulsr/image/upload/v1470010263/pulsr-photos/98367a82dfe9ca0675bc6fe98cc0d00c.jpg",
  "http://res.cloudinary.com/pulsr/image/upload/c_crop,h_381,w_1024/v1467156976/Space-Galaxy-Stars-Wallpaper-High-Resolution-1024x576_ot028u.jpg",
  "http://res.cloudinary.com/pulsr/image/upload/v1470013347/pulsr-photos/alien-landscapes-space-fantasy-planets-desktop-hd-wallpaper.jpg",

];

const IndexSplashPage = React.createClass({
  getInitialState: function() {
    return {
      photoIndex: 0
    };
  },
  switchPhoto(){
    this.setState({photoIndex:(this.state.photoIndex + 1) % photos.length});
  },
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
          <button onClick={this.switchPhoto}>Explore</button>
          <img src={photos[this.state.photoIndex]}></img>
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
