let colorSelected;

//Adds a row to the grid
function addRow() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    //If the grid is empty, creates a row
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };

        row.appendChild(col);
        grid.appendChild(row);
    //Otherwise, appends a new row with the current number of columns
    } else {
        let numCols = rows[0].childElementCount;
        let row = document.createElement("tr");
        for (let i = 0; i < numCols; i++){
            let col = document.createElement("td");
            col.onclick = function(){
                this.style.backgroundColor = colorSelected;
            };
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

//Adds a column to the grid
function addCol() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    } else {
        for (let i = 0; i < rows.length; i++){
            let col = document.createElement("td");
            col.onclick = function(){
                this.style.backgroundColor = colorSelected;
            };
            rows[i].appendChild(col);
        }
    }
}

//Removes a row
function remRow() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    
    if(rows.length === 0){
        alert("There is nothing to delete.");
        return;
    }
    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
}

//Removes a column
function remCol() {
    let rows = document.getElementsByTagName("tr");
    let grid = document.getElementById("grid");

    if(rows.length === 0){
        alert("There is nothing to delete.");
        return;
    }
    if(rows[0].childElementCount === 1) {
        grid.innerHTML = "";
        return;
    }
    for (let i = 0; i < rows.length; i++){
        let col = rows[i].lastElementChild;
        rows[i].removeChild(col);
    }
}

//Sets the global variable for the selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColor").value;
}

//Fills all cells with the selected color
function fill(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colorSelected;
    }
}

//Clears all cells of color
function clearAll(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "";
    }
}

//Fills only uncolored cells with the selected color
function fillUncolored(){
    let cells = document.getElementsByTagName("td");

    for (let i = 0; i < cells.length; i++){
        if (cells[i].style.backgroundColor === "") {
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}