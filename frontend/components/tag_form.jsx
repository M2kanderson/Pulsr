const React = require('react');
const ReactDOM = require('react-dom');
const TagActions = require('../actions/tag_actions');



const TagForm = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      photo_id: this.props.photoId
    };
  },
  updateName(e){
    this.setState({name:e.target.value});
  },
  createTag(e){
    if(e.keyCode === 13)
    {
      let tags = this.state.name.split(",");
      tags.forEach((tag) => {
        TagActions.createTag({name:tag.trim().toLowerCase(), photo_id:this.state.photo_id});
      });
      this.setState({name:""});
      ReactDOM.findDOMNode(this.refs.tagInput).value = "";
    }
  },
  render: function() {

    return (
        <input type="text"
               ref="tagInput"
               className={this.props.hidden ? 'hidden-form' : 'add-tag'}
               placeholder="Add a tag"
               onChange={this.updateName}
               onKeyUp={this.createTag}></input>
    );
  }

});

module.exports = TagForm;
