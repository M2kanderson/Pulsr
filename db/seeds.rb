# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "guest", password: "guestlogin", firstname: "Guest", lastname: "Account", email:"guest@welcome.com")
User.create(username: "CptnPicard1701", password: "password", firstname: "Jean-Luc", lastname: "Picard", email:"picard@federation.gov", icon: "http://res.cloudinary.com/pulsr/image/upload/v1467754465/star%20trek/tumblr_mfx3xgPO1O1qafgyeo1_500.jpg")
User.create(username: "vader", password: "skywalker", firstname: "Anakin", lastname: "Skywalker", email: "vader@empire.gov", icon:"http://res.cloudinary.com/pulsr/image/upload/v1467754390/star%20wars/darth-vader-face.jpg")
User.create(username: "adama", password: "password", firstname: "James", lastname: "Adama", email:"ja@battlestar.gov")
User.create(username: "hansolo", password: "password", firstname: "Han", lastname: "Solo", email:"hsolo@bounty.com")
User.create(username: "lskywalker", password: "password", firstname: "Luke", lastname: "Skywalker", email:"lskywalker@rebels.org")
User.create(username: "kjaneway", password: "password", firstname: "Kathryn", lastname: "Janeway", email: "kjaneway@federation.gov")

Photo.create(user_id: 1, title:"USS enterprise", description:"The flagship of the fleet", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467218452/nextgenenterprise_h6ovyl.jpg")
Photo.create(user_id: 1, title:"Vulcan", description:"Beautiful Vulcan and her sister planet. Such incredible emotion!", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467218952/Vulcan_and_sister_planet_ltadv4.jpg")

Photo.create(user_id: 3, title:"The Legendary Millenium Falcon", description:"I will destroy this craft soon enough", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326662/star%20wars/Star-Wars-Wallpaper-Awesome-H2S.jpg")
Photo.create(user_id: 3, title:"Family X-Wing", description: "My son on his first flight in the Degoba system.  They grow up so fast", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/war-movie-hd-wallpapers-4.jpg")
Photo.create(user_id: 3, title:"Darkness", description: "Join me, and together we will rule the galaxy!", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/star_wars_darth_vader_gritty_1920x1080_wallpaper_www.paperhi.com_16.jpg")
Photo.create(user_id: 3, title:"Chill", description: "My main man on his wedding day. Keep it chill, bro.", public: true, url: "http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/Star-Wars-Wallpaper-High-Definition-91106m.jpg", created_at: "30/Nov/2009 16:29:30 +0100".to_datetime)
Photo.create(user_id: 3, title:"Hiking Trip", description: "A nice hike through the woods with the troops", public: true, url: "http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/star_wars_7-t2.jpg")

Photo.create(user_id: 3, title: "Battlestar Galactica", description: "Glad we removed those computers or we'd all be fraked", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752768/star%20trek/3131325-0256062161-Battl.jpg")
Photo.create(user_id: 7, title: "Voyager", description: "Boldy going where no one has gone before", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753290/star%20trek/ebzovlakr8bjfit5clah.jpg")
Photo.create(user_id: 2, title: "junkyard", description: "Shot this while grabbing some extra parts for the enterprise", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752767/star%20trek/CGI_USS_Enterprise-D.jpg")
Photo.create(user_id: 2, title: "Vacation", description: "Shot this while on shore leave with the crew.  Incredible view.", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752766/star%20trek/circle_132.jpg")
Photo.create(user_id: 2, title: "ZTarniss", description: "An incredible view of the ZTarniss nebula", url:"http://res.cloudinary.com/pulsr/image/upload/v1467752765/star%20trek/ZTarniss.jpg")
Photo.create(user_id: 7, title: "Unknown Planet", description: "A newly discovered planet in the delta quadrant", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752766/star%20trek/336033-27e8cce2-7ca2-11e3-897f-d21e3ddd1df9.jpg")
Photo.create(user_id: 5, title: "Coruscant", description: "The booming city of Coruscant", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753882/star%20wars/Coruscant.jpg")
Photo.create(user_id: 5, title: "Teddy Bear Village", description: "Fuzzy little critters", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753883/star%20wars/nnfbuzo2xpccr6xkdgqj.jpg")
Photo.create(user_id: 6, title: "Master Yoda's Home", description: "Took this photo while lifting rocks with yoda balancing on one foot while doing a handstand", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753883/star%20wars/f3490370-109e-4ef9-89f7-1b15cc6bf9c3_560_420.jpg")
Photo.create(user_id: 6, title: "Crazy Moon", description: "Check out this crazy moon!", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753883/star%20wars/couldthedeat.jpg")
Photo.create(user_id: 3, title: "The Executor", description: "Ruling the galaxy has its perks", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753883/star%20wars/the-executor.jpg")
Photo.create(user_id: 3, title: "Forest Racing", description: "Nothing quite like racing at several hundred miles per hour through a thick forest to help you relax", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753884/star%20wars/Star-Wars-Battlefront.jpg")

Album.create(user_id:1, title:"Our adventures", description:"Our many adventures throughout the galaxy and the many wonderful people we have met along the way")
Album.create(user_id:3, title:"war stuff", description:"Just some photos taken along the warpath" )

AlbumMembership.create(photo_id: 1, album_id: 1);
AlbumMembership.create(photo_id: 2, album_id: 1);
AlbumMembership.create(photo_id: 3, album_id: 2);
AlbumMembership.create(photo_id: 4, album_id: 2);
AlbumMembership.create(photo_id: 5, album_id: 2);
AlbumMembership.create(photo_id: 6, album_id: 2);
AlbumMembership.create(photo_id: 7, album_id: 2);

Comment.create(user_id: 2, photo_id: 3, body:"Great shot!")
Comment.create(user_id: 1, photo_id: 3, body:"Such a beautiful ship")
Comment.create(user_id: 3, photo_id: 3, body:"I know, right?")
Comment.create(user_id: 3, photo_id: 1, body:"Thumbs up")

Tag.create(name: "space")
Tag.create(name: "ship")
Tag.create(name: "planet")
Tag.create(name: "portrait")
Tag.create(name: "epic")
Tag.create(name: "forest")
Tag.create(name: "nebula")
Tag.create(name: "vacation")
Tag.create(name: "moon")
Tag.create(name: "bear")

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

Tagging.create(photo_id: 8, tag_id: 2)
Tagging.create(photo_id: 8, tag_id: 5)
Tagging.create(photo_id: 9, tag_id: 2)
Tagging.create(photo_id: 10, tag_id: 1)
Tagging.create(photo_id: 11, tag_id: 3)
Tagging.create(photo_id: 12, tag_id: 1)
Tagging.create(photo_id: 12, tag_id: 7)
Tagging.create(photo_id: 13, tag_id: 1)
Tagging.create(photo_id: 13, tag_id: 3)
Tagging.create(photo_id: 14, tag_id: 3)
Tagging.create(photo_id: 15, tag_id: 3)
Tagging.create(photo_id: 15, tag_id: 6)
Tagging.create(photo_id: 16, tag_id: 3)
Tagging.create(photo_id: 16, tag_id: 6)
Tagging.create(photo_id: 17, tag_id: 2)
Tagging.create(photo_id: 17, tag_id: 3)
Tagging.create(photo_id: 17, tag_id: 5)
Tagging.create(photo_id: 18, tag_id: 2)
Tagging.create(photo_id: 19, tag_id: 3)
Tagging.create(photo_id: 19, tag_id: 6)
