

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll() {
  return randNum(0, 100)
}

var hero = {
  name: prompt("Welcome to the Apocalypse. What is your name?"),
  hp: 100,
}

var friends = [//all students in class --REFACTOR
  {name: 'Kedar', gender: 'm', equip: 'marker', specialty: 'basketball'},
  {name: 'Hannah', gender: 'f', equip: 'ruby book', specialty: 'political conversation'},
  {name: 'Jon', gender: 'm', equip: 'nunchucks', specialty: 'banking'},
  {name: 'Noah', gender: 'm', equip: 'coffee', specialty: 'dad jokes'},
  {name: 'Max', gender: 'm', equip: 'Monster Drink', specialty: 'Spinning phat beatz'},
  {name: 'Marcos', gender: 'm', equip: 'Spongebob doll', specialty: 'getting money'},
  {name: 'Angie', gender: 'f', equip: '', specialty: 'making things pretty'},
  {name: 'Brigette', gender: 'f', equip: '', specialty: 'eating tacos'},
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

for (var i = 0; i < friends.length; i++) { //depend: friends, hero
  if (friends[i].name.toLowerCase() === hero.name.toLowerCase()){
    console.log('You are ' + friends[i].name); friends.splice(i, 1);
  }
}


var zoms = friends.splice(randNum(0, friends.length-1), 1) //initial zom, add'l zoms will be added.
console.log(friends.length + ' friends remain. ', zoms.length, zoms.length == 1 ? 'is a zombie.' : 'are zombies.')

var turn = 1
var enemy = zoms[turn-1]
enemy.name = 'Zombie ' + enemy.name
enemy.hp = 30
enemy.actions = {}
enemy.actions.bite = {
  name : 'bite',
  funct : function(){
    var rolled = roll()
    console.log(enemy.name + ' rolled ' + rolled)
    if(rolled > 90){
      hero.turned = true
      update('you have been bitten by ' + enemy.name + '. You have moments before you will turn into a zombie.')
    } else if (rolled < 30){
    hero.hp -= 10
    update(enemy.name + 'bites at you. you aren\'t bitten but stumble over ' + randFriend().name + ' and hurt yourself.' )
    showHP()
    } else {
      update(enemy.name + ' lunges, trying to bite you, but ' + randFriend().name + ' throws a chair at ' + enemy.name)
      enemy.hp -= 10
    }
  }
}
enemy.actions.claw = function(){}
enemy.actions.grab = function(){}

var victims = friends.splice(randNum(0, friends.length-1), 1)

function survivors(){
  var list = ""
  for (var i = 0; i < friends.length; i++) {
    list += friends[i].name + (i == friends.length - 1 ? "" : ",  ")
  }
  return list
}

function zombies(){
  var list = ""
  for (var i = 0; i < zoms.length; i++) {
    list += zoms[i].name + (i == zoms.length - 1 ? "" : ", ")
  }
  return list
}

console.log(friends.length + ' friends remain. ', victims.length, victims.length == 1 ? 'is under attack.' : 'are under attack.')

//Define Character Actions====

var defaultActions = [
  {name: 'punch ' + enemy.name,
    funct: function(){
      enemy.hp -= 10
      $('.attack').toggle(50).html('punched ' + enemy.name)
      setTimeout(function(){$('.attack').fadeOut(1000)}, 3000)
      setTimeout(function(){$('.effect').toggle(500).html('Zombie '+enemy.name + '-10 hp!')}, 1000)
      setTimeout(function(){$('.effect').fadeOut(1000)}, 3000)
      update(punchText[randNum(0,punchText.length-1)])
    }
  },
  {name: 'kick ' + enemy.name,
    funct: function(){
      $('.attack').toggle(50).html('kicked ' + enemy.name)
      setTimeout(function(){$('.attack').fadeOut(1000)}, 1000)
      console.log('kicked!!')
    }
  }
]

$('.attack').hide()
$('.effect').hide()

//Define Location specific action objects===
var runToLounge = {
  name: 'Run to Lounge',
  funct: function(){
    console.log('Ran to Lounge!')
  }
}
var runToHall = {
  name: 'Run to Hallway',
  funct: function(){
    console.log('Ran to Hallway!')
  }
}

var runToElevator = {
  name: 'Run to Hallway',
  funct: function(){
    console.log('Ran to Hallway!')
  }
}

var helpVictim0 = {
  name: 'Help ' + victims[0].name,
  funct: function(){
    console.log('Helped', victims[0].name)
  }
}

var lookInClass1 = {
  name: 'Look in Classroom 1 ',
  funct: function(){
    console.log('Looked in Classroom 1')
  }
}



function update(text){
  $('#prompt').html(text)
}

function introScene(){
  var randFriend1 = randFriend()
  update("After a frustrating morning, you return from lunch and attempt to fix some bugs.... just as " + randFriend1.name + " starts to explain the finer points of  \"" + randFriend1.specialty + "\", " + zoms[0].name + " appears looking very sickly and awkwardly ambles into the room. Out of nowhere, " + zoms[0].name + " bites " + victims[0].name + " on the neck. ")
}

introScene()

function Location(name, img, actions){//location constructor
  this.name = name
  this.img = img
  this.actions = actions
}//Hannah: make a location index object with keys

var class3 = new Location(
  'Classroom 3',
  'http://s3-media4.fl.yelpcdn.com/bphoto/3_KhycVbw8DbUJUOjXmwpA/o.jpg',
  [runToLounge, runToHall, helpVictim0]
)
var lounge = new Location(
  'GA Lounge',
  'http://s3-media4.fl.yelpcdn.com/bphoto/_plEFiI6ph2EEdI3Z02ypA/o.jpg',
  [lookInClass1, runToHall]
)

var curLocation = class3//current location. locations should have a forward and backward linked location.

function curActions(){
  $('#input').empty()
  for (var i = 0; i < defaultActions.length; i++) {
      $("<div>" + defaultActions[i].name + "</div>").appendTo('#input').on('click', defaultActions[i].funct).removeClass().addClass('select')
  }
  for (var i = 0; i < curLocation.actions.length; i++) {
    $("<div>" + curLocation.actions[i].name + "</div>").appendTo('#input').on('click', curLocation.actions[i].funct).removeClass().addClass('select')
  }
}

function rollCall(){
  $("<div><h3>Survivors</h3>" + survivors() + "</div>").appendTo('#rollcall')
  $("<div><h3>Zombies</h3>" + zombies() + "</div>").appendTo('#rollcall')
}
$('#status h2').html(hero.name)

function showLocation() {$('#displayBox').css('background-image', 'url(' + curLocation.img + ')')
}
function showHP(){
  $('#hp').html('HP: ' + hero.hp)
}

function initScreen(){
  showLocation()
  showHP()
  curActions()
  rollCall()
}

initScreen()



function buttonStyle(){$('.select').click(function() {
    $(this).addClass('clicked')
  }).mouseleave(function() {
    $(this).removeClass('clicked')
  });
}
buttonStyle()

var punchText = [
  'You punch ' + enemy.name + ' in the mouth. this causes ' + randFriend().name + ' to scream in horror!',
  'You try to punch ' + enemy.name + ' but you miss and ' + enemy.name + ' charges at you. Luckily ' + randFriend().name + ' quickly finishes a git commit and hits ' + enemy.name + '!',
  'You go to punch ' + enemy.name + ', but you miss. ' + enemy.name + ' groans and claws at ' + randFriend().name + ', who smashes a MacBook Air over ' + enemy.name + '\'s already rotting head.'
  ]
function randFriend() {
 return friends[randNum(0, friends.length-1)]
}

function hideScreen(){$('#playscreen').hide()}

function newLoc(){
    // checkLoc
    // checkHero
    // pickEnemy?
    // pickVictim?
    // rollCall()
    // initScreen(loc actions)
    // textintro
    //  choice- escape to next location or fight?
    // rollcall again
    // loop{
    //   playerturn
    //     prompt
    //     actions
    //     summary/result
    //     check win/lose
    //   enemyturn
    //     update/result
    //     check win/lose
    // }
    // lose exit
    // win -> draw choose next location
    // next location generates battle

}

/*function changeLoc(){
  $('#displayBox').css("background-image", "url('http://s3-media4.fl.yelpcdn.com/bphoto/_plEFiI6ph2EEdI3Z02ypA/o.jpg')")
}*/


