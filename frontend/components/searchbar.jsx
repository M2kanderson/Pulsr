const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;



const Searchbar = React.createClass({
  getInitialState: function() {
    return {
      query: ""
    };
  },
  updateQuery(e){
    this.setState({query:e.target.value});
  },
  search(e){
    e.preventDefault();
    let tagNames = this.state.query.split(",").map((tag) => tag.trim());
    hashHistory.push({
      pathname: "search",
      query: {tagNames:tagNames}
    });
    this.setState({query:""});
  },
  trySearch(e){
    if(e.keyCode === 13)
    {
      this.search(e);
    }

  },
  render: function() {
    return (
      <div className="searchbar">
        <div className="search-icon">
          <input type="button" onClick={this.search}
                 className="search-icon-img"></input>
        </div>
        <div className="search-field">

          <input type="text"
                 onChange={this.updateQuery}
                 onKeyUp={this.trySearch}
                 value={this.state.query}
                 placeholder="Photo tags e.g. 'space, ship'"></input>
        </div>
      </div>

    );
  }

});

module.exports = Searchbar;
