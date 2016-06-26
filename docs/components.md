## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * **UserPhotosIndex
    * **CamerarollIndex**
      * PhotoEditForm
    * **AlbumsIndex**
      * AlbumIndexItem
      * AlbumForm
  * **PhotosIndex**
    * PhotoIndexItem
    * **PhotoDetail**
      * PhotoTags
      * PhotoComments
  * **SearchIndex**
    * SearchForm
    * SearchIndexItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `PhotosIndex` **path:** index
    * **component:** `PhotoIndexItem` **path:** `/photos`
      * **component:** `PhotoDetail` **path:** `/photos/:photoId`
  * **component:** `UserPhotosIndex` **path:** `/users/:userId`
    * **component:** `CamerarollIndex` **path:** `users/:userId/cameraroll`
    * **component:** `AlbumsIndex` **path:** `users/:userId/albums`
  * **component:** `SearchIndex` **path:** `/search`


For Routes that have no `notebookId`, `NotesIndex` will render all
notes.
