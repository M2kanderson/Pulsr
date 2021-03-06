const React = require('react');
const TagStore = require('../stores/tag_store');
const SessionStore = require('../stores/session_store');
const TagActions = require('../actions/tag_actions');
const TagForm = require('./tag_form');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;



const PhotoTags = React.createClass({
  getInitialState: function() {
    return {
      tags: TagStore.all(),
      addingTags: false,
      currentUserId: SessionStore.current_user().id
    };
  },
  componentWillMount(){
    this.tagListener = TagStore.addListener(this._onChange);
    TagActions.fetchPhotoTags(this.props.photoId);
  },
  _onChange(){
    this.setState({tags: TagStore.all()});
  },
  componentWillUnmount(){
    this.tagListener.remove();
  },
  belongsToUser(){
    return (this.state.currentUserId === this.props.userId);
  },
  getTagPhotos(tagNames){
    hashHistory.push({
      pathname: "search",
      query: {tagNames:tagNames}
    });
  },
  tags(){
    return this.state.tags.map((tag)=>{
      return(
          <li key={tag.id} className="tag">
            <a onClick={this.getTagPhotos.bind(null, tag.name)}>{tag.name}

            </a>
            {this.belongsToUser() ?
            <button onClick={this.removeTag.bind(null,tag)}>x</button> : ""}
          </li>);
    });
  },
  removeTag(tag){
    TagActions.removeTagFromPhoto(this.props.photoId,tag);
  },
  addTags(){
    this.setState({addingTags: true});
  },
  render: function() {
    return (
      <div className="tags-container">
        <div>
          {this.belongsToUser() ?
          <a onClick={this.addTags} className="show-add-tags">Add tags</a> : ""}

          <h1 className="tag-header">Tags</h1>
        </div>
        <ul class="tags-list">
          <TagForm hidden={!this.state.addingTags} photoId={this.props.photoId}/>
          {this.tags()}
        </ul>
      </div>
    );
  }

});

module.exports = PhotoTags;
