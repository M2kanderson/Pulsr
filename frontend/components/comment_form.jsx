const React = require('react');
const ReactDOM = require('react-dom');
const CommentStore = require('../stores/comment_store');
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');



const CommentForm = React.createClass({
  getInitialState: function() {
    return {
      commentButton: false,
      body: ""
    };
  },
  updateBody(e){
    this.setState({body:e.target.value});
  },
  createComment(e){
    e.preventDefault();
    CommentActions.createComment({body: this.state.body,
                                user_id: SessionStore.current_user().id,
                                photo_id: this.props.photoId});
    this.setState({body:""});
    ReactDOM.findDOMNode(this.refs.commentInput).value = "";
  },
  onFocus(){
    this.setState({commentButton: true});
  },
  onBlur(e){
    this.setState({commentButton: false});
  },
  render: function() {
    let commentButton = this.state.commentButton ?
                          <input className="comment-button"
                          type="submit"
                          value="Comment"
                          onMouseDown={this.createComment}></input> :
                          <input className="comment-button-hidden"
                          type="submit"
                          value="Comment"></input>;
    return (
      <div className="comments-form">
        <div className="comment-icon">
          <img src={SessionStore.current_user().icon}></img>
        </div>
        <form className="comment-form-field">
          <textarea ref="commentInput"
                    onChange={this.updateBody}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    placeholder="Add a comment"></textarea>
                  {commentButton}
          <div className="comment-arrow"></div>
        </form>
      </div>
    );
  }

});

module.exports = CommentForm;
