
// Variables
//******************************//
var numberOfGuesses = 7;
var userGuess;
var guessLog = [];
var answer = ["test", "testing", 'testarray'];
var letterArray = [];
var winLength = 0;
var wins= 0;
var validLetter = ["a", 'b','c','d','e','f','g','h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// Declaring Functions
//******************************//
function startRoll(){
  
 
// var reset = document.getElementById("letter");
// reset.removeChild(reset.getElementsByClassName("letterz"));

//  var reset =document.getElementById("letter");
//   reset.parentNode.removeChild(reset);

//  $("").on("click",function(){
// $("#letter").empty();
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
      console.log("show letter");
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

  function checkUserGuess(){
    if (guessLog)
    if(validLetter.indexOf(userGuess) === -1){
      alert("Please choose a letter.");
      return;}
    else {
      var node =document.createTextNode(userGuess);
      var element = document.getElementById("guesses");
      element.appendChild(node);}
  }

// Main Process
//******************************//


document.onkeyup = function(guess) {
  userGuess = guess.key.toLowerCase();
  if (guessLog.indexOf(userGuess) > -1 || winLength >= letterArray.length || numberOfGuesses === 0){
    return;
  }
  guessLog.push(userGuess);

  checkUserGuess();

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








// function renderWord() {
//   var i = Math.floor((Math.random() * answer.length) + 1);
//   var word = answer[i];
// renderWord()


// function renderQuestion() {
//   // If there are still more questions, render the next one.
//   if (questionIndex <= (questions.length - 1)) {
//     document.querySelector("#question").innerHTML = questions[questionIndex].q;
//   }
//   // If there aren't, render the end game screen.
//   else {
//     document.querySelector("#question").innerHTML = "Game Over!";
//     document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
//   }

// var userInput = event.key.toLowerCase();
//   x--;
//   y--;
//   i++;
// var y = x-1;
// var letter = word.substring(y,x);  
//   if(letter === " "){
//     document.getElementById('letter').innerHTML = "&nbsp;";
//     document.getElementById('letter').style.visibility ="hidden";
//     document.getElementById('letter').style.display = "block";
//     document.getElementById('underline').style.display = "block";
//     spaces++;   
//   }
//   else {
//     document.getElementById('letter').innerHTML = letter;
//     document.getElementById('letter').style.visibility ="hidden";
//     document.getElementById('underline').style.display = "block";
//     document.getElementById('underline').style.borderBottom = "3px solid black";
//   }
