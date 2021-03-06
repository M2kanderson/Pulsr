const React = require('react');
const ReactDOM = require('react-dom');
const PhotoActions = require('../actions/photo_actions');



const EditPhotoInfoForm = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.photo.title,
      description: this.props.photo.description,
      public:this.props.photo.public,
      url:this.props.photo.url,
      user_id: this.props.photo.user_id,
      id: this.props.photo.id
    };
  },
  updateTitle(e){
    this.setState({title:e.target.value});
  },
  updateDescription(e){
    this.setState({description:e.target.value});
  },
  _updatePhoto(e){
    e.preventDefault();
    PhotoActions.updatePhoto(this.state);
  },
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.titleInput).focus();
  },
  render: function() {
    return (
      <form onSubmit={this._updatePhoto}>
        <input className="edit-photo-title"
               type="text" id="title"
               onChange={this.updateTitle}
               value={this.state.title}
               ref="titleInput"></input>
        <textarea className="edit-photo-description"
                  id="description"
                  placeholder="Add description..."
                  onChange={this.updateDescription}
                  value={this.state.description}>
        </textarea>
        <input className="edit-photo-info-button"
          type="submit" value="Done"></input>
      </form>);

  }

});

module.exports = EditPhotoInfoForm;
