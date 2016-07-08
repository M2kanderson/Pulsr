const React = require('react');
const CommentStore = require('../stores/comment_store');
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');
const CommentForm = require('./comment_form');
const CommentShow = require('./comment_show');



const PhotoComments = React.createClass({
  getInitialState: function() {
    return {
      comments: CommentStore.all()
    };
  },
  componentWillMount(){
    this.commentListener = CommentStore.addListener(this._onChange);
    CommentActions.fetchPhotoComments(this.props.photoId);
  },
  _onChange(){
    this.setState({comments: CommentStore.all()});
  },
  componentWillUnmount(){
    this.commentListener.remove();
  },
  comments(){
    return this.state.comments.map((comment)=>{
      return(<CommentShow key={comment.id} comment={comment}/>);
    });
  },
  render: function() {
    let commentForm = SessionStore.isUserLoggedIn() ?
        <CommentForm photoId={this.props.photoId}/> : "";
    return (
      <div className="comments-container">
        <h1 className="comment-header">Comments</h1>
        <ul className="comments">
          {this.comments()}
        </ul>
        {commentForm}

      </div>
    );
  }

});

module.exports = PhotoComments;
