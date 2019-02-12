
// Variables
//******************************//
var numberOfGuesses = 7;
var userGuess;
var guessLog = [];
var randomSelector = 1;
var letterArray = [];
var winLength = 0;
var wins= 0;
var validLetter = ["A", 'B','C','D','E','F','G','H', 'I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var word= "";
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
  // there is 325 monsters in the database so this selects a random number to search for one.
  randomSelector = Math.floor((Math.random() * 325)) + 1; 
  dndAPI();

}

function dndAPI() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var monster = JSON.parse(this.responseText);
      
      word = monster.name.toUpperCase();
      
      for (var i=0; i < word.length; i++){
        letterArray.push(word.charAt(i));}
        createLetters();
    }
  };
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters/" + randomSelector +"/", true);
  xhttp.send();
}



function createLetters(){
for (var j = 0; j <letterArray.length; j++){
  if (letterArray[j]=== " "){
    letterArray.splice(j, 1)
      var d = document.createElement('div');
      d.className = "space";
      document.getElementById("letter").appendChild(d);
    };
  
  var div = document.createElement('div');
  div.setAttribute("id", "letterz"+ j);
  div.className = "letterz rounded";
  var z = (document.createTextNode(letterArray[j]));
  div.appendChild(z);
  document.getElementById("letter").appendChild(div);
}};
function reset(){
  var reset = document.querySelectorAll('.letterz');
  for ( var r =0; r < reset.length; r++){
   
    reset[r].parentNode.removeChild(reset[r]);
  }
}

function display(){
  for(var h = 0; h < letterArray.length; h++){
    if(userGuess === letterArray[h]){
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
  userGuess = guess.key.toUpperCase();
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
    updateGuesses();
  }
}


