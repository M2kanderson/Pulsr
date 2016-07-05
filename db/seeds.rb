# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "guest", password: "guestlogin", firstname: "Guest", lastname: "Account", email:"guest@welcome.com")
User.create(username: "CptnPicard1701", password: "password", firstname: "Jean-Luc", lastname: "Picard", email:"picard@federation.gov")
User.create(username: "vader", password: "skywalker", firstname: "Anakin", lastname: "Skywalker", email: "vader@empire.gov")


Photo.create(user_id: 1, album_id: 1, title:"USS enterprise", description:"The flagship of the fleet", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467218452/nextgenenterprise_h6ovyl.jpg")
Photo.create(user_id: 1, album_id: 1, title:"Vulcan", description:"Beautiful Vulcan and her sister planet. Such incredible emotion!", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467218952/Vulcan_and_sister_planet_ltadv4.jpg")

Photo.create(user_id: 3, album_id: 2, title:"The Legendary Millenium Falcon", description:"I will destroy this craft soon enough", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326662/star%20wars/Star-Wars-Wallpaper-Awesome-H2S.jpg")
Photo.create(user_id: 3, album_id: 2, title:"Family X-Wing", description: "My son on his first flight in the Degoba system.  They grow up so fast", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/war-movie-hd-wallpapers-4.jpg")
Photo.create(user_id: 3, album_id: 2, title:"Darkness", description: "Join me, and together we will rule the galaxy!", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/star_wars_darth_vader_gritty_1920x1080_wallpaper_www.paperhi.com_16.jpg")
Photo.create(user_id: 3, album_id: 2, title:"Chill", description: "My main man on his wedding day. Keep it chill, bro.", public: true, url: "http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/Star-Wars-Wallpaper-High-Definition-91106m.jpg")
Photo.create(user_id: 3, album_id: 2, title:"Hiking Trip", description: "A nice hike through the woods with the troops", public: true, url: "http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/star_wars_7-t2.jpg")

Comment.create(user_id: 2, photo_id: 3, body:"Great shot!")
Comment.create(user_id: 1, photo_id: 3, body:"Such a beautiful ship")
Comment.create(user_id: 3, photo_id: 3, body:"I know, right?")
Comment.create(user_id: 3, photo_id: 1, body:"Thumbs up")

Tag.create(name: "space")
Tag.create(name: "ship")
Tag.create(name: "planet")
Tag.create(name: "portrait")
Tag.create(name: "epic")

Tagging.create(photo_id: 1, tag_id: 1)
Tagging.create(photo_id: 3, tag_id: 1)
Tagging.create(photo_id: 4, tag_id: 1)
Tagging.create(photo_id: 1, tag_id: 2)
Tagging.create(photo_id: 3, tag_id: 2)
Tagging.create(photo_id: 4, tag_id: 2)
Tagging.create(photo_id: 2, tag_id: 3)
Tagging.create(photo_id: 7, tag_id: 3)
Tagging.create(photo_id: 5, tag_id: 4)
Tagging.create(photo_id: 6, tag_id: 4)
Tagging.create(photo_id: 3, tag_id: 5)

Album.create(user_id:1, title:"Our adventures", description:"Our many adventures throughout the galaxy and the many wonderful people we have met along the way")
Album.create(user_id:3, title:"war stuff", description:"Just some photos taken along the warpath" )
