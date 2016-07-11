Pulsr web application demo project

## Minimum Viable Product

Pulsr is a web application inspired by Flickr that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Photos
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Albums for organizing photos
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments for photos
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Tags for photos
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Initial Seeding, Photos Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Photos can be created, viewed, edited and destroyed through
the API.

- [ ] create `Photo` model
- [ ] seed the database with a small amount of users and photos for testing. Seeding to continue throughout project 
- [ ] CRUD API for photos (`PhotosController`)
- [ ] jBuilder views for photos
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Photos can be created, viewed, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoForm` (for editing description, title, privacy settings)
- [ ] save Photos to the DB using drag and drop or click to upload.

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Albums (1 day, W2 Tu 12pm)

**Objective:** Photos belong to Albums, and can be viewed by Album.

- [ ] create `Album` model
- build out API, Flux loop, and components for:
  - [ ] Album CRUD
  - [ ] adding photos requires an album
  - [ ] photos can be added or removed from an album
  - [ ] viewing photos by album
- Use CSS to style new views

Phase 3 adds organization to the Photos. Photos belong to an Album,
which has its own `Index` view.

### Phase 6: Comments (1 days, W2 Th 12pm)

**Objective:** Users can add multiple comments to photos.

- [ ] create `Comment` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching comments for photos
  - [ ] adding comments to photos
  - [ ] editing comments
  - [ ] removing comments
- [ ] Style new elements

### Phase 7: Tags and Search (2 days, W2 Fr 12pm)

**Objective:** Photos can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for photos
  - [ ] adding tags to photos
  - [ ] searching photos by tag
- [ ] Style new elements


### Phase 8: Styling Cleanup and Final Seeding (1 day, W2 S 12pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search for photos based on description, title, tag, and username
- [ ] Pagination / infinite scroll for Photos Index
- [ ] Create a Tags page for viewing photos by Tag
- [ ] Arrange photos in a grid with set height instead of one photo per row.
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
