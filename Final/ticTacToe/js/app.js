var grid;
var gridSize = 500;
var turn = 1;
var win = 0;
var moves = 0;
var result = 0;

//the variables used within the program

function setup() {
  createCanvas(gridSize + 1, gridSize + 1);
  noLoop();
}

//creates a non-looping grid made for tictactoe

function draw() {
  turn = 1;
  win = 0;
  moves = 0;
  result = 0;

  //redefines variables so that game may be replayed after game is reset by player

  grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  //sets grid sections to zero so player input is enabled

  rect(0, 0, gridSize, gridSize);
  line(gridSize / 3, 0, gridSize / 3, gridSize);
  line((2 * gridSize) / 3, 0, (2 * gridSize) / 3, gridSize);
  line(0, gridSize / 3, gridSize, gridSize / 3);
  line(0, (2 * gridSize) / 3, gridSize, (2 * gridSize) / 3);

  //creates the grid that seperates the sections that players will interact with.
}

function mousePressed() {
  if (!win) {
    var pos = detectBox(mouseX, mouseY);
    if (pos) {
      if (grid[pos[0] - 1][pos[1] - 1] == 0) {
        turn = 1 - turn;
        grid[pos[0] - 1][pos[1] - 1] = turn + 1;
        drawMove(pos, turn);
        moves++;
        if (checkWin()) {
          win = 1;
        }
        //identifies the section clicked on by the player then defines if a winning result has been achieved or if the square has already been clicked on
      }
    }
  } else if (win == 1) {
    if (skipMousePress() && result == 0) {
      fill(0, 0, 0);
      rect(0, 0, gridSize, gridSize);
      fill(255, 255, 255);
      textSize(gridSize / 14);
      text("Player " + str(turn + 1) + " Won", gridSize / 6, gridSize / 3);

      textSize(gridSize / 14);
      text(
        "( Click to continue... )",
        gridSize / 6 - gridSize / 48,
        gridSize / 3 + gridSize / 6
      );
      result = 1;
    } else if ((result = 1)) {
      redraw();
    }
    //checks all sections of the grid and if a winning result has been identified the game will say the player whose turn it was has one.
  } else {
    if (skipMousePress() && result == 0) {
      fill(0, 0, 0);
      rect(0, 0, gridSize, gridSize);
      fill(255, 255, 255);
      textSize(gridSize / 14);
      text("Match Draw!", gridSize / 6, gridSize / 3);

      textSize(gridSize / 14);
      text(
        "( Click to continue... )",
        gridSize / 6 - gridSize / 48,
        gridSize / 3 + gridSize / 6
      );

      result = 1;
    } else if ((result = 1)) {
      redraw();
    }
  }
}
//checks all sections of the grid and if no winning result has been met then the game will display that it has ended with a draw

function detectBox(x, y) {
  pos = [99, 99];

  if (x > 0 && x < gridSize / 3) {
    //first column
    pos[0] = 1;
  } else if (x > gridSize / 3 && x < (2 * gridSize) / 3) {
    //second column
    pos[0] = 2;
  } else if (x > (2 * gridSize) / 3 && x < gridSize) {
    //third column
    pos[0] = 3;
  }

  if (y > 0 && y < gridSize / 3) {
    //first column
    pos[1] = 1;
  } else if (y > gridSize / 3 && y < (2 * gridSize) / 3) {
    //second column
    pos[1] = 2;
  } else if (y > (2 * gridSize) / 3 && y < gridSize) {
    //third column
    pos[1] = 3;
  }

  return pos[0] == 99 || pos[1] == 99 ? undefined : pos;
}
//allows grid to reset upon user rest

function drawMove(pos, player) {
  player ? fill(0, 0, 0) : fill(255, 255, 255);
  ellipse(
    (pos[0] * gridSize) / 3 - gridSize / 6,
    (pos[1] * gridSize) / 3 - gridSize / 6,
    gridSize / 6,
    gridSize / 6
  );
} //switch between the players turns and fills either a empy circle or a filled circle.

function checkWin() {
  for (i = 0; i < 3; i++) {
    if (grid[0][i] == grid[1][i] && grid[0][i] != 0) {
      if (grid[1][i] == grid[2][i]) {
        stroke(50);
        line(
          0 + gridSize / 24,
          ((i * 2 + 1) * gridSize) / 6,
          gridSize - gridSize / 24,
          ((i * 2 + 1) * gridSize) / 6
        );
        return grid[0][i];
      }
    }
  }
  //puts a line through the circles that are three in a row

  for (i = 0; i < 3; i++) {
    if (grid[i][0] == grid[i][1] && grid[i][0] != 0) {
      if (grid[i][1] == grid[i][2]) {
        line(
          ((i * 2 + 1) * grid) / 6,
          0 + grid / 24,
          ((i * 2 + 1) * grid) / 6,
          grid - grid / 24
        );
        return grid[i][0];
      }
    }
  }
  //puts a line through the circles that are three in a row

  for (i = 0; i < 3; i++) {
    if (grid[i][0] == grid[i][1] && grid[i][0] != 0) {
      if (grid[i][1] == grid[i][2]) {
        line(
          ((i * 2 + 1) * grid) / 6,
          0 + grid / 24,
          ((i * 2 + 1) * grid) / 6,
          grid - grid / 24
        );
        return grid[i][0];
      }
    }
  }
  //watches if certain sections have the same circle in a row

  if (grid[0][0] == grid[1][1] && grid[0][0] != 0) {
    if (grid[1][1] == grid[2][2]) {
      line(
        0 + gridSize / 12,
        gridSize / 12,
        (11 * gridSize) / 12,
        (11 * gridSize) / 12
      );
      return grid[0][0];
    }
  }
  //watches if certain sections have the same circle in a row

  if (grid[0][2] == grid[1][1] && grid[0][2] != 0) {
    if (grid[1][1] == grid[2][0]) {
      line(
        (11 * gridSize) / 12,
        0 + gridSize / 12,
        gridSize / 12,
        (11 * gridSize) / 12
      );
      return grid[0][2];
    }
  }
  //watches if certain sections have the same circle in a row

  if (moves == 9) {
    win = 2;
  }
}
//helps game identify a tie

var mousePresses = 0;
function skipMousePress() {
  mousePresses++;
  if (mousePresses > 0) {
    mousePresses = 0;
    return true;
  }
  return false;
}
//allows the player to reset the game
