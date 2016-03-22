

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Action Vars Defined====

var defaultActions = [
  {name: 'punch', funct: function(){console.log('punched!!')}},
  {name: 'kick', funct: function(){console.log('kicked!!')}}
]

var runToLounge = {name: 'Run to Lounge', funct: function(){console.log('Ran to Lounge!')}}
var runToHall = {name: 'Run to Hallway', funct: function(){console.log('Ran to Hallway!')}}


var hero = {
  name: prompt("What is your name?"),
  hp: 100,
}
///-------------------


var friends = [//all students in class
  {name: 'Kedar', gender: 'm', equip: 'marker', specialty: 'basketball'},
  {name: 'Hannah', gender: 'f', equip: 'ruby book', specialty: 'political conversation'},
  {name: 'Jon', gender: 'm', equip: 'nunchucks', specialty: 'banking'},
  {name: 'Noah', gender: 'm', equip: 'coffee', specialty: 'dad jokes'},
  {name: 'Max', gender: 'm', equip: 'Monster Drink', specialty: 'Spinning phat beatz'},
  {name: 'Marcos', gender: 'm', equip: 'Spongebob doll', specialty: 'getting money'},
  {name: 'Angie', gender: 'f', equip: '', specialty: 'making things pretty'},
  {name: 'Brigette', gender: 'f', equip: '', specialty: ''},
  {name: 'Andrew', gender: 'm', equip: 'Beats headphones', specialty: 'cyber security'},
  {name: 'A.J.', gender: 'm', equip: 'marker', specialty: 'laughter'},
  {name: 'Carlos A.', gender: 'm', equip: 'smokes', specialty: 'futbol'},
  {name: 'Arvin', gender: 'm', equip: 'pillow', specialty: 'MMA'},
  {name: 'Victor', gender: 'm', equip: 'portal gun', specialty: 'getting Timey-Wimey'},
  {name: 'Trevor', gender: 'm', equip: 'Richard Feynman biography', specialty: 'theoretical physics'},
  {name: 'Joseph', gender: 'm', equip: 'cookies', specialty: 'DIY stuff'},
  {name: 'Martin', gender: 'm', equip: '', specialty: 'bein all cool'},
  {name: 'Carlos B.', gender: 'm', equip: '', specialty: 'acting'},
  {name: 'Timmy', gender: 'm', equip: 'vape', specialty: 'C++'},
  {name: 'JoBeth', gender: 'f', equip: 'katana', specialty: 'swordplay'}
//machete, axe, chainsaw, nunchuk, crowbar,
]
var randFriend = friends[randNum(0, friends.length-1)]

for (var i = 0; i < friends.length; i++) {
  if (friends[i].name.toLowerCase() === hero.name.toLowerCase()){
    console.log('You are ' + friends[i].name); friends.splice(i, 1);
  }
}


var zoms = friends.splice(randNum(0, friends.length-1), 1) //initial zom, add'l zoms will be added.
console.log(friends.length + ' friends remain. ', zoms.length, zoms.length == 1 ? 'is a zombie.' : 'are zombies.')

var curZom = zoms[0]
var victims = friends.splice(randNum(0, friends.length-1), 1) //initial zom, add'l zoms will be added.
console.log(friends.length + ' friends remain. ', victims.length, victims.length == 1 ? 'is under attack.' : 'are under attack.')

var helpVictim = {name: 'Help ' + victims[0].name, funct: function(){console.log('Helped', victims[0].name)}}


function update(text){
  $('#prompt').html(text)
}

function introScene(){
  var randFriend1 = randFriend
  update("After a frustrating morning, you return from lunch and attempt to fix some bugs.... just as " + randFriend1.name + " starts to explain the finer points of  \"" + randFriend1.specialty + "\", " + zoms[0].name + " appears looking very sickly and awkwardly ambles into the room. Out of nowhere, " + zoms[0].name + " bites " + victims[0].name + " on the neck. ")

}

function Location(name, img, actions){//location constructor
  this.name = name
  this.img = img
  this.actions = actions
}//Hannah: make a location index object with keys
var class3 = new Location(
    'Classroom 3',
    'http://s3-media4.fl.yelpcdn.com/bphoto/3_KhycVbw8DbUJUOjXmwpA/o.jpg',
    [
      runToLounge, runToHall, helpVictim
    ]
  )

var lounge = new Location('GA Lounge', 'http://s3-media4.fl.yelpcdn.com/bphoto/_plEFiI6ph2EEdI3Z02ypA/o.jpg')

var curLocation = class3//current location. locations should have a forward and backward linked location.
function curActions(){
  for (var i = 0; i < defaultActions.length; i++) {
      $("<div>" + defaultActions[i].name + "</div>").appendTo('#input')
    }
      for (var i = 0; i < curLocation.actions.length; i++) {
      $("<div>" + curLocation.actions[i].name + "</div>").appendTo('#input')
    }
  }


introScene()

function initScreen(){
  $('#status h2').html(hero.name)
  $('#hp').html('HP: ' + hero.hp)
  $('#display').css('background-image', 'url(' + curLocation.img + ')')
  curActions()
}

initScreen()




/*function changeLoc(){
  $('#display').css("background-image", "url('http://s3-media4.fl.yelpcdn.com/bphoto/_plEFiI6ph2EEdI3Z02ypA/o.jpg')")
}*/


