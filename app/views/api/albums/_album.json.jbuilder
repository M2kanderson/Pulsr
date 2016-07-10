json.id album.id
json.description album.description
json.title album.title
json.user album.user
json.firstPhotoUrl album.photos.first.url
json.albumMemberCount album.photos.length
json.photos album.photos do |photo|
  json.id photo.id
  json.url photo.url
end
