// Rendering.
function render() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  deck.draw();

  for (var i = 0; i < locations.length; i++) {
    locations[i].draw();
  }

  hand.draw();
}

// New game.
function newGame() {
  recoverAllCards();

  deck.shuffle();

  deck.reverse();

  // Deal columns
  for (var i = 0; i < columns.length; i++) {
    for (var j = 0; j < i; j++) {
      columns[i].push(deck.pop(), FACE_DOWN);
    }

    columns[i].push(deck.pop());
  }

  render();
}
