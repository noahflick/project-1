console.log("linked")

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var hero = {
  name: 'Josh',
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

var curLocation = {} //current location. locations should have a forward and backward linked location.


var zoms = friends.splice(randNum(0, friends.length-1), 1) // any friends that have been bitten

var status
var inventory
var party
var objective
var equipped

var screen
var journalScreen
var log

var locations = [//Hannah: make a location index object with keys
{id: 'class3'},
{id: 'lounge'},
{id: 'class2'},
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
{id: 'yourHome'},
]


var events = [
{id: 'zombie'},
{id: 'friendBitten'},
{id: 'meet'}
]

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
}

initScreen()



function update(text){
  $('#prompt').html(text)
}

function introText(){
  update("You are working on bugs... you look up as a decaying WDI 8 student awkwardly ambles into the room and bites " + zoms[0].name + " on the neck. ")

}
introText()

function changeLoc(){
  $('#display').css("background-image", "url('http://s3-media4.fl.yelpcdn.com/bphoto/_plEFiI6ph2EEdI3Z02ypA/o.jpg')")
}

var actions = [ 'run to lounge', 'run to hallway', 'help ' + zoms[0].name, 'cry'
]

function makeActionButtons(arr){
  for (var i = 0; i < arr.length; i++) {
    $("<button>" + arr[i] + "</button>").appendTo('#input')
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
