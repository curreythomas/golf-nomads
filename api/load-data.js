require('dotenv').config()
const PouchDB = require('pouchdb')
const db = new PouchDB(process.env.COUCHDB_URL + process.env.COUCHDB_NAME)

db.bulkDocs([
  {
    _id: 'faq_contact',
    question: 'How do I contact Golf Nomads?',
    answer:
      'Go to our contact page at url{"http://www.golfnomads.co/contact"} and fill out our contact form.'
  },
  {
    _id: 'faq_courses',
    question: 'Where can I see a list of all golf courses?',
    answer:
      'Navigate to the courses page through the bottom navigation and see all the courses you want!'
  },
  {
    _id: 'faq_individual_course',
    question: 'How can I see more information about a specific course?',
    answer:
      'From the courses page, you can click on a specific course and you will be brought to that individual course page and see more information.'
  },
  {
    _id: 'faq_contact_a_course',
    question: 'How can I contact a golf course?',
    answer:
      'After navigating to a specific courses information there is a button to link you to their website. Alternatively, there is a button you may click to call them directly.'
  },
  {
    _id: 'course_charleston_national',
    name: 'Charleston National Golf Club',
    address: '1360 National Drive',
    city: 'Mount Pleasant',
    state: 'SC',
    zip: '29466',
    phoneNumber: '843-203-9994',
    description:
      "Charleston National is a Rees Jones designed championship golf course, open to the public, year round. Rated by Golf Digest as the best non-resort golf course in the Charleston area, it truly is Charleston's hidden gem. Charleston National offers exceptional values for your golfing experience. In addition to an outstanding golf course, you will enjoy our full-size state of the art practice facility and driving range, and our recently renovated Rees Jones pub, along with a dedicated staff to assist you. Charleston National Golf Club, with all its southern charm, is dedicated to serving not only your golfing needs, but your social needs as well. The Charleston National clubhouse now offers you and your family a special place to host a small wedding, private meeting or special family event. Allow us to provide you with a memorable Low Country experience with Southern Hospitality and all its charm!",
    website: 'http://www.charlestonnationalgolf.com/',
    directions:
      'https://www.google.com/maps/dir//Charleston+National+Golf+Club,+1360+National+Dr,+Mt+Pleasant,+SC+29466/@32.8698275,-79.7699417,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fe6d16729fa5e3:0x1e711a6bd5817de4!2m2!1d-79.767753!2d32.869823',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'http://golf.carolinas.com/wp-content/uploads/2017/09/banner_1.jpg',
    logo: 'http://www.charlestonnationalgolf.com/images/default/logo.png'
  },
  {
    _id: 'course_coosaw_creek',
    name: 'Coosaw Creek Country Club',
    address: '4110 Club Course Dr',
    city: 'North Charleston',
    state: 'SC',
    zip: '29420',
    phoneNumber: '843-767-9000',
    description:
      'The 18-hole, Par 71 Arthur Hills designed golf course meanders through pristine wetlands surrounded by the natural beauty of majestic oaks and towering pines. A complete golf practice facility equipped with a natural grass driving range, a chipping and a putting green is located near the club house. Golf leagues for men and women play weekly, and member tournaments are hosted throughout the year. The Clubhouse is located at the hub of the Coosaw community, featuring a well supplied golf shop, locker rooms and an impressive restaurant – the Palmetto Grill. The Grill offers a wide variety of menu options and libations in a friendly atmosphere. Whether you want to grab a bite to eat after a round of golf, have lunch with friends, or enjoy a romantic evening with someone special, the Grill is one of North Charleston’s premier establishments.',
    website: 'http://www.coosawcreek.com/',
    directions:
      'https://www.google.com/maps/dir//coosaw+creek/@32.9361499,-80.1797787,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fe89e896bb9e95:0xd34c440edd484156!2m2!1d-80.1097385!2d32.9361694',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'https://images.golftrips.com/articles/CoosawIsland.jpg',
    logo: ''
  },
  {
    _id: 'course_dunes_west',
    name: 'Dunes West Golf & River Club',
    address: '3535 Wando Plantation Way',
    city: 'Mount Pleasant',
    state: 'SC',
    zip: '29466',
    phoneNumber: '843-856-9000',
    description:
      "Steeped in the history and beauty of the South Carolina lowcountry, Dunes West Golf & River Club is Charleston’s premier golf destination. Located in Mt. Pleasant, less than 20 minutes from historic downtown Charleston, Dunes West combines a masterful Arthur Hills designed course, a charming clubhouse overlooking Wagner Creek and some of the area’s most spectacular scenery into a truly world-class and one of a kind experience. Nationally acclaimed by Golf Magazine and Golf Digest as a 'Top 10 Resort Course', Dunes West’s championship golf course designed by Arthur Hills takes full advantage of its spectacular lowcountry setting. The par 72 course plays 6871 yards, beckoning players of all handicaps, and combines with Dunes West’s first class club facilities to provide a world-class golf experience. The opening holes have generous landing areas and beautiful green settings complete with the undulation and bunkering that are the Arthur Hills signature. The back nine features some beautiful marsh and water views culminating in the 18th hole's challenging finish on a dual green split by the marshes of Wagner Creek.",
    website: 'http://www.duneswestgolfclub.com/',
    directions:
      'https://www.google.com/maps/dir//dunes+west+golf/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe6c39d58747e9:0x8e80696449ee5192?sa=X&ved=0ahUKEwiGkYz9_orYAhUs54MKHQdICB4Q9RcIhgEwCw',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'http://www.charlestongolfguide.com/images/thumb.php?src=/images/courses/listings/dunes_west_1.jpg&w=550&h=393&zc=1',
    logo: ''
  },
  {
    _id: 'course_harbor_course_at_wild_dunes',
    name: 'Harbor Course at Wild Dunes',
    address: '5881 Palmetto Drive',
    city: 'Isle of Palms',
    state: 'SC',
    zip: '29451',
    phoneNumber: '843-886-2301',
    description:
      'Designed by Tom Fazio, the Harbor Golf Course is known for its challenging design and beautiful views, and most of all, water. From lagoons and salt marshes to the Intracoastal Waterway, this varied golf course in Charleston, South Carolina will test all aspects of your game.',
    website:
      'https://www.destinationhotels.com/wild-dunes/golf/south-carolina-golf-harbor-course',
    directions:
      'https://www.google.com/maps/dir//wild+dunes+harbor+course/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe0d32de6d0051:0x7ee7729d2301a990?sa=X&ved=0ahUKEwjiu4-l5orYAhWW3oMKHZWtDWIQ9RcIoAEwCw',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'http://img1.10bestmedia.com/Images/Photos/305404/p-harbor-WDunes_54_990x660.jpeg',
    logo:
      'https://az760333.vo.msecnd.net/-/media/corporate/hotels-and-resorts/wild-dunes/wildduneslogo-crpd229x180.jpg?la=en&ts=17850e82-39e8-4612-8908-7433107a4830'
  },
  {
    _id: 'course_osprey_point',
    name: 'Osprey Point',
    address: '700 Governors Dr',
    city: 'Kiawah Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-266-4640',
    description:
      'Making full use of Kiawah’s maritime forests, lagoons and saltwater marshes, Osprey Point is one of the most popular courses with resort guests. Totally renovated in 2014 under the direction of course architect Tom Fazio, Osprey Point features tees, greens and fairways grassed with Paspalum. Fazio blended a par-72 layout that takes advantage of its setting. The course offers a wide variety of holes, each presenting its own unique challenges and beauty, which are bound to produce an enjoyable round. Each hole is unique and memorable. There are four challenging par-3s, four extremely distinctive par-5s and ten outstanding par-4s ranging in length from 340 yards to 461 yards from the championship tees. Generally, courses of the caliber of Osprey Point are in private club settings with restricted memberships and high membership fees. In fact, its architect, Tom Fazio, originally developed it as a members’ only type course. However, since Osprey Point is now part of Kiawah Island Golf Resort, anyone can enjoy this beautiful Lowcountry gem. Not only is Osprey Point a world-class layout, its elegant clubhouse is available for guest’s use. A favorite for after-round libations, dining, wedding receptions and special event functions.',
    website: 'https://kiawahresort.com/golf/osprey-point-golf-course',
    directions:
      'https://www.google.com/maps/dir//Osprey+Point+Golf+Course/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fdd488c60e01b5:0xd4ad76010a6f2cc3?sa=X&ved=0ahUKEwi5z6jl54rYAhVF4YMKHRVPBRQQ9RcIpwEwCw',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'https://kiawahresort.com/wp-content/uploads/2017/04/osprey-club-home-n-en-gb.jpg',
    logo:
      'https://kiawahresort.com/wp-content/uploads/2012/10/osprey-point-golf-logo-1.png'
  },
  {
    _id: 'course_oak_point',
    name: 'Oak Point',
    address: '4394 Hope Plantation Dr',
    city: 'Johns Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-266-4100',
    description:
      'Completely renovated in 2015, the new and improved Oak Point offers guests the greatly enhanced playing surface of Paspalum. Renovations also significantly added to the strategic challenges of the design elevating Oak Point to the championship level of the resort’s other courses. More than any other course on the resort, Oak Point has gone through dramatic changes over the last couple of years, greatly enhancing both the quality of golf and the overall guest experience. The resort purchased Oak Point in 1997, rounding out the championship rotation of five courses that makes Kiawah Island Golf Resort one of the world’s great golf destinations. Clyde Johnston, a noted Southeastern golf course architect, designed Oak Point on the grounds of former cotton and indigo plantation. With its close proximity to the Kiawah River and the Haulover Creek, with its surrounding maritime forest, Johnston was able to mold the rolling landscape into a first-class layout. Undulating fairways and challenging greens are some of the unique features of Oak Point. Oak Point is a shotmaker’s course. Strategy and a thinking approach to the golf course will be rewarded over pure power. In this sense, it is a bit of a throwback to the classic courses of the 1920s where the ability to place the ball in a certain portion of the fairway or a certain spot of the green was more important than power. Throw in the beautiful vistas and it is easy to understand why Oak Point recently received a near-perfect 4½ stars from the readers of Golf Digest magazine in their biennial “Best Places to Play” poll where it was rated one of the best values in South Carolina.',
    website: 'https://kiawahresort.com/golf/oak-point-golf-course/',
    directions:
      'https://www.google.com/maps/dir//Oak+Point+Golf+Course/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fc2b845b69c823:0x8d91aa061c6f16a7?sa=X&ved=0ahUKEwjUnaSw6YrYAhVJ_IMKHYrtDEwQ9RcImwEwDA',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'https://kiawahresort.com/wp-content/uploads/2017/04/oak-18-header-new-en-gb.jpg',
    logo:
      'https://kiawahresort.com/wp-content/uploads/2012/10/oak-point-golf-logo-1.png'
  },
  {
    _id: 'course_cassique_course',
    name: 'Cassique Course',
    address: '100 Old Cedar Ln',
    city: 'Johns Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-786-5752',
    description:
      'Named for the Kiawah Indian chiefs who once hunted the Lowcountry, Cassique’s 7,050-yard test ranges through maritime forests and along marshes where the Kiawah River meets the Atlantic Ocean. Since its opening in 2000, the Tom Watson-designed course has garnered numerous accolades and showcases the dramatic flare that has punctuated Watson’s playing career. Watson’s first solo design in North America, Cassique benefits from lessons learned en route to five British Open Championships. With its walkable layout, the par-72 links-style course is reminiscent of tracts found in Scotland and Ireland. Like those classic seaside settings, Cassique offers little protection from ocean winds, so Watson fashioned holes that could be played in numerous ways depending upon the conditions and the creativity of the golfer.',
    website:
      'http://www.kiawahislandclub.com/club/scripts/library/view_document.asp?GRP=13365&NS=PG&APP=80&DN=CASS',
    directions:
      'https://www.google.com/maps/dir//Cassique+Golf+Club/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fc2c7f5dff0579:0x5d2d9980bc07da3c?sa=X&ved=0ahUKEwi33pSp64rYAhWh5YMKHS3CDHIQ9RcIowEwCw',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'http://www.kiawahislandclub.com/Images/Library/Golf5.jpg',
    logo:
      'http://www.golfcoursegurus.com/reviews/images/logos/Kiawah-Island-Cassique.jpg'
  },
  {
    _id: 'course_kiawah_island_club_river_course',
    name: 'Kiawah Island Club River Course',
    address: '10 River Course Ln',
    city: 'Johns Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-768-6120',
    description:
      'Designed by Tom Fazio, the River Course opened in 1995 as The Kiawah Island Club’s first golf course. For golfers, the River Course provides a challenging and aesthetically pleasing 7,019-yard test. It boasts six holes that play along the river’s edge, with the other fairways and greens playing along picturesque marsh savannas, ponds, and the Island’s incomparable maritime forests.',
    website:
      'http://www.kiawahislandclub.com/club/scripts/library/view_document.asp?GRP=13365&NS=PG&APP=80&DN=RIVG',
    directions:
      'https://www.google.com/maps/dir//Kiawah+Island+Club,+River+Course+Lane,+Kiawah+Island,+SC/@32.6117933,-80.0993813,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fc2b4cdc2eecb1:0x8f92f1d98a05fbcc!2m2!1d-80.0993813!2d32.6117933',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'http://www.kiawahislandclub.com/Images/Library/Golf4.jpg',
    logo:
      'http://s3.amazonaws.com/golftripmedia/wp-content/uploads/2013/06/07121021/Kiawah-Island-Club-logo.jpg'
  },
  {
    _id: 'course_cougar_point',
    name: 'Cougar Point Golf Club',
    address: '12 Kiawah Beach Drive',
    city: 'Kiawah Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-266-4020',
    description:
      'Cougar Point, the newest of the five courses that make up Kiawah Island Resort’s 90-hole lineup, was built in 1997 over the same routing Player used when he built the original Marsh Point, the course that launched Kiawah on a path to becoming one of golf’s premier destinations, in the early ’70s. But over the decades that followed, plenty of ‘competition’ had come to the island thanks to the likes of Nicklaus, Fazio and Dye, and Player wanted and got a mulligan – one he made the most of. The new Cougar Point quickly has became a favorite of residents and resort guests alike. Still not overly long by today’s standards, the course places a premium on accuracy and rewards shot-makers who can work the ball both ways. And thanks to holes like the par-4 fifth and the par-3 sixth that offer sweeping views of the tidal marshes along the Kiawah River, Cougar Point is a visual treat whose personality is as varied as the winds off the river. ',
    website:
      'https://kiawahresort.com/golf/cougar-point-golf-course/?utm_source=cvb_golf_guide&utm_medium=text_link&utm_content=golf_cp_2016',
    directions:
      'https://www.google.com/maps/dir//cougar+point+golf+course/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fc2b536b99c509:0x41de78cecd55131b?sa=X&ved=0ahUKEwjM6PTP74rYAhUJ34MKHaC5Br0Q9RcIlAEwEA',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/c/83/c8304716-a143-11e6-ac57-4fccb38203da/581a5bcb35691.image.jpg?resize=1200%2C973',
    logo:
      'https://s3-media3.fl.yelpcdn.com/bphoto/cqj3uBNnATxFBuHB2goX_Q/348s.jpg'
  },
  {
    _id: 'course_turtle_point',
    name: 'Turtle Point Golf Club',
    address: '1 Turtle Point Drive',
    city: 'Kiawah Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-266-4050',
    description:
      'After a nine month renovation, the new and improved Turtle Point Golf Course reopened October 1, 2016 to rave reviews from members and guests. Late in 2015, Jack Nicklaus, along with the members of his architectural team, surveyed the course and made recommendations for the improvements. Renovations included refurbishing green complexes, re-grassing the greens, tees and fairways with Paspalum (the same salt-tolerant strain of grass that is on The Ocean Course, Osprey Point and Oak Point), rebuilding all bunkers, laser leveling all tee boxes, including the range and reestablish irrigation throughout the course. Rated 48th on Golf Digest’s 100 Greatest Public Golf Course List Turtle Point is a low-profile golf course that delivers a high caliber golfing experience. Players from the Carolina Amateur, the Carolina PGA, the South Carolina Amateur and the 1990 PGA Cup Matches will all agree that the Turtle Point Golf Course is a true test for strategy and accuracy. Jack Nicklaus once said that his number one goal in golf course design was to “make the player use his mind ahead of his muscles – to control his emotions sufficiently to really think through his options before drawing a club from the bag.” To that we say, welcome to Turtle Point Golf Club at Kiawah Island Golf Resort, one of Jack’s early designs and steeped in the finest traditions of classic golf course architecture.',
    website:
      'https://kiawahresort.com/golf/turtle-point-golf-course/?utm_source=cvb_golf_guide&utm_medium=text_link&utm_content=golf_tp_2016',
    directions:
      'https://www.google.com/maps/dir//Kiawah+Island+-+Turtle+Point+Golf+Course,+Turtle+Point+Lane,+Kiawah+Island,+SC/@32.6064918,-80.1229179,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fdd4afecf4b2eb:0x2e9d000f58ee1275!2m2!1d-80.0878983!2d32.6064244',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'https://kiawahresort.com/wp-content/uploads/2017/04/turtlepoint-header-en-gb.jpg',
    logo:
      'https://kiawahresort.com/wp-content/uploads/2012/10/turtle-point-golf-logo-1.png'
  },
  {
    _id: 'course_ocean_course',
    name: 'The Ocean Course',
    address: '1000 Ocean Course Drive',
    city: 'Kiawah Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-266-4670',
    description:
      'The Ocean Course at Kiawah Island Golf Resort hosted the 2007 Senior PGA and the 2012 PGA Championships. It will also host the 2021 PGA. The Ocean Course is the fourth course to have hosted each of the PGA of America’s major championships. Probably no other golf course in the world outside of the United Kingdom and Ireland is affected as much by the wind. From one round to the next, a player can experience up to an 8-club difference on holes depending upon the direction and strength of the wind. Built in 1991 by Pete Dye, there are no prevailing winds on the course. Dye took this into account when designing the course. In fact, he designed two courses into one – one for an easterly wind and one for a westerly wind. Located on the eastern-most end of Kiawah Island, The Ocean Course has more seaside holes than any other course in the Northern Hemisphere – 10 right along the Atlantic with the other 8 running parallel to those. Although it was originally designed to sit behind the dunes, Dye’s wife, Alice, suggested raising the entire course to allow players unobstructed views of Kiawah’s beautiful Atlantic coastline from every hole. This improved view, however, made the course substantially more demanding as it also exposed it to the area’s brisk and unpredictable sea breezes.',
    website: 'https://kiawahresort.com/golf/the-ocean-course/',
    directions:
      'https://www.google.com/maps/dir//Ocean+Course+Clubhouse,+1000+Ocean+Course+Dr,+Johns+Island,+SC+29455/@32.6118586,-80.0933593,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fc2c98e2d64cbd:0x33474efbb15ac8f5!2m2!1d-80.0233191!2d32.611878',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'https://cdn-s3.si.com/s3fs-public/golf/1467399468/kiawah.jpg',
    logo:
      'http://s3.amazonaws.com/golftripmedia/wp-content/uploads/2013/06/07141007/Kiawah-Island-Ocean-Course-logo.jpg'
  },
  {
    _id: 'course_legend_oaks',
    name: 'Legend Oaks Golf & Tennis Club',
    address: '118 Legen Oaks Way',
    city: 'Summerville',
    state: 'SC',
    zip: '29485',
    phoneNumber: '843-821-4077',
    description:
      'A semi-private golf and tennis club located in Summerville, SC. The Club is located within thirty minutes of downtown Charleston and even closer to the airport. We invite you to come out and golf plantation style. Members and guests are always welcome to play our golf course, and enjoy our special club fare at Bistro One18. Legend Oaks is surrounded by the natural beauty of 300 year old majestic live oak trees, towering pines and a whole host of LowCountry wildlife. Our Scott Pool championship golf course provides a challenge for all level of players.',
    website: 'https://www.legendoaksgolf.com/',
    directions:
      'https://www.google.com/maps/dir//legend+oaks+golf/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe8e8a87670625:0x44549bc40b7616f9?sa=X&ved=0ahUKEwij9OKy9IrYAhUk0IMKHQGWBLgQ9RcIiAEwDg',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'https://www.legendoaksgolf.com/images/slideshows/banner-new-1.jpg',
    logo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNC6rZFeY4PU6pGrmA2jhMQWwv_U9zk4KhctMy9Eqwib1DOKV'
  },
  {
    _id: 'course_patriots_point',
    name: 'Patriots Point Links ',
    address: '1 Patriots Point Road',
    city: 'Mount Pleasant',
    state: 'SC',
    zip: '29464',
    phoneNumber: '843-881-0042',
    description:
      'Situated on the edge of Charleston Harbor and offering spectacular views of the city, Fort Sumter, and ships arriving from all over the world, Patriots Point has been for years a favorite place to play for local Charleston golfers and resort guests. It’s located in Mount Pleasant at the foot of the Arthur Ravenel Jr. Bridge and just five minutes from downtown. Any golf trip to South Carolina’s historic city of Charleston is not complete without a round at this memorable harbor side golf course. The amenities you will enjoy at Patriots Point include a lighted driving range with PGA instruction, a southern style clubhouse, golfers’ grill and patio, and one of the most popular wedding and event facilities in Charleston. Book your tee time online or give us a call to schedule a tour of our venue. With four sets of tees ranging from 5100 to 7000 yards, players of all skill levels will enjoy this Willard Byrd designed links course on the Charleston Harbor. The ever-changing wind that typically sweeps across the harbor can make the course play take on a completely different perspective from one round to the next. This links style par 72 championship course was also rated “South Carolina Course of the Year for 2001” by the National Golf Course Owners Association.',
    website: 'http://www.patriotspointlinks.com/',
    directions:
      'https://www.google.com/maps/dir//patriots+point+links/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe70ed2dd8ef63:0xb9778667606554e5?sa=X&ved=0ahUKEwie-a3Y9YrYAhUj0oMKHedECD4Q9RcIiQEwDg',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'http://d2tbfnbweol72x.cloudfront.net/wp-content/blogs.dir/4483/files/2015/01/slider1.jpg?v=1.4',
    logo:
      'https://pbs.twimg.com/profile_images/618471547746058240/IiNoaAkG_400x400.jpg'
  },
  {
    _id: 'course_pine_forest',
    name: 'Pine Forest Country Club',
    address: '1000 Congressional Blvd',
    city: 'Summerville',
    state: 'SC',
    zip: '29483',
    phoneNumber: '843-851-1193',
    description:
      'Nestled among the Carolina Pines of Summerville, The Club at Pine Forest awaits the golfer searching for a championship course. With tree-lined fairways and elevated greens, The Club at Pine Forest is one of the most challenging courses in the Lowcountry. The 12th hole, fittingly nicknamed “Little Augusta” is a 324 yard par 4, where the view of the green from the fairway is reminiscent of the 12th hole at Augusta National. This hole features one of the narrowest greens in the world at only seven yards wide in the center and twelve yards wide on the sides.',
    website: 'http://www.pineforestcountryclub.com/',
    directions:
      'https://www.google.com/maps/dir//pine+forest+country+club/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe8cdc39f09c27:0xa7998ac120f8e10?sa=X&ved=0ahUKEwji8fGJ9orYAhXl6oMKHQ3FCtYQ9RcIiQEwCw',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'http://www.pineforestcountryclub.com/files/cache/2017/12/pg08/179666679.jpg',
    logo:
      'http://d2tbfnbweol72x.cloudfront.net/8511193/files/2014/07/logo.png?gncdn=ksqLL2o2'
  },
  {
    _id: 'course_rivertowne',
    name: 'RiverTowne Country Club',
    address: '1700 Rivertowne Country Club Dr',
    city: 'Mount Pleasant',
    state: 'SC',
    zip: '29466',
    phoneNumber: '843-216-3777',
    description:
      'RiverTowne Country Club, located off of Highway 41 in beautiful Mount Pleasant, is home to Charleston’s only Arnold Palmer Signature golf course. Situated among scenic marshlands with 13 holes along the Wando River and Horlbeck Creek, this 18-hole championship course features exceptional year-round playing conditions, tree-lined fairways and multi-tiered greens guarded by bunkers and water. It’s a true shot-maker’s course befitting seasoned golfers yet approachable enough for public play. Awarded 4.5 stars by Golf Digest, RiverTowne has hosted LGPA tournaments and was named Charleston Golf Course of the Year in 2015. We offer a quality resort golf experience at an exceptional value and welcome you to experience the course for yourself.',
    website: 'http://www.rivertownecountryclub.com/',
    directions:
      'https://www.google.com/maps/dir//rivertowne+country+club/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe6dcf72e1668d:0x363c1bc279bb1c94?sa=X&ved=0ahUKEwjZ4dP49orYAhUL0YMKHajyA3EQ9RcIiAEwDg',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'https://res.golfadvisor.com/app/courses/image/preview/33968.jpg',
    logo:
      'http://cdn.cybergolf.com/images/824/RiverTowne-Country-Club_logo-original-web.png'
  },
  {
    _id: 'course_crooked_oaks',
    name: 'Crooked Oaks Golf Course',
    address: '3772 Seabrook Island Road',
    city: 'Seabrook Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-768-2529',
    description:
      'The Crooked Oaks Golf Course is a 6,780 yard, par 72 course designed by Robert Trent Jones, Sr. The Course winds through marsh, maritime forests and moss-hung, century old live oaks. We are in the planning stages of developing comprehensive Master Plans for both courses.',
    website: 'http://www.discoverseabrook.com/',
    directions:
      'https://www.google.com/maps/dir//seabrook+island+resort+crooked+oaks+golf+course/@32.5600794,-80.2460882,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fc2c32c46d7eb3:0xf6ff941a84488404!2m2!1d-80.176048!2d32.5600988',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'http://www.charlestoncvb.com/listings/photos/wedding_large/30389911124390.jpg/seabrook_island_crooked_oaks_course.jpg',
    logo:
      'https://storage.googleapis.com/idx-acnt-gs.ihouseprd.com/AR907192/file_manager/Copied%20Photos/KathyLogo.png'
  },
  {
    _id: 'course_ocean_winds',
    name: 'Ocean Winds',
    address: '3772 Seabrook Island Road',
    city: 'Seabrook Island',
    state: 'SC',
    zip: '29455',
    phoneNumber: '843-768-2529',
    description:
      'The Ocean Winds Golf Course, designed by Willard Byrd, is a par 72, 6,765 yard course where the course takes you to the Atlantic Ocean where the wind provides a challenging test of golf.',
    website: 'http://www.discoverseabrook.com/',
    directions:
      'https://www.google.com/maps/dir//seabrook+island+resort+crooked+oaks+golf+course/@32.5600794,-80.2460882,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fc2c32c46d7eb3:0xf6ff941a84488404!2m2!1d-80.176048!2d32.5600988',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'https://realestatescorecard.com/sites/default/files/styles/community_review_slideshow/public/Living_in_Charleston_Seabrook_Island_golf_course_aerial_view_0.jpg?itok=8mFpCxks',
    logo:
      'https://storage.googleapis.com/idx-acnt-gs.ihouseprd.com/AR907192/file_manager/Copied%20Photos/KathyLogo.png'
  },
  {
    _id: 'course_shawdowmoss_plantation',
    name: 'Shadowmoss Plantation Golf Club',
    address: '20 Dunvegan Dr',
    city: 'Charleston',
    state: 'SC',
    zip: '29414',
    phoneNumber: '843-556-8251',
    description:
      'Begin the best Charleston golf vacation with us and experience the reasons why Golf Digest praises Shadowmoss as “the best golf value in Charleston”. Whether you are just looking for an enjoyable round of golf or some professional golf instruction, Shadowmoss has everything you need for the best round of golf in Charleston, SC. The club offers rental clubs, a driving range, putting green, chipping green, and a fully stocked pro shop with the finest in quality apparel and equipment. We are a semi-private country club with a Championship 18 hole par 72 course. We offer great rates and have unbeatable specials. We also feature a Olympic sized pool and full-service grill room and lounge. No wonder we why golfers all around think we are the best.',
    website: 'https://shadowmossgolf.com/',
    directions:
      'https://www.google.com/maps/dir//shadowmoss/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe7d3e34d69efd:0xeedf5e23c4b59f19?sa=X&ved=0ahUKEwjd9tmK-4rYAhVl0YMKHe4rCRkQ9RcIiQEwDQ',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'https://res.golfadvisor.com/app/courses/image/preview/17845.jpg',
    logo:
      'http://s3.amazonaws.com/product-images.imshopping.com/nimblebuy/40-for-2-rounds-of-golf-including-cart-at-shadowmoss-plantation-3400472-regular.jpg'
  },
  {
    _id: 'course_wescott_plantation',
    name: 'The Golf Club at Wescott Plantation',
    address: '5000 Wescott Club Drive',
    city: 'Summerville',
    state: 'SC',
    zip: '29485',
    phoneNumber: '843-871-2135',
    description:
      'Located in the heart of the South Carolina Lowcountry – within minutes of the Charleston International Airport, centuries-old plantations and gardens, sun-splashed Atlantic beaches and, of course, all the beauty and charm of Charleston’s historic district – Wescott Golf Club is the area’s largest and most diverse daily-fee golf facility. With three distinct nines, Wescott gives players a chance to play three different 18-hole layouts. With resort class service, premier course conditions and an award-winning staff, Wescott Golf Club is one of the top public facilities on the East Coast.  We invite you to experience the Lowcountry’s only 27-hole facility for yourself and see just how good – and affordable – golf can be.',
    website: 'https://www.wescottgolf.com/',
    directions:
      'https://www.google.com/maps/dir//the+club+at+wescott+plantation/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe8961449920a7:0xb421b102ae34a840?sa=X&ved=0ahUKEwiS3-Kk_IrYAhUG4YMKHTPxCJYQ9RcIiwEwDg',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'http://www.charlestongolfguide.com/images/thumb.php?src=/images/courses/listings/The-Golf-Club-at-Wescott-Plantation-2.jpg&w=550&h=393&zc=1',
    logo:
      'https://s3-media3.fl.yelpcdn.com/bphoto/mlH3frTKPNy_XSHPYZgkhw/348s.jpg'
  },
  {
    _id: 'course_links_at_stono_ferry',
    name: 'The Links at Stono Ferry',
    address: '4812 Stono Links Dr',
    city: 'Hollywood',
    state: 'SC',
    zip: '29449',
    phoneNumber: '843-763-1817',
    description:
      'The Links at Stono Ferry.  Set amidst South Carolina Lowcountry breezes from the Intracoastal Waterway and centuries-old live oaks, Stono Ferry is a refuge from society’s hustle.  This championship, Ron Garl design offers one of the most exciting tests in all the Lowcountry.  Stono Ferry is a semi-private club open for membership as well as to local and golf vacation play.  Wage your own war on the site of a historic Revolutionary War battle. Stono Ferry is less than 30 minutes from downtown Charleston, and is also the closest course off both Kiawah and Seabrook Islands. Whether you are a local or a vacationing golfer, the wonderful golf experience at Stono Ferry is mere moments away.',
    website: 'http://stonoferrygolf.com/',
    directions:
      'https://www.google.com/maps/dir//the+links+at+stono+ferry/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe8115ae091ed5:0xce7085a87824d946?sa=X&ved=0ahUKEwi-lreY_YrYAhWpxYMKHWG9B0oQ9RcIpAEwEQ',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'http://img2.10bestmedia.com/Images/Photos/305133/p-stono3-2_54_990x660.jpg',
    logo:
      'http://stonoferrygolf.com/wp-content/uploads/mediacenter/logos/StonoFerryLogo4stars.jpg'
  },
  {
    _id: 'course_plantation_course_at_edisto',
    name: 'The Plantation Course at Edisto',
    address: '19 Fairway Dr',
    city: 'Edisto Island',
    state: 'SC',
    zip: '29438',
    phoneNumber: '843-869-1111',
    description:
      'The golf course started as a dream of David Lybrand’s in 1971 when he purchased the 300 acre site and set to develop a golf course, of which he knew little about. He assembled a team of locals, each with their own specialty, and began construction. Many challenges were addressed in constructing over 30 acres of lakes, and planning around the beautiful trees. They employed architect Tom Jackson to complete the final phase. He did a masterful job of blending greens and traps which matched the terrain and beauty of the site. The course was originally named ‘Oristo’, and the grand opening in late 1973 featured a helicopter landing on the course bringing Sam Snead, Bob Goalby, and Chuck Matlock to play the first round. The Pros were complimentary of the course and so were many golfers who would long enjoy Edisto’s new facility. Soon after opening, Oristo received recognition from several sources as one of the best new courses in the Carolina’s. During its history, the course has been visited by golfers from every state in the Union. Serving as host for Wyndham Fairfield community has enabled many guest an opportunity to enjoy this golf gem of the low country of South Carolina. The island known as Edisto is rich in history. Stories abound of the Indians who first enjoyed the area, on to the struggles and battles of the Civil War years, and later the Mystic of the Plantation days. Thus, the naming of our new course honors the past of the area, and encourages excitement about its future as a truly beautiful and interesting layout.',
    website: 'http://theplantationcourseatedisto.com/',
    directions:
      'https://www.google.com/maps/dir//plantation+course+at+edisto/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fc3b08d770d483:0xf018547bc24054e4?sa=X&ved=0ahUKEwiS3sah_orYAhVH04MKHeEGDewQ9RcIhwEwDQ',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'https://res.golfadvisor.com/app/courses/image/preview/86911.jpg',
    logo: 'https://media.xogrp.com/images/19a2de62-d2a3-423b-b670-38740ab33e5c'
  },
  {
    _id: 'course_links_course_at_wild_dunes',
    name: 'The Links Course at Wild Dunes',
    address: '5881 Palmetto Dr',
    city: 'Isle of Palms',
    state: 'SC',
    zip: '29451',
    phoneNumber: '843-866-2164',
    description:
      'When Tom Fazio set out to create Wild Dunes Links, his was hardly a household name, even in the golf world. Still in his early 30s, he had just left his famous uncle, George Fazio, who lost the 1950 U.S. Open to Ben Hogan in a playoff, to hang out his own shingle. But almost as soon as his Links opened, the young Fazio’s first solo creation set flush against the Atlantic on the Isle of Palms was gracing national magazine covers and earning a spot among the top 30 courses in the world. Wild Dunes Links literally helped vault Tom Fazio to the top of his profession. More than three decades later, the course chosen to host a national championship as a mere infant – the 1985 U.S. Senior Amateur – remains one of the few true links courses in America. Visually stunning, Wild Dunes is characterized by holes so natural in their appearance that they look as if Fazio merely built a tee at one end and a green at the other. For the most part, even the architect himself will tell you that’s basically all that was needed on a site that seemed to have been created for golf. A particularly dramatic four-hole stretch, starting at the par-4 10th, is routed into primary and secondary dune ridges formed by the ocean’s receding waters thousands of years before. But just as any great plot builds to its climax, Wild Dunes Links saves its most jaw-dropping drama for the end. At holes 17 and 18, you’ll be hard pressed to focus on the golf and not the rolling surf splashing on the beach just to your left. Wild Dunes Links is golf where the land meets the sea. As the Scots have argued since they first challenged the dunes of St. Andrews with hickories and featheries, golf doesn’t get any better than that. ',
    website:
      'https://www.destinationhotels.com/wild-dunes/golf/charleston-golf-links-course',
    directions:
      'https://www.google.com/maps/dir//5881+Palmetto+Dr,+Isle+of+Palms,+SC+29451/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe0d32c7842b3f:0x6f2927dfa9ca958?sa=X&ved=0ahUKEwiljsyrgYvYAhWD2YMKHWqSAt8QwwUIKTAA',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'https://az760333.vo.msecnd.net/-/media/property/wild-dunes/1200x800-meta-graph-image/wild-dunes_golf_links_hole18-crpd1200x800.jpg?ts=a4906089-0db7-49c6-90ca-50909da21775',
    logo:
      'https://az760333.vo.msecnd.net/-/media/corporate/hotels-and-resorts/wild-dunes/wildduneslogo-crpd229x180.jpg?la=en&ts=17850e82-39e8-4612-8908-7433107a4830'
  },
  {
    _id: 'course_municipal_golf_course',
    name: 'Charleston Municipal Golf Course',
    address: '2110 Maybank Hwy',
    city: 'Charleston',
    state: 'SC',
    zip: '29412',
    phoneNumber: '843-795-6517',
    description:
      "The Municipal Course is a very golfer-friendly course. Most days, 18-holers play in less than 4 hours. The design is a traditional early 20th century golf course with modern upgrades of the new millennium. One of the few walkable golf courses in Charleston, The City Course boasts 6 sets of tees to accommodate all playing levels. Yardages start at 3628 yards and lengthen to 6432 yards. With open green fronts and no forced carries except for the championship tees, it is a wonderful course for beginners, women, and seniors. The design, laid out by Johnny Adams with many Seth Raynor characteristics, is also a challenge. The small greens and the surrounding bunkers test even the best players skill. It is no wonder that over 60,000 rounds are played annually. Charlestons reputation as a golf vacation destination is growing. First-timers may find it hard to believe, but The City Course is a favorite with the tourists as well. Many a day The Muni Grill is abuzz with accents from around the world comparing stories about their golf travels. With multiple-day golf vacations, a day to play The Muni is often set aside. The Monday Night Blitz (Summer Mondays) draws 4 person teams regularly from all over Charleston. The Municipal Golf Course welcomes all players.  Please check with the Pro Shop about potential golf cart restrictions due to weather, tides, or course maintenance.  You are welcome to self-identify (with a parking hang tag and your driver's license) if needing to mark your golf cart with a disability flag.  If you have any questions or concerns, please let us know!",
    website: 'https://www.charleston-sc.gov/index.aspx?nid=644',
    directions:
      'https://www.google.com/maps/dir//charleston+municipal+golf+course/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe794490950941:0x1ec348356395f502?sa=X&ved=0ahUKEwiV9q2mgovYAhWI3oMKHeCJCRUQ9RcIjgEwCw',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'http://www.worldgolf.com/courses/photo/preview/1376.jpg',
    logo: 'http://img1-azcdn.newser.com/image/1101600-12-20170120142836.jpeg'
  },
  {
    _id: 'course_bulls_bay',
    name: 'Bulls Bay',
    address: '995 Bulls Bay Drive',
    city: 'Awendaw',
    state: 'SC',
    zip: '29429',
    phoneNumber: '843-881-2223',
    description:
      'A private enclave set against the Atlantic Ocean and its tidal salt marshes, Bulls Bay personifies the vision of its owner: Joe Rice, and the imagination of its artistic designer, the late Mike Strantz. An accomplished professional artist as well as golf architect, Strantz transformed a once flat stretch of Lowcountry coastline into a landscape reminiscent of the great links courses of Scotland and Ireland. Roughly two million cubic yards of earth were moved to reshape the site. And while other courses, especially modern courses, have required as much earth moving, few, if any, architects have transformed a site with such dramatic results. At Bulls Bay, Strantz created 75-foot elevation changes and 360-degree views unlike any in the Lowcounntry. But more than providing dramatic views, Bulls Bay, with its firm, sandy turf and its ever-present wind off the ocean, is a true links golf experience reserved exclusively for its members and their guests. At Bulls Bay, there is no traffic or intervening real estate, no tennis courts or swimming pools to detract from the pure golf experience. Other country clubs or developments may boast that golf was given first priority: At Bulls Bay, golf was and is the only priority.',
    website: 'http://www.bullsbaygolf.com/',
    directions:
      'https://www.google.com/maps/dir//Bulls+Bay+Golf+Club,+995+Bulls+Bay+Blvd,+Awendaw,+SC+29429/data=!4m5!4m4!1m0!1m2!1m1!1s0x88fe136ad243ec57:0xefaf8bd1d51009e7?sa=X&ved=0ahUKEwjjwM35hIvYAhVo9YMKHTKzDhcQiBMIGzAA',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL:
      'http://www.bullsbaygolf.com/wp-content/uploads/2015/04/Bulls-Bay-Hole-9-800x533.jpg',
    logo:
      'http://www.bullsbaygolf.com/wp-content/uploads/2016/04/Bulls-Bay-Logo.png'
  },
  {
    _id: 'course_beresford_creek',
    name: 'Beresford Creek at Daniel Island Club',
    address: '600 Island Park Drive',
    city: 'Charleston',
    state: 'SC',
    zip: '29492',
    phoneNumber: '843-971-3555',
    description:
      'Playing 7,293 yards from the championship tees, the Tom Fazio-designed Beresford Creek course is a par 72 course that traverses pristine marsh, creeks and waterways, providing incredible views. In traditional Fazio style, holes have been shaped and contoured to create challenge and drama for players at every level. The course was named among the nation’s top real estate courses by Golfweek magazine in 2000, the year it opened. “The Beresford Creek course has its own distinctive character and feel,” commented Tom Fazio. “This is partly because of the width and placement of the holes, the massive trees, the open marshes along the fairways – and the position of the holes along expansive corridors of land.”',
    website:
      'https://www.danielislandclub.com/club/scripts/section/section.asp?NS=BC&DN=BCREEK',
    directions:
      'https://www.google.com/maps/dir//Daniel+Island+Club,+600+Island+Park+Dr,+Charleston,+SC+29492/@32.8850296,-79.908569,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fe6f9173cb55b3:0x81efa30a8cd40588!2m2!1d-79.9063803!2d32.8850296',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'https://www.danielislandclub.com/Images/Library/BCHOLE_11.jpg',
    logo:
      'http://danielisland.com/wp-content/themes/daniel-island-2015/img/daniel-island-logo-color.png'
  },
  {
    _id: 'course_ralston_creek',
    name: 'Ralston Creek at Daniel Island Club',
    address: '600 Island Park Drive',
    city: 'Charleson',
    state: 'SC',
    zip: '29492',
    phoneNumber: '843-971-3555',
    description:
      'Against a stunning backdrop of natural saltwater marsh and tidal creek vistas, acclaimed golf course architect Rees Jones has designed a true Lowcountry classic. Ralston Creek, Daniel Island’s second 18-hole masterpiece, is a par 72 course playing 7,446 yards from the championship tees. Opened in 2006, the course was named among the nation’s top new private courses by Golfweek and Golf Digest magazines. “The layout has all the elements of a stern test of golf,” says Jones, “including strategically placed, sculpted fairway bunkers, diversely contoured greens, greenside bunkers placed to protect the championship pin positions, and enough length for the long hitters. Ralston Creek is a course that will stand the test of time for generations of Daniel Island Club members and their families.”',
    website:
      'https://www.danielislandclub.com/club/scripts/section/section.asp?NS=RC',
    directions:
      'https://www.google.com/maps/dir//Daniel+Island+Club,+600+Island+Park+Dr,+Charleston,+SC+29492/@32.8850296,-79.908569,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88fe6f9173cb55b3:0x81efa30a8cd40588!2m2!1d-79.9063803!2d32.8850296',
    date: '12/16/2017',
    time: '7:00AM',
    golfers: '4',
    holes: '18',
    rate: '75.00',
    type: 'course',
    picURL: 'https://www.danielislandclub.com/Images/Library/RCHOLE_14.jpg',
    logo:
      'http://danielisland.com/wp-content/themes/daniel-island-2015/img/daniel-island-logo-color.png'
  }
])
