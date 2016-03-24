// define functions
function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll() {
  return randNum(0, 100)
}

//hide feedback texts
$('.attack').hide()
$('.effect').hide()
$('#displayMessage').hide()

function focusText(){//hide ui elements
  $('#bottom').hide()
  $('#status').hide()
}
focusText()

$('#whole').hide()

// choose name
var hero = {
  name: prompt("What is your name?"),
  hp: 100,
  bitten: false
}

$('#whole').fadeIn(3000)

// //intro
var introText = "Intro text to game."

// show intro text and location
var class3 = {
  name: 'Classroom 3',
  img: 'assets/class3.jpg',
  actions: 'checkBackpack'
}

var lounge = {
  name: 'Lounge',
  img: 'assets/lounge.jpg',
  actions: 'checkClassroom1'
}

var hall = {
  name: 'Hallway',
  img: 'assets/hall.jpg',
  actions: 'check Akido Lab'
}

var locat = class3

function showLocation() {$('#displayBox').css('background-image', 'url(' + locat.img + ')')
}

showLocation()

$('#prompt').html(introText)

// make continue button event handler
var nextHandler
$('#next').on('click', function(){
  nextHandler()
})

function initBattle(){console.log('initBattle')}
nextHandler = initBattle


//vars:
//  hero - done
  //   location/actions
var friends = [
  {name: 'Kedar', gender: 'm', equip: 'marker', specialty: 'basketball'},
  {name: 'Hannah', gender: 'f', equip: 'ruby book', specialty: 'political conversation'},
  {name: 'Jon', gender: 'm', equip: 'nunchuk', specialty: 'banking'},
  {name: 'Noah', gender: 'm', equip: 'coffee cup', specialty: 'dad jokes'},
  {name: 'Max', gender: 'm', equip: 'Monster Drink', specialty: 'Spinning phat beatz'},
  {name: 'Marcos', gender: 'm', equip: 'Spongebob doll', specialty: 'getting money'},
  {name: 'Angie', gender: 'f', equip: 'purse', specialty: 'making things pretty'},
  {name: 'Brigette', gender: 'f', equip: 'taco', specialty: 'eating tacos'},
  {name: 'Andrew', gender: 'm', equip: 'pair of Beats headphones', specialty: 'cyber security'},
  {name: 'A.J.', gender: 'm', equip: 'marker', specialty: 'laughter'},
  {name: 'Carlos A.', gender: 'm', equip: 'pack of smokes', specialty: 'futbol'},
  {name: 'Arvin', gender: 'm', equip: 'pillow', specialty: 'MMA'},
  {name: 'Victor', gender: 'm', equip: 'portal gun', specialty: 'the fifth doctor'},
  {name: 'Trevor', gender: 'm', equip: 'Richard Feynman biography', specialty: 'theoretical physics'},
  {name: 'Joseph', gender: 'm', equip: 'container of cookies', specialty: 'DIY stuff'},
  {name: 'Martin', gender: 'm', equip: 'javascript book', specialty: 'blackjack'},
  {name: 'Carlos B.', gender: 'm', equip: 'pair of sunglasses', specialty: 'acting'},
  {name: 'Timmy', gender: 'm', equip: 'vaporizer', specialty: 'violin performance'},
  {name: 'JoBeth', gender: 'f', equip: 'colorful MacBook', specialty: 'Filipino culture'}
//machete, axe, chainsaw, nunchuk, crowbar,
]
  //   friends
  function randFriend() {
 return friends[randNum(0, friends.length-1)]
}
  //remove hero from friends array
for (var i = 0; i < friends.length; i++) {
  if (friends[i].name.toLowerCase() === hero.name.toLowerCase()){
    console.log('You are ' + friends[i].name); friends.splice(i, 1);
  }
}
//  choose zoms/enemy
var zoms = friends.splice(randNum(0, friends.length-1), 1)
var enemy = zoms[zoms.length-1]
enemy.name = 'Zombie ' + enemy.name
enemy.hp = 30

//   victims
var victims = friends.splice(randNum(0, friends.length-1), 1)
victim = victims[0]

//   roll call
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
  //define feedbacks/ effects
