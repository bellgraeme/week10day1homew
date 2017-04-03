

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

// My name is Keith

score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

// 3

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

//Suspects include: Jay, Val, Harvey, Rick

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// Suspect three is: Keith



var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

// Poirot



var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

//the murderer is rickx


