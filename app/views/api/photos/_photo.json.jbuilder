json.title photo.title
json.id photo.id
json.description photo.description
json.public photo.public
json.url photo.url
json.user_id photo.user_id
json.album_id photo.album_id
json.tags photo.tags
json.user do
  json.id photo.user.id
  json.firstname photo.user.firstname
  json.lastname photo.user.lastname
  json.username photo.user.username
  json.icon photo.user.icon
end
if(json.album)
  json.album do
    json.id photo.album.id
    json.title photo.album.title
    json.description photo.album.description
    json.photos photo.album.photos
  end
end
