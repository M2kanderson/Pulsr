json.id  comment.id
json.body comment.body
json.user_id comment.user_id
json.photo_id comment.photo_id
json.age time_ago_in_words(comment.created_at)
json.user do
  json.username comment.user.username
  json.firstname comment.user.firstname
  json.lastname comment.user.lastname
  json.icon comment.user.icon
end
