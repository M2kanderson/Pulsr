const React = require('react');
const CommentStore = require('../stores/comment_store');
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');
const EditCommentForm = require('./edit_comment_form');



const CommentShow = React.createClass({
  getInitialState: function() {
    return {
      comment: this.props.comment,
      editComment: null,
      buttonsHidden: true
    };
  },
  componentWillMount(){
    this.commentListener = CommentStore.addListener(this._onChange);
  },
  _onChange(){
    let comment = CommentStore.find(parseInt(this.state.comment.id));
    this.setState({editComment:null, comment:comment});
  },
  componentWillUnmount(){
    this.commentListener.remove();
  },
  userComment(userId){
    return SessionStore.current_user().id === userId;
  },
  deleteComment(commentId){
    CommentActions.deleteComment(commentId);
  },
  editComment(commentId){
    this.setState({editComment: commentId});
  },
  editButton(){
    let buttonClass = this.state.buttonsHidden ? "hidden-form" : "comment-edit";
    return <a className={buttonClass}
                   onClick={this.editComment.bind(this,this.state.comment.id)}>
    </a>;
  },
  deleteButton(){
    let buttonClass = this.state.buttonsHidden ? "hidden-form" : "comment-delete";
    return <a className={buttonClass}
      onClick={this.deleteComment.bind(this,this.state.comment.id)}>
    </a>;
  },
  showButtons(){
    this.setState({buttonsHidden: false});
  },
  hideButtons(){
    this.setState({buttonsHidden: true});
  },
  comment(){
    return (
      <div>
        <p className="comment-body">
           {this.state.comment.body}
           <span className="comment-actions">
             {this.userComment(this.state.comment.user_id) ?
                    this.editButton() : ""}
             {this.userComment(this.state.comment.user_id) ?
                    this.deleteButton()  : ""}
           </span>
        </p>
      </div>);
  },
  render: function() {
    let commentClass = this.state.editComment ? "comment-editing" : "comment";
    return (
      <li className={commentClass}
          onMouseOver={this.showButtons}
          onMouseOut={this.hideButtons}>
        <div className="comment-icon">
          <img src={this.state.comment.user.icon}></img>
        </div>
        <p className="comment-author">
          <a href="#">{this.state.comment.user.firstname} {this.state.comment.user.lastname}</a>
          <span className="comment-date">{this.state.comment.age+ " ago"} </span>
        </p>
        {this.state.editComment === this.state.comment.id ?
                  <EditCommentForm comment={this.state.comment}/> :
                  this.comment()}
      </li>

    );
  }

});

module.exports = CommentShow;
