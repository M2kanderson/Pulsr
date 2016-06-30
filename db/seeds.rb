# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "guest", password: "guestlogin", firstname: "Guest", lastname: "Account", email:"guest@welcome.com")
User.create(username: "CptnPicard1701", password: "password", firstname: "Jean-Luc", lastname: "Picard", email:"picard@federation.gov")

Photo.create(user_id: 1, album_id: 1, title:"USS enterprise", description:"The flagship of the fleet", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467218452/nextgenenterprise_h6ovyl.jpg")
Photo.create(user_id: 1, album_id: 1, title:"Vulcan", description:"Beautiful Vulcan and her sister planet. Such incredible emotion!", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467218952/Vulcan_and_sister_planet_ltadv4.jpg")
