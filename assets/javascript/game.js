
// Variables
//******************************//
var numberOfGuesses = 7;
var userGuess;
var guessLog = [];
var answer = ["test", "testing", 'testarray', 'goat', 'beholder', 'cyclops', 'goblin'];
var letterArray = [];
var winLength = 0;
var wins= 0;
var validLetter = ["a", 'b','c','d','e','f','g','h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// Declaring Functions
//******************************//

function startRoll(){

  reset();
  document.getElementById("letter").innerHTML = "";
  document.getElementById("guesses").innerHTML = "";
  letterArray = [];
  guessLog = [];
  winLength = 0;
  numberOfGuesses = 7;
  document.querySelector("#guessesLeft").innerHTML = "Guesses Remaining: " + numberOfGuesses;
  var word = answer[Math.floor((Math.random() * answer.length))]; 
  console.log(word);
  for (var i=0; i < word.length; i++){
  letterArray.push(word.charAt(i));}
  createLetters();
}

function createLetters(){
for (var j = 0; j <letterArray.length; j++){
  var div = document.createElement('div');
  div.setAttribute("id", "letterz"+ j);
  div.className = "letterz";
  var z = (document.createTextNode(letterArray[j]));
  div.appendChild(z);
  document.getElementById("letter").appendChild(div);
  // console.log(letterArray[j]);
}}
function reset(){
  var reset = document.querySelectorAll('.letterz');
  for ( var r =0; r < reset.length; r++){
    console.log(reset[r]);
    reset[r].parentNode.removeChild(reset[r]);
  }
}

function display(){
  for(var h = 0; h < letterArray.length; h++){
    if(userGuess == letterArray[h]){
      document.getElementById("letterz"+ h).style.color = "black";
      winLength++;
    }
}}


function updateGuesses(){
  if (numberOfGuesses === 0){
    alert("Game over."); }
 else if (winLength >= letterArray.length){
    wins++;
    alert('You win!');
    winLength = 0;
    document.querySelector("#wins").innerHTML = "Monsters Slain: " + wins;
  }}


// Main Process
//******************************//


document.onkeyup = function(guess) {
  userGuess = guess.key.toLowerCase();
  if (guessLog.indexOf(userGuess) > -1 || winLength >= letterArray.length || numberOfGuesses === 0|| validLetter.indexOf(userGuess) === -1){
    return;
  }
  else {
    var node =document.createTextNode(userGuess+ ", ");
    var element = document.getElementById("guesses");
    element.appendChild(node);
    guessLog.push(userGuess);}

  if (letterArray.indexOf(userGuess) === -1) {
    numberOfGuesses--;
    document.querySelector("#guessesLeft").innerHTML = "Guesses Remaining: " + numberOfGuesses;
    updateGuesses();
  }
  else if (letterArray.indexOf(userGuess) > -1) {
    display();
    console.log(winLength);
    console.log(letterArray.length);
    updateGuesses();
  }
}


