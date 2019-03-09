function createButtonRow(numButtons) {
    var row = ""
    for (var i = 1; i <= numButtons; i++) {
        button = "<button>" + i + "</button>"
        row = row + button
    }
    var contentDiv = document.getElementById("jenny-grid")
    contentDiv.innerHTML += row + "<br></br>"
}

var numRows = 3
var numColumns = 3

for (var i = 1; i <= numRows; i++) {
    createButtonRow(numColumns)
}