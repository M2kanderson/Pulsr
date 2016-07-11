const React = require('react');
const SessionStore = require('../stores/session_store');
const AlbumActions = require('../actions/album_actions');



const AlbumForm = React.createClass({
  getInitialState: function() {
    return {
      title: "",
      description: "",
      activeButton: false
    };
  },
  updateTitle(e){
    if(e.target.value.length > 0)
    {
      this.setState({title:e.target.value, activeButton: true});
    }
    else {
      this.setState({title:e.target.value, activeButton: false});
    }
  },
  updateDescription(e){
    this.setState({description:e.target.value});
  },
  createAlbum(e){
    e.preventDefault();
    AlbumActions.createAlbumWithPhotos({title: this.state.title,
                                user_id: SessionStore.current_user().id,
                                description: this.state.description}, this.props.photoIds);
    this.setState({description:"", title: ""});
    this.props.closeAlbumForm();
  },
  render: function() {
    return (
      <div className="album-form">
        <form className="album-form-field" onSubmit={this.createAlbum}>
          <input className="album-form-title" onChange={this.updateTitle}
                 placeholder="Add a title"></input>
          <textarea className="album-form-desc" onChange={this.updateDescription}
                    placeholder="Add a description (optional)"></textarea>
          <input type="submit"
            value="Create Album"
            disabled={!this.state.activeButton} className="album-submit"></input>
        </form>
      </div>
    );
  }

});

module.exports = AlbumForm;
