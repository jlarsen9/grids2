// a = b (replaces the whole thing)
// a = a + b (appends it to the old thing)


// function getElementById(someString) {
//     //doos stuff
//     return foo
// }



// ----------
// if (i % 2 === 0) {
//     console.log(plum)
// }
// necklace += bead1  IS THE SAME AS necklace = necklace + bead1

// 

//

CREATE BUTTON ROW ASSIGNMENT:

function createButtonRow() {
    var necklace = ""
    for (var i = 1; i < 6; i++) {
        // 1. build a bead
        bead1 = "<button>" + i + "</button>"
        // 2. put bead on neckalce
        necklace = necklace + bead1
    }

    console.log(necklace)
    var contentDiv = document.getElementById("content")
    contentDiv.innerHTML += necklace
}

createButtonRow()
createButtonRow()


/*
Cretes a row of buttons
@params: numButtons (number) - the number of buttons to create
*/
function createButtonRow(numButtons) {
    var row = ""
    for (var i = 1; i <= numButtons; i++) {
        button = "<button>" + i + "</button>"
        row = row + button
    }
    var contentDiv = document.getElementById("content")
    contentDiv.innerHTML += row + "<br></br>"
}


var numRows = 4
var numColumns = 3

for (var i = 1; i <= numRows; i++) {
    createButtonRow(numColumns)
}

/**
 * 
GIT STUFF
git add . --all
git commit -m "built a basic table"
git push -u origin master

git add . --all && git commit - m "first commit" && git push - u origin master
*/