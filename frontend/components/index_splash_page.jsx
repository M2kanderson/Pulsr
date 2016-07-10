const React = require('react');

const IndexSplashPage = React.createClass({

  render: function() {
    return (
      <div className="splash-page">
        <div className="index-image">
          <h1 className="index-header">The final frontier for all your photos</h1>
          <p className="index-subheader">Upload, Access, Organize, and Share all your otherworldly photos from anywhere in the universe.</p>
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
