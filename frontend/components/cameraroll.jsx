const React = require('react');
const PhotoStore = require('../stores/photo_store');
const SessionStore = require('../stores/session_store');
const PhotoActions = require('../actions/photo_actions');
const UploadButton = require('./upload_button');
const Photo = require('./photo');
const PhotoSelectView = require('./photo_select_view');
const UserBanner = require('./user_banner');


const SelectableGroup = require('react-selectable').SelectableGroup;
const createSelectable = require('react-selectable').createSelectable;

const SelectableComponent = createSelectable(Photo);

const Cameraroll = React.createClass({
  getInitialState: function() {
    return {
      photos: PhotoStore.all(),
      selectedKeys: []
    };
  },
  componentWillMount(){
    this.photoListener = PhotoStore.addListener(this._onChange);
    PhotoActions.fetchUserPhotos(SessionStore.current_user().id);
  },
  _onChange(){
    this.setState({photos: PhotoStore.all(), selectedKeys: []});
  },
  componentWillUnmount(){
    this.photoListener.remove();
  },
  postImage(image){
    let img = {url:image.url, user_id: SessionStore.current_user().id, title:image.public_id, public: false};
    PhotoActions.createPhoto(img);
  },
  unique(array) {
    return array.filter(function(value, index) {
      return array.indexOf(value) === index;
    });
  },
  handleSelection (selectedKeys) {
   this.setState({selectedKeys: this.unique(this.state.selectedKeys.concat(selectedKeys))});
  },
  selectItem(photoId){
    let index = this.state.selectedKeys.indexOf(photoId);
    if( index === -1){
      this.setState({selectedKeys: this.state.selectedKeys.concat([photoId]) });
    }
    else{
      let selectedKeys = this.state.selectedKeys;
      selectedKeys.splice(index, 1);
      this.setState(selectedKeys);
    }
  },
  clearSelection(){
    this.setState({selectedKeys: []});
  },
  render: function() {
    let photos = this.state.photos.map((photo)=>{
    let selected = this.state.selectedKeys.indexOf(photo.id) > -1;
    return (<div key={photo.id} onClick={this.selectItem.bind(null, photo.id)}>
      <SelectableComponent selected={selected}
                           selectableKey={photo.id}
                           photo={photo}></SelectableComponent>

    </div>);
    });
    let view = this.state.selectedKeys.length > 0 ?
          <PhotoSelectView photoIds={this.state.selectedKeys}
                     clearSelection={this.clearSelection}/> : "";
    return (
      <SelectableGroup onSelection={this.handleSelection}>
        <UserBanner />
        <div className="cameraroll-index">
            <div className= "cameraroll-container">
              <div className="cameraroll-photos">
                {photos}
                <UploadButton postImage={this.postImage} />
              </div>
            </div>
            {view}
        </div>
      </SelectableGroup>

    );
  }

});

module.exports = Cameraroll;
