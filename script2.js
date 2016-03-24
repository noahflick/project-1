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

// choose name
var hero = {
  name: prompt("What is your name?"),
  hp: 100,
}


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
  //remove hero from friends array
for (var i = 0; i < friends.length; i++) {
  if (friends[i].name.toLowerCase() === hero.name.toLowerCase()){
    console.log('You are ' + friends[i].name); friends.splice(i, 1);
  }
}
  //  choose zoms/enemy
  //   victims
  //   roll call
  //   action functions and results
  //   win condition functions and results


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


















