//display-only text box

var textBox = document.getElementById("text-box")

//var clickedLetter = 
function onButtonClick(clickedLetter) {
    textBox.innerHTML += clickedLetter

}

function onPlayButtonClick(clickedLetters) {
    alert(textBox.innerHTML)
}


//have to put variable name as an argument
/*
First class citizen: anything that can be put in a var
keyword: use to make something special happen in code, ex: if, else, while, for NOT FIRST CLASS CITIZEN! 
- can not put a while or a for loop in a variable, put a for loop in a function, then a function in a variable!!!
*/


function createButtonRow(numButtons) {
    var row = ""
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (var i = 1; i <= numButtons; i++) {
        var letterToDisplay = letters[(Math.floor(Math.random() * 26))]
        var m = 'm'
        button = `<button onclick="onButtonClick('${letterToDisplay}')">${letterToDisplay}</button>`
        row = row + button
    }
    var jennyGrid = document.getElementById("jenny-grid")
    jennyGrid.innerHTML += row + "<br/>"
}

var numRows = 3
var numColumns = 3


for (var i = 1; i <= numRows; i++) {
    createButtonRow(numColumns)
}

