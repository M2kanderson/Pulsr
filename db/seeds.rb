# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#1
User.create(username: "guest", password: "guestlogin", firstname: "Guest", lastname: "Account", email:"guest@welcome.com")
#2
User.create(username: "CptnPicard1701", password: "password", firstname: "Jean-Luc", lastname: "Picard", email:"picard@federation.gov", icon: "http://res.cloudinary.com/pulsr/image/upload/v1467754465/star%20trek/tumblr_mfx3xgPO1O1qafgyeo1_500.jpg")
#3
User.create(username: "vader", password: "skywalker", firstname: "Anakin", lastname: "Skywalker", email: "vader@empire.gov", icon:"http://res.cloudinary.com/pulsr/image/upload/v1467754390/star%20wars/darth-vader-face.jpg")
#4
User.create(username: "adama", password: "password", firstname: "William", lastname: "Adama", email:"wa@battlestar.gov", icon: "http://res.cloudinary.com/pulsr/image/upload/c_scale,h_100,w_100/v1469989144/pulsr-users/William-Adama-Battlestar-Galactica-Edward-James-Olmos.jpg")
#5
User.create(username: "starbuck", password: "password", firstname: "Kara", lastname: "Thrace", email:"kt@battlestar.gov", icon: "http://res.cloudinary.com/pulsr/image/upload/c_scale,h_100/v1469989264/pulsr-users/Katee-Sackhoff_.jpg")
#6
User.create(username: "hansolo", password: "password", firstname: "Han", lastname: "Solo", email:"hsolo@bounty.com", icon: "http://res.cloudinary.com/pulsr/image/upload/c_scale,h_100/v1469988832/pulsr-users/hansolo.0.png")
#7
User.create(username: "lskywalker", password: "password", firstname: "Luke", lastname: "Skywalker", email:"lskywalker@rebels.org", icon: "http://res.cloudinary.com/pulsr/image/upload/c_scale,h_100/v1469988932/pulsr-users/33D5695700000578-3573233-The_man_of_mystery_Mark_Hamill_told_The_Sun_he_was_thrilled_to_d-m-45_1462374225068.jpg")
#8
User.create(username: "kjaneway", password: "password", firstname: "Kathryn", lastname: "Janeway", email: "kjaneway@federation.gov", icon: "http://res.cloudinary.com/pulsr/image/upload/c_scale,h_100/v1469988761/pulsr-users/Janeway_Season7.jpg")
#9
User.create(username: "narmstrong", password: "password", firstname: "Niel", lastname: "Armstrong", email: "narmstrong@nasa.gov", icon: "http://res.cloudinary.com/pulsr/image/upload/c_scale,h_100/v1469988649/pulsr-users/464436main_S69-31741_full.jpg")
#10
User.create(username: "hawking", password: "password", firstname: "Stephen", lastname: "Hawking", email: "shawking@cambridge.edu", icon: "http://res.cloudinary.com/pulsr/image/upload/c_scale,h_100/v1469988411/pulsr-users/sh.jpg")
#11
User.create(username: "tyson", password: "password", firstname: "Niel deGrasse", lastname: "Tyson", email: "ntyson@hayden.org", icon: "http://res.cloudinary.com/pulsr/image/upload/c_scale,h_100/v1469988239/pulsr-users/NeilTysonOriginsA-Crop_400x400.jpg")

