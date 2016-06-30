const React = require('react');



const PhotoDetail = React.createClass({

  render: function() {
    return (
      <div className="popout-image">
        <img src={this.props.photo.url}></img>
      </div>
    );
  }

});

module.exports = PhotoDetail;
