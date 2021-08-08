/*  Program:    Minesweeper
    Developer:  Bart Verschooren
    Date:       06/08/2021
*/

// Declarations

var PlayingBord = {
    "A" : [0,0,0,0,0,0,0,0,0,0],
    "B" : [0,0,0,0,0,0,0,0,0,0],
    "C" : [0,0,0,0,0,0,0,0,0,0],
    "D" : [0,0,0,0,0,0,0,0,0,0],
    "E" : [0,0,0,0,0,0,0,0,0,0],
    "F" : [0,0,0,0,0,0,0,0,0,0],   
    "G" : [0,0,0,0,0,0,0,0,0,0],
    "H" : [0,0,0,0,0,0,0,0,0,0]
}

var myShot = [];
var intTotalBombs = 10
var notDead = true;
// Functions

function InitiateGame(){
    console.log("Welcone to minesweeper.\n");
    console.log("How many mines would you like to spawn (3-6)? ");
    
    // todo #5 write code for accepting input for game initialization


    myShot=[A,2];
}

function CheckTile(shotToCheck){

}

function CheckNeighbour(shotToChecky){

}

// And antion!

InitiateGame();


while (intTotalBombs > 0 && notDead){
    CheckTile(myShot);
    CheckNeighbour(myShot);
}


