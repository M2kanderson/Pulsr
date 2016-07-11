const React = require('react');
const ReactDOM = require('react-dom');
const CommentActions = require('../actions/comment_actions');



const EditCommentForm = React.createClass({
  getInitialState: function() {
    return {
      body: this.props.comment.body,
      user_id: this.props.comment.user_id,
      photo_id: this.props.comment.photo_id,
      id: this.props.comment.id
    };
  },
  updateBody(e){
    this.setState({body:e.target.value});
  },
  updateComment(e){
    e.preventDefault();
    CommentActions.updateComment(this.state);
  },
  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.commentInput).focus();
  },
  render: function() {
    return (
      <form className="edit-comment-form" onSubmit={this.updateComment}>
        <textarea ref="commentInput"
                  onChange={this.updateBody}
                  value={this.state.body}></textarea>
                <input className="comment-edit-button"
        type="submit"
        value="Done"></input>
      </form>
    );
  }

});

module.exports = EditCommentForm;
