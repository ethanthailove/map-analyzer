// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById("currentTile");

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
  if (column >= 5) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level2Solution() {
  if (column >= 8) {
    tile.innerHTML = "WATER";
  } else if (column >= 3) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "TREES";
  }
}

function level3Solution() {
  if (column >= 8 && column <= 2) {
    tile.innerHTML = "TREES";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level4Solution() {
  if (row <= 2) {
    tile.innerHTML = "TREES";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level5Solution() {
  if (row <= 2) {
    tile.innerHTML = "TREES";
  } else if (row <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level6Solution() {
  if (row >= 2 && row <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level7Solution() {
  if (column == 7 && row == 4) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level8Solution() {
  if (row == 5 || column == 2) {
    tile.innerHTML = "TREES";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level9Solution() {
  if (row <= 5 && column <= 5) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level10Solution() {
  if (column <= 1) {
    tile.innerHTML = "HILLS";
  } else if (column < 4) {
    tile.innerHTML = "TREES";
  } else if (column < 8) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level11Solution() {
  if (row <= 3 && column <= 5) {
    tile.innerHTML = "WATER";
  } else if (row <= 3 && column >= 6) {
    tile.innerHTML = "HILLS";
  } else if (row >= 4 && column <= 5) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "TREES";
  }
}

function level12Solution() {
  if ((row <= 4 && column <= 5) || (column >= 6 && row >= 5)) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level13Solution() {
  if (row <= 5 && row >= 2 && column >= 4 && column <= 9) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "TREES";
  }
}

function level14Solution() {
  if (row >= 1 && row <= 5 && column >= 1 && column <= 4) {
    tile.innerHTML = "TREES";
  } else if (row >= 3 && row <= 5 && column >= 7 && column <= 10) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}
