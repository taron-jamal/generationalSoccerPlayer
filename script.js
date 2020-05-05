
// Root Scope Example:

var goatSoccerPlayer = "Franz Beckenbauer";

function generationalSoccerPlayer1() {
  // child scope
  var goatSoccerPlayer = "Lionel Messi";
  console.log(1, goatSoccerPlayer);
}


function generationalSoccerPlayer2() {
  // child scope
  var goatSoccerPlayer = "Diego Maradona";
  console.log(2, goatSoccerPlayer);
}


function generationalSoccerPlayer3() {
  // child scope
  goatSoccerPlayer = "Pele";
  console.log(3, goatSoccerPlayer);
}

console.log("window", goatSoccerPlayer);

generationalSoccerPlayer1();
generationalSoccerPlayer2();
generationalSoccerPlayer3();


console.log(goatSoccerPlayer);
// Output: window Franz Beckenbauer
  // 1 "Lionel Messi"
  // 2 "Diego Maradona"
  // 3 "Pele"
  // Pele
