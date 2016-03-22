console.log("linked")


function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hero = {
  name: prompt("What is your name?"),
  hp: 100,
  actions: ['Run', 'Fight'],
  mood: 'in shock',
  effects: 'none',
  //equipped: [pen, computer, backpack, waterBottle]
}

var friends = [
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

console.log(friends.length)

for (var i = 0; i < friends.length; i++) {
  if (friends[i].name.toLowerCase() === hero.name.toLowerCase()){
    console.log("splicing" + friends[i].name); friends.splice(i, 1);
  }
}

function Location(name, events, loot, nextLoc, prevLoc, img){
  this.name = name
  this.events = events
  this.loot = loot
  this.nextLoc = nextLoc
  this.prevLoc = prevLoc
  this.img = img
}//Hannah: make a location index object with keys
var class3 = new Location('Classroom 3', ['panic', 'freakout', 'faint'], 'power strip', 'lounge', 'na', 'http://s3-media4.fl.yelpcdn.com/bphoto/3_KhycVbw8DbUJUOjXmwpA/o.jpg')
var lounge = new Location('GA Lounge', ['UX Mob', 'savior', 'leader'], 'coffee maker', 'hallway', 'Classroom 3', 'http://s3-media4.fl.yelpcdn.com/bphoto/_plEFiI6ph2EEdI3Z02ypA/o.jpg')
/*{id: 'class2'},  possible locations
{id: 'class1'},
{id: 'hall'},
{id: 'elevator'},
{id: 'lobby'},
{id: 'gaParking'},
{id: 'broadway'},
{id: 'hill'},
{id: 'metroStop'},
{id: 'busStop'},
{id: 'onBus'},
{id: 'inCar'},
{id: 'driving'},
{id: 'onTrain'},
{id: 'busRide'},
{id: 'trainRide'},
{id: 'union'},
{id: 'unionParking'},
{id: 'neightborSt'},
{id: 'yourSt'},
{id: 'yourHome'},*/

var curLocation = lounge //current location. locations should have a forward and backward linked location.


var zoms = friends.splice(randNum(0, friends.length-1), 1) // any friends that have been bitten, starts with zoms[0]

var status
var inventory
var party
var objective
var equipped

var screen
var journalScreen
var log





var events = [
{id: 'zombie'},
{id: 'friendBitten'},
{id: 'meet'}
]

var inCombat = false
var inConvo = false

function setup(){
  //ask name
  //ask address
  //ask computer type
  //ask apt? house? condo?
  //
}

function initScreen(){
  $('#status h2').html(hero.name)
  $('#hp').html('HP: ' + hero.hp)
  $('#effects').html('Effects: ' + hero.effects)
  $('#mood').html('Mood: ' + hero.mood)
  $('#display').css('background', 'url(' + curLocation.img + ')')
}

initScreen()



function update(text){
  $('#prompt').html(text)
}

function introText(){
  update("You are working on bugs... you look up as a decaying WDI 8 student awkwardly ambles into the room and bites " + zoms[0].name + " on the neck. ")
}

introText()

/*function changeLoc(){
  $('#display').css("background-image", "url('http://s3-media4.fl.yelpcdn.com/bphoto/_plEFiI6ph2EEdI3Z02ypA/o.jpg')")
}*/

var actions = [ 'run to lounge', 'run to hallway', 'help ' + zoms[0].name, 'cry'
]

function makeActionButtons(arr){
  for (var i = 0; i < arr.length; i++) {
    $("<div>" + arr[i] + "</div>").appendTo('#input')
  }

}

makeActionButtons(actions)



//select computer
//select best friend
//sselect

//thoughts:
/*
Classmates/teachers as party
story based on if zombie apocalypse happened here.

2 versions: zombie apocalypse and coding challenges.



*/
