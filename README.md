# Pulsr

[Pulsr live][heroku]

[heroku]: http://pulsr.herokuapp.com

Pulsr is a full-stack web application inspired by Flickr.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

### Interactive Single-Page App for Sharing Photography

Pulsr is a single-page app which allows users to upload their best photos and share them with the community. Users are able
to access their own photos after logging in and edit them as they like or search through other's photos through a tag based
search engine.

The root page listens to a `SessionStore` and renders content based on a call to `SessionStore.currentUser()`.  Sensitive information is kept out of the frontend of the app.

Components were developed modularly for ease of use and re-use. The app was developed in a SCRUM-like manner, with Potentially Shippable Increments (PSI) of the app at the completion of each feature.

<img src="./screenshots/signin.png"/ width=400 margin="0 auto">


### Photo uploading

  Pulsr uses Cloudinary to store user `Photos` for easy and fast storage and retrieval.  The `Photo` urls are then stored in a database in the backend with a `user_id` and `url` to be accessed by users at a later date. Upon login, information presented for these photos may be edited by the photo uploader including the `title` and `description`.
  
  <img src="./screenshots/cameraroll.png"/ width=400 margin="0 auto">
  
  Additionally, a `User` may mark these photos as `public` to allow them to be viewed by other users. When a photo is clicked on, a modal pops up, allowing the user to view the photo at it's full size. The uploader may delete the photos or store them in an album using the drag-to-select feature in the `cameraroll`.
  

### Albums
  Albums are stored in the backend with a `user_id`. Users may choose to add several 'Photos' to an 'Album' through the 'Cameraroll' component.  The cameraroll component allows the user to select multiple photos at once by clicking on them individually or by clicking a dragging a selection box around the photos.  A menu pops up after the selection is made displaying the selected photos and allowing the user to choose a previously existing album to add the photos too, or to create a new album for the photos. The albums can be given a `title`, or a `description`, and can be accessed by other users or through the albums component.
  
  <img src="./screenshots/albums.png"/ width=400 margin="0 auto">


### Tags and Search

  Multiple tags may be created for any photo uploaded by a user.  Any photo with a particular tag may be found through the search function.  For example, if a user wanted to find photos with the 'planet' tag, they may either enter "planet" into the search engine, or they may click on a 'planet' tag on a 'planet' tagged photo.
  
   <img src="./screenshots/search.png"/ width=400 margin="0 auto">

### Comments

  Logged in users may leave comments on any photo to share their enthusiasm!
  
  <img src="./screenshots/comments.png"/ width=400 margin="0 auto">

## The Future of Pulsr

  In addition to the features outlined above, I plan to add several more features to make the app more complete.  These new features are listed below:

### Followers/Following

  Users will be allowed to follow each other so they can keep their eye on their favorite photographers!

### Favorites

  Users will be able to favorite photos so that they can return to these photos at any time and to express how much they loved a photo!

### Private Photos

  Users will be able to mark a photo as public or private to prevent others from accessing more private photos.

### Sharing

  Users will be able to share photos they discover easily with the photo sharing feature, allowing a user to email a link to a photo or share it on one of the many social media platforms.