#1
Photo.create(user_id: 2, title:"USS enterprise", description:"The flagship of the fleet", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467218452/nextgenenterprise_h6ovyl.jpg")
#2
Photo.create(user_id: 2, title:"Vulcan", description:"Beautiful Vulcan and her sister planet. Such incredible emotion!", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467218952/Vulcan_and_sister_planet_ltadv4.jpg")
#3
Photo.create(user_id: 3, title:"The Legendary Millenium Falcon", description:"I will destroy this craft soon enough", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326662/star%20wars/Star-Wars-Wallpaper-Awesome-H2S.jpg")
#4
Photo.create(user_id: 3, title:"Family X-Wing", description: "My son on his first flight in the Degoba system.  They grow up so fast", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/war-movie-hd-wallpapers-4.jpg")
#5
Photo.create(user_id: 3, title:"Darkness", description: "Join me, and together we will rule the galaxy!", public: true, url:"http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/star_wars_darth_vader_gritty_1920x1080_wallpaper_www.paperhi.com_16.jpg")
#6
Photo.create(user_id: 3, title:"Chill", description: "My main man on his wedding day. Keep it chill, bro.", public: true, url: "http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/Star-Wars-Wallpaper-High-Definition-91106m.jpg", created_at: "30/Nov/2009 16:29:30 +0100".to_datetime)
#7
Photo.create(user_id: 3, title:"Hiking Trip", description: "A nice hike through the woods with the troops", public: true, url: "http://res.cloudinary.com/pulsr/image/upload/v1467326657/star%20wars/star_wars_7-t2.jpg")
#8
Photo.create(user_id: 4, title: "Battlestar Galactica", description: "Glad we removed those computers or we'd all be fraked", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752768/star%20trek/3131325-0256062161-Battl.jpg")
#9
Photo.create(user_id: 8, title: "Voyager", description: "Boldy going where no one has gone before", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753290/star%20trek/ebzovlakr8bjfit5clah.jpg")
#10
Photo.create(user_id: 2, title: "junkyard", description: "Shot this while grabbing some extra parts for the enterprise", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752767/star%20trek/CGI_USS_Enterprise-D.jpg")
#11
Photo.create(user_id: 2, title: "Vacation", description: "Shot this while on shore leave with the crew.  Incredible view.", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752766/star%20trek/circle_132.jpg")
#12
Photo.create(user_id: 2, title: "ZTarniss", description: "An incredible view of the ZTarniss nebula", url:"http://res.cloudinary.com/pulsr/image/upload/v1467752765/star%20trek/ZTarniss.jpg")
#13
Photo.create(user_id: 8, title: "Unknown Planet", description: "A newly discovered planet in the delta quadrant", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752766/star%20trek/336033-27e8cce2-7ca2-11e3-897f-d21e3ddd1df9.jpg")
#14
Photo.create(user_id: 5, title: "Coruscant", description: "The booming city of Coruscant", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753882/star%20wars/Coruscant.jpg")
#15
Photo.create(user_id: 6, title: "Teddy Bear Village", description: "Fuzzy little critters", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753883/star%20wars/nnfbuzo2xpccr6xkdgqj.jpg")
#16
Photo.create(user_id: 7, title: "Master Yoda's Home", description: "Took this photo while lifting rocks with yoda balancing on one foot while doing a handstand", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753883/star%20wars/f3490370-109e-4ef9-89f7-1b15cc6bf9c3_560_420.jpg")
#17
Photo.create(user_id: 7, title: "Crazy Moon", description: "Check out this crazy moon!", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753883/star%20wars/couldthedeat.jpg")
#18
Photo.create(user_id: 3, title: "The Executor", description: "Ruling the galaxy has its perks", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753883/star%20wars/the-executor.jpg")
#19
Photo.create(user_id: 3, title: "Forest Racing", description: "Nothing quite like racing at several hundred miles per hour through a thick forest to help you relax", url: "http://res.cloudinary.com/pulsr/image/upload/v1467753884/star%20wars/Star-Wars-Battlefront.jpg")
#20
Photo.create(user_id: 7, title: "Death Star Supernova", description: "Like shooting womp rats back home", url:"http://res.cloudinary.com/pulsr/image/upload/v1469989639/pulsr-photos/maxresdefault.jpg")
#21
Photo.create(user_id: 2, title: "NCC-201", description: "Shot from Earth orbit on the way to Deep Space 9", url:"http://res.cloudinary.com/pulsr/image/upload/v1467918152/u2j0xbzzwtssyva0clnd.jpg")
#22
Photo.create(user_id: 7, title: "Mysterious Forest", description: "The darkside of the forest meets the light", url:"http://res.cloudinary.com/pulsr/image/upload/v1467753887/star%20wars/rendition1.img.jpg")
#23
Photo.create(user_id: 7, title: "Naboo", description: "I hope I don't run into Jar Jar here", url:"http://res.cloudinary.com/pulsr/image/upload/v1467753885/star%20wars/Naboo.png")
#24
Photo.create(user_id: 2, title:"NX-01", description: "The culmination of Zephram Cochrane's work and nearly a century of work after him, the NX-01 takes one last flight", url: "http://res.cloudinary.com/pulsr/image/upload/v1467752767/star%20trek/Star-Trek-gallery-ships-0003.jpg")
#25
Photo.create(user_id: 8, title:"Slipstream Blunder", description: "The tragic end to our slipstream drive experiment", url:"http://res.cloudinary.com/pulsr/image/upload/v1469996864/star%20trek/4035a26c9bd687fbdfeaa4acd582b590.jpg")
#26
Photo.create(user_id: 8, title:"Tuvix", description: "In case you ever wanted to know what it would look like if Tuvok and Nelix had a baby, I give you Tuvix!", url:"http://res.cloudinary.com/pulsr/image/upload/v1469997515/star%20trek/9bfce6a1048ed4d9ff4ae6f07eaf53f5.jpg")
#27
Photo.create(user_id: 8, title:"Borg", description: "Can't seem to escape the Borg, even in the delta quadrant!", url: "http://res.cloudinary.com/pulsr/image/upload/v1469997905/star%20trek/latest.jpg")
#28
Photo.create(user_id: 8, title: "7 of 9", description: "The latest addition to our crew. I hope we can restore her humanity some day after what the borg did to her", url:"http://res.cloudinary.com/pulsr/image/upload/v1469998418/star%20trek/star-trek-voyager-seven-of-nine_528_poster.jpg")
#29
Photo.create(user_id: 8, title: "The Doctor", description: "His bedside manner algorithm needs improvement", url: "http://res.cloudinary.com/pulsr/image/upload/v1469998774/star%20trek/doctor_s7.jpg")
#30
Photo.create(user_id: 9, title: "One Small Step for Man", description: "One giant leap for mankind", url:"http://res.cloudinary.com/pulsr/image/upload/v1469999138/pulsr-photos/apollo11more.jpg")
#31
Photo.create(user_id: 10, title: "Black Hole", description: "Not only does god play dice with the Universe - he sometimes casts them where they can't be seen", url: "http://res.cloudinary.com/pulsr/image/upload/v1469999224/pulsr-photos/IS-BH.jpg")
#32
Photo.create(user_id: 5, title: "Basestar", description: "A frakin cylon Basestar", url:"http://res.cloudinary.com/pulsr/image/upload/v1470000305/pulsr-photos/sci-fi-battlestar-galactica-wallpaper-base-star.jpg")
#33
Photo.create(user_id: 4, title: "Apollo", description: "My son making me proud", url: "http://res.cloudinary.com/pulsr/image/upload/v1470001212/pulsr-photos/bsg-viper.jpg")
#34
Photo.create(user_id: 5, title: "Starbuck", description: "Kickin cylon butt", url: "http://res.cloudinary.com/pulsr/image/upload/v1470001536/pulsr-photos/tumblr_nay7rxq3T91r4nvv3o5_1280.jpg")
#35
Photo.create(user_id: 6, title: "Carbonite", description: "Not my best day", url: "http://res.cloudinary.com/pulsr/image/upload/v1470002256/pulsr-photos/o-HAN-SOLO-CARBONITE-facebook.jpg")
#36
Photo.create(user_id: 6, title: "Greedo", description: "I totally shot first", url: "http://res.cloudinary.com/pulsr/image/upload/v1470002468/pulsr-photos/Han-Solo-and-Greedo-Star-Wars.jpg")
#37
Photo.create(user_id: 1, title: "Glacial Arch", description: "Shot at dawn on a far away world", url: "http://res.cloudinary.com/pulsr/image/upload/v1470009071/pulsr-photos/circumpolar1600.jpg", created_at: "10/June/2016 16:29:30 +0100".to_datetime)
#38
Photo.create(user_id: 1, title: "Space X Rocket", description: "Rocket carrying humanity into the future", url: "http://res.cloudinary.com/pulsr/image/upload/v1470009295/pulsr-photos/a005_c007_05016i.00020412.jpg", created_at: "10/June/2016 16:29:30 +0100".to_datetime)
#39
Photo.create(user_id: 1, title: "The Grays", description: "Are they among us?", url: "http://res.cloudinary.com/pulsr/image/upload/v1470009475/pulsr-photos/Alien-3-1024x768.jpg", created_at: "23/May/2016 16:29:30 +0100".to_datetime)
#40
Photo.create(user_id: 1, title: "Waterfall", description: "Otherworldly waterfall", url: "http://res.cloudinary.com/pulsr/image/upload/v1470009820/pulsr-photos/b0b186514d729dc3752985644ac57061.jpg", created_at: "23/May/2016 16:29:30 +0100".to_datetime)
#41
Photo.create(user_id: 1, title: "Rings", description: "A ringed planet much like Saturn taken from orbit around one of its moons", url: "http://res.cloudinary.com/pulsr/image/upload/v1470010302/pulsr-photos/Beautiful-amazing-great-font-b-landscape-b-font-font-b-planets-b-font-stars-space-font.jpg", created_at: "05/April/2016 16:29:30 +0100".to_datetime)
#42
Photo.create(user_id: 1, title: "Dusk", description: "The ringed planet as seen at dusk from the plains of a nearby planet", url: "http://res.cloudinary.com/pulsr/image/upload/v1470010263/pulsr-photos/98367a82dfe9ca0675bc6fe98cc0d00c.jpg", created_at: "05/April/2016 16:29:30 +0100".to_datetime)
#43
Photo.create(user_id: 1, title: "Interstelar Night", description: "Night from a planet far far away", url: "http://res.cloudinary.com/pulsr/image/upload/v1470010573/pulsr-photos/beautiful-night-wallpaper-hd-landscape-1562259418.jpg", created_at: "05/April/2016 16:29:30 +0100".to_datetime)
#44
Photo.create(user_id: 1, title: "E.T.", description: "E.T. phone home", url: "http://res.cloudinary.com/pulsr/image/upload/v1470010795/pulsr-photos/ET_3147094b.jpg", created_at: "03/March/2016 16:29:30 +0100".to_datetime)
#45
Photo.create(user_id: 1, title: "Squidsey", description: "Cthun's baby brother?", url: "http://res.cloudinary.com/pulsr/image/upload/v1470010971/pulsr-photos/big_thumb_388bed1cce9530268e864a881f923310.jpg", created_at: "03/March/2016 16:29:30 +0100".to_datetime)
#46
Photo.create(user_id: 1, title: "Groot", description: "He is groot", url: "http://res.cloudinary.com/pulsr/image/upload/v1470011209/pulsr-photos/4208775-groot.jpg", created_at: "01/Jan/2016 16:29:30 +0100".to_datetime)
#47
Photo.create(user_id: 1, title: "The Milano", description: "The guardians of the galaxy's ship", url: "http://res.cloudinary.com/pulsr/image/upload/v1470011536/pulsr-photos/Guardians_of_the_Galaxy_Concept_Art_Atomhawk_Milano_Flight.jpg", created_at: "01/Jan/2016 16:29:30 +0100".to_datetime)
#48
Photo.create(user_id: 1, title: "NASA Space Shuttle", description: "A classic", url: "http://res.cloudinary.com/pulsr/image/upload/v1470011717/pulsr-photos/453915main_2010-3355_full.jpg", created_at: "30/Nov/2015 16:29:30 +0100".to_datetime)
#49
Photo.create(user_id: 1, title: "Heat", description: "Early Morning on a volcanic planet", url: "http://res.cloudinary.com/pulsr/image/upload/v1470013347/pulsr-photos/alien-landscapes-space-fantasy-planets-desktop-hd-wallpaper.jpg", created_at: "10/June/2016 16:29:30 +0100".to_datetime)


Album.create(user_id:2, title:"Our adventures", description:"Our many adventures throughout the galaxy and the many wonderful people we have met along the way")
Album.create(user_id:3, title:"War Stuff", description:"Just some photos taken along the warpath" )
Album.create(user_id:8, title:"Delta Quadrant", description: "Our journey home")
Album.create(user_id:8, title:"Voyager Crew", description: "The best crew in the delta quadrant")
Album.create(user_id:1, title:"Spaceships", description: "My favorite spaceships")
Album.create(user_id:1, title:"Planets", description: "The most beautiful planets")
Album.create(user_id:1, title:"Aliens", description: "Aliens!")
Album.create(user_id: 4, title:"Battlestar Galactica", description: "The last fight for humanity")
Album.create(user_id: 5, title:"Viper fights", description: "The fight against the fraking cylons from my viper")
Album.create(user_id: 6, title:"Rebel Bounty", description: "Shots from the rebel fight")
Album.create(user_id: 7, title:"Path of the Jedi", description: "Bringing the light back")
Album.create(user_id: 9, title:"Moon Landing", description: "The first moon landing")
Album.create(user_id: 10, title: "Physics", description: "The Physics of the Universe")

AlbumMembership.create(photo_id: 1, album_id: 1);
AlbumMembership.create(photo_id: 2, album_id: 1);
AlbumMembership.create(photo_id: 3, album_id: 2);
AlbumMembership.create(photo_id: 4, album_id: 2);
AlbumMembership.create(photo_id: 5, album_id: 2);
AlbumMembership.create(photo_id: 6, album_id: 2);
AlbumMembership.create(photo_id: 7, album_id: 2);
AlbumMembership.create(photo_id: 9, album_id: 3);
AlbumMembership.create(photo_id: 25, album_id: 3);
AlbumMembership.create(photo_id: 26, album_id: 3);
AlbumMembership.create(photo_id: 27, album_id: 3);
AlbumMembership.create(photo_id: 28, album_id: 3);
AlbumMembership.create(photo_id: 28, album_id: 4);
AlbumMembership.create(photo_id: 26, album_id: 4);
AlbumMembership.create(photo_id: 29, album_id: 4);
AlbumMembership.create(photo_id: 8, album_id: 8);
AlbumMembership.create(photo_id: 33, album_id: 8);
AlbumMembership.create(photo_id: 32, album_id: 9);
AlbumMembership.create(photo_id: 34, album_id: 9);
AlbumMembership.create(photo_id: 15, album_id: 10);
AlbumMembership.create(photo_id: 35, album_id: 10);
AlbumMembership.create(photo_id: 36, album_id: 10);
AlbumMembership.create(photo_id: 16, album_id: 11);
AlbumMembership.create(photo_id: 17, album_id: 11);
AlbumMembership.create(photo_id: 20, album_id: 11);
AlbumMembership.create(photo_id: 22, album_id: 11);
AlbumMembership.create(photo_id: 23, album_id: 11);
AlbumMembership.create(photo_id: 30, album_id: 12);
AlbumMembership.create(photo_id: 31, album_id: 13);
AlbumMembership.create(photo_id: 37, album_id: 6);
AlbumMembership.create(photo_id: 38, album_id: 5);
AlbumMembership.create(photo_id: 39, album_id: 7);
AlbumMembership.create(photo_id: 40, album_id: 6);
AlbumMembership.create(photo_id: 41, album_id: 6);
AlbumMembership.create(photo_id: 42, album_id: 6);
AlbumMembership.create(photo_id: 43, album_id: 6);
AlbumMembership.create(photo_id: 44, album_id: 7);
AlbumMembership.create(photo_id: 45, album_id: 7);
AlbumMembership.create(photo_id: 46, album_id: 7);
AlbumMembership.create(photo_id: 47, album_id: 5);
AlbumMembership.create(photo_id: 48, album_id: 5);
AlbumMembership.create(photo_id: 49, album_id: 6);


Comment.create(user_id: 2, photo_id: 3, body:"Great shot!")
Comment.create(user_id: 1, photo_id: 3, body:"Such a beautiful ship")
Comment.create(user_id: 3, photo_id: 3, body:"I know, right?")
Comment.create(user_id: 3, photo_id: 1, body:"Thumbs up")
Comment.create(user_id: 6, photo_id: 20, body: "Don't get cocky kid")
Comment.create(user_id: 9, photo_id:30, body: "FIRST!!")
Comment.create(user_id: 11, photo_id: 31, body: "Did you know that if you fall into a black hole, you will see the entire future of the universe unfold in front of you in a matter of moments?")
Comment.create(user_id: 5, photo_id:8, body: "There must be some kind of way out of here")
Comment.create(user_id: 11, photo_id: 30, body: "The beginning of an era")
Comment.create(user_id: 2, photo_id: 30, body: "GRATZ!")

#1
Tag.create(name: "space")
#2
Tag.create(name: "ship")
#3
Tag.create(name: "planet")
#4
Tag.create(name: "portrait")
#5
Tag.create(name: "epic")
#6
Tag.create(name: "forest")
#7
Tag.create(name: "nebula")
#8
Tag.create(name: "vacation")
#9
Tag.create(name: "moon")
#10
Tag.create(name: "bear")
#11
Tag.create(name: "explosion")
#12
Tag.create(name: "death star")
#13
Tag.create(name: "light")
#14
Tag.create(name: "dark")
#15
Tag.create(name: "darkside")
#16
Tag.create(name: "lightside")
#17
Tag.create(name: "sith")
#18
Tag.create(name: "jedi")
#19
Tag.create(name: "federation")
#20
Tag.create(name: "earth")
#21
Tag.create(name: "snow")
#22
Tag.create(name: "crash")
#23
Tag.create(name: "voyager")
#24
Tag.create(name: "enterprise")
#25
Tag.create(name: "tuvix")
#26
Tag.create(name: "borg")
#27
Tag.create(name: "black hole")
#28
Tag.create(name: "physics")
#29
Tag.create(name: "alien")

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
Tagging.create(photo_id: 5, tag_id: 15)
Tagging.create(photo_id: 6, tag_id: 15)
Tagging.create(photo_id: 5, tag_id: 17)

Tagging.create(photo_id: 7, tag_id: 9)
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
Tagging.create(photo_id: 20, tag_id: 11)
Tagging.create(photo_id: 20, tag_id: 12)
Tagging.create(photo_id: 16, tag_id: 8)
Tagging.create(photo_id: 22, tag_id: 13)
Tagging.create(photo_id: 22, tag_id: 14)
Tagging.create(photo_id: 22, tag_id: 15)
Tagging.create(photo_id: 22, tag_id: 16)
Tagging.create(photo_id: 22, tag_id: 6)
Tagging.create(photo_id: 21, tag_id: 19)
Tagging.create(photo_id: 21, tag_id: 20)
Tagging.create(photo_id: 21, tag_id: 1)
Tagging.create(photo_id: 21, tag_id: 2)
Tagging.create(photo_id: 21, tag_id: 3)
Tagging.create(photo_id: 23, tag_id: 3)
Tagging.create(photo_id: 24, tag_id: 20)
Tagging.create(photo_id: 24, tag_id: 2)
Tagging.create(photo_id: 24, tag_id: 19)
Tagging.create(photo_id: 16, tag_id: 13)
Tagging.create(photo_id: 16, tag_id: 16)
Tagging.create(photo_id: 16, tag_id: 18)
Tagging.create(photo_id: 25, tag_id: 21)
Tagging.create(photo_id: 25, tag_id: 22)
Tagging.create(photo_id: 25, tag_id: 3)
Tagging.create(photo_id: 25, tag_id: 19)
Tagging.create(photo_id: 25, tag_id: 23)
Tagging.create(photo_id: 9, tag_id: 23)
Tagging.create(photo_id: 1, tag_id: 24)
Tagging.create(photo_id: 26, tag_id: 25)
Tagging.create(photo_id: 26, tag_id: 4)
Tagging.create(photo_id: 27, tag_id: 26)
Tagging.create(photo_id: 27, tag_id: 2)
Tagging.create(photo_id: 28, tag_id: 26)
Tagging.create(photo_id: 28, tag_id: 4)
Tagging.create(photo_id: 29, tag_id: 4)
Tagging.create(photo_id: 29, tag_id: 19)
Tagging.create(photo_id: 30, tag_id: 9)
Tagging.create(photo_id: 30, tag_id: 1)
Tagging.create(photo_id: 31, tag_id: 13)
Tagging.create(photo_id: 31, tag_id: 14)
Tagging.create(photo_id: 31, tag_id: 28)
Tagging.create(photo_id: 32, tag_id: 1)
Tagging.create(photo_id: 32, tag_id: 2)
Tagging.create(photo_id: 32, tag_id: 5)
Tagging.create(photo_id: 31, tag_id: 27)
Tagging.create(photo_id: 37, tag_id: 3)
Tagging.create(photo_id: 40, tag_id: 3)
Tagging.create(photo_id: 41, tag_id: 3)
Tagging.create(photo_id: 42, tag_id: 3)
Tagging.create(photo_id: 43, tag_id: 3)
Tagging.create(photo_id: 49, tag_id: 3)
Tagging.create(photo_id: 39, tag_id: 29)
Tagging.create(photo_id: 44, tag_id: 29)
Tagging.create(photo_id: 45, tag_id: 29)
Tagging.create(photo_id: 46, tag_id: 29)
Tagging.create(photo_id: 38,tag_id: 2)
Tagging.create(photo_id: 47,tag_id: 2)
Tagging.create(photo_id: 48,tag_id: 2)