function posFeedback(text){
  $('.attack').css('color', 'green')
  $('.attack').toggle(50).html(text)
  setTimeout(function(){$('.attack').fadeOut(1000)}, 3000)
}
function negFeedback(text){
  $('.attack').css('color', 'red')
  $('.attack').toggle(50).html(text)
  setTimeout(function(){$('.attack').fadeOut(1000)}, 3000)
}

function subFeedback(text){
  setTimeout(function(){$('.effect').toggle(500).html(text)}, 1000)
  setTimeout(function(){$('.effect').fadeOut(1000)}, 3000)
}

function playerHit(num){
  hero.hp =- num
}

function enemyHit(num){
  enemy.hp =- num
}
  //   action functions and results

var attackText = [
  'You punch ' + enemy.name + ' in the mouth. this causes ' + randFriend().name + ' to scream in horror!',
  'You take a swing at ' + enemy.name + ', but you miss and ' + enemy.name + ' charges at you. Luckily ' + randFriend().name + ' quickly finishes a git commit and kicks ' + enemy.name + '!',
  'You go to punch ' + enemy.name + ', but you miss. ' + enemy.name + ' groans and claws at ' + randFriend().name + ', who smashes a MacBook Air over ' + enemy.name + '\'s already rotting head.'
  ]

var attack = {
  name: 'attack ' + enemy.name,
  text: attackText[randNum(0, attackText.length-1)],
  funct: function(){
    var dmg = randNum(5,15)
    enemy.hp -= dmg
    posFeedback('hit ' + enemy.name)
    subFeedback(-dmg)
  },
}

// select bite version (hit, fail, or miss)
function biteRoll(){
  rolled = roll()
  if(rolled > 90)
    return 0
  else if (rolled < 30)
    return 1
  else
    return 2
}

var biteHit = {
  name: 'bite',
  text: 'you have been bitten by ' + enemy.name + '. You have moments before you will turn into a zombie.',
  funct: function(){
    var dmg = randNum(5,15)
    hero.hp -= dmg
    negFeedback(enemy.name + 'bites you!')
    subFeedback(-dmg)
  }
}

var biteFail = {
  name: 'bite',
  text: enemy.name + 'bites at you. you aren\'t bitten but stumble over ' + randFriend().name + ' and hurt yourself.',
  funct: function(){
    var dmg = randNum(5,15)
    hero.hp -= dmg
    negFeedback('You Stumble')
    subFeedback(-dmg)
  }
}

var biteMiss = {
  name: 'bite',
  text: enemy.name + ' lunges, trying to bite you, but ' + randFriend().name + ' throws a chair at ' + enemy.name,
  funct: function(){
      posFeedback(enemy.name + ' misses.')
      subFeedback('You got lucky!')
  }
}

var biteVersions = [biteHit, biteFail, biteMiss]
var bite = biteVersions[biteRoll()]



  //   win condition functions and results
function loseCheck(){
  if(hero.hp < 1){
    introUpdate(enemy.name + ' has Killed you. You are dead.')
    $('#next').html('play again?')
  }
}
function winCheck(){
  if(enemy.hp < 1){
    update(enemy.name + '\'s head explodes.')
    $('#enemyName').fadeOut(4000)
    $('#enemyHP').fadeOut(4000)
  }
}

  // on continue button click:

//start round 1
  // checks: hero, location, enemy, rollcall, special.
  // draw actions, status, rollcall, location, text


// player turn:
  // update text box with action prompt.
  // player chooses action (click):
  //   action happens:
  //     display text, w next button
  //     on click, calc dmg, etc.
  //     display hit feedback
  //     update status
  //     check for loss, check for win
  // enemy chooses ( display enemy "prompt")
  //   action happens:
  //     disply text, w next button
  //     on click, calc dmg, etc.
  //     display hit feedback
  //     update status
  //     check for loss, check for win
  //     loop-->player turn

// if lose:
//   update loss text with animation
//   button to play again

// if win: check for victim var
//     display victim text (either win or lose)
//    update win text, with location button
//
//    on click:

// start next round/location:
  //checks: hero, location, enemy, rollcall, special.
  //draw actions, status, rollcall, location, text

  //etc.

  //boss fight with grant -??

//final location: after win:
  //display final win text. summary button

  //summary button clicked:
    //display final game stats. "play again" button


















