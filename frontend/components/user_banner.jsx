const React = require('react');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
import Joyride from 'react-joyride';

const UserBanner = React.createClass({
  getInitialState: function() {
    return {
      steps: [],
      ready: false,
      joyrideOverlay: true
    };
  },
  componentDidMount() {
    setTimeout(() => {
        this.setState({
          ready: true
        });
      }, 1000);
      const steps = [
      {
        title: 'User Dashboard',
        text: 'Welcome! This is your personal dashboard!',
        selector: '.user-banner-icon',
        position: 'top',
        type: 'hover'
      },
      {
        title: 'Cameraroll',
        text: 'Upload and organize your photos here! You can add the photos to albums and choose whether they are public or not',
        selector: '.cameraroll-menu-item',
        position: 'top-left',
        // style: {
        //   backgroundColor: '#ccc',
        //   mainColor: '#000',
        //   beacon: {
        //     inner: '#000',
        //     outer: '#000'
        //   },
        //   skip: {
        //     color: '#FF67B4'
        //   },
        //   hole: {
        //     backgroundColor: 'RGBA(201, 23, 33, 0.2)',
        //   }
        // }
      },
      {
        title: 'Photostream',
        text: 'You can view your public face here! By clicking on the photos, you can view them in closer detail, read other user\'s comments, or add tags to your photos!',
        selector: '.photostream-menu-item',
        position: 'top-right'
      },
      {
        title: 'Albums',
        text: 'Check out the albums you\'ve created here!',
        selector: '.album-menu-item',
        position: 'top-left'
      }
    ];
    this.addSteps(steps);
  },
  componentDidUpdate(prevProps, prevState) {
    if (!prevState.ready && this.state.ready) {
      this.refs.joyride.start();
    }
  },
  addSteps(steps) {
    const joyride = this.refs.joyride;
    let newSteps = steps;

    if (!Array.isArray(newSteps)) {
      newSteps = [newSteps];
    }

    if (!newSteps.length) {
      return;
    }

    this.setState(currentState => {
      currentState.steps = currentState.steps.concat(joyride.parseSteps(newSteps));
      return currentState;
    });
  },
  addTooltip(data) {
    this.refs.joyride.addTooltip(data);
  },
  navItems(){
    return <div className="user-banner-nav-items">
      <div className="cameraroll-menu-item menu-item">
        <Link className={(document.URL.indexOf("cameraroll") > -1) ?
          "current-nav-item" : ""}
          to={"/cameraroll"}>Cameraroll</Link>
      </div>
      <div className="photostream-menu-item menu-item">
        <Link className={(document.URL.indexOf("photostream") > -1) ?
          "current-nav-item" : ""}
          to={"/photostream"}>Photostream</Link>
      </div>
      <div className="album-menu-item menu-item">
        <Link className={(document.URL.indexOf("albums") > -1) ?
          "current-nav-item" : ""}
          to={"/albums"}>Albums</Link>
      </div>

    </div>;
  },
  render: function() {
    let currentUser=SessionStore.current_user();
    return (
      <div>
        <div className="user-banner">
          <img className="user-banner-icon" src={currentUser.icon}></img>
          <p className="user-banner-name">{currentUser.firstname} {currentUser.lastname}</p>
          <p className="user-banner-username">{currentUser.username}</p>
        </div>
        <div className="user-banner-nav">
          {this.navItems()}
        </div>
        <Joyride
          ref="joyride"
          debug={false}
          steps={this.state.steps}
          type='continuous'
          locale={{
            back: (<span>Back</span>),
            close: (<span>Close</span>),
            last: (<span>Last</span>),
            next: (<span>Next</span>),
            skip: (<span>Skip</span>)
          }}
          showSkipButton={true}
          showStepsProgress={true}
          showOverlay={this.state.joyrideOverlay} />
      </div>

    );
  }

});

module.exports = UserBanner;
