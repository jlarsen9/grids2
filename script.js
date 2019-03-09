//display-only text box

var textBox = document.getElementById("text-box")
textBox.innerHTML = "game"



//grid js

function createButtonRow(numButtons) {
    var row = ""
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (var i = 1; i <= numButtons; i++) {
        var letterToDisplay = letters[(Math.floor(Math.random() * 26))]
        button = "<button>" + letterToDisplay + "</button>"
        row = row + button
    }
    var jennyGrid = document.getElementById("jenny-grid")
    jennyGrid.innerHTML += row + "<br></br>"
}

var numRows = 3
var numColumns = 4
createButtonRow(numColumns)


for (var i = 1; i <= numRows; i++) {
    createButtonRow(numColumns)
}

