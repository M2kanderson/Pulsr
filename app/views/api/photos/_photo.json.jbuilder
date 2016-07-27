json.title photo.title
json.id photo.id
json.description photo.description
json.public photo.public
json.url photo.url
json.user_id photo.user_id
json.tags photo.tags
json.created_at photo.created_at.to_f
json.user do
  json.id photo.user.id
  json.firstname photo.user.firstname
  json.lastname photo.user.lastname
  json.username photo.user.username
  json.icon photo.user.icon
end

json.albums photo.albums do |album|
  json.id album.id
end
