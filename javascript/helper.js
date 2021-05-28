function computeCursorPosition(pos) {
  var canvasRect = canvas.getBoundingClientRect();

  var x = pos.clientX - canvasRect.left;
  var y = pos.clientY - canvasRect.top;

  return new Point(x, y);
}

function deal() {
  if (deck.length == 0) {
    recoverDealPile();
    return;
  }

  var dealSize = getDealSize();

  dealPile.unspreadCards();
  dealPile.push(deck.popFromIndex(deck.length - dealSize));

  if (dealType == TRIPLE_DEAL) {
    dealPile.spreadTopCards(dealSize);
  }
}

function getDealSize() {
  var dealSize = 0;
  while (dealSize < 3 && dealSize < deck.length) {
    dealSize++;

    if (dealType == SINGLE_DEAL) {
      break;
    }
  }

  return dealSize;
}

function recoverDealPile() {
  dealPileInitialLength = dealPile.length;
  for (var i = 0; i < dealPileInitialLength; i++) {
    deck.push(dealPile.pop(), FACE_DOWN);
  }
}

function recoverAllCards() {
  for (var i = 0; i < locations.length; i++) {
    deck.push(locations[i].popFromIndex(0), FACE_DOWN);
  }
}

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

function Point(x, y) {
  this.x = x;
  this.y = y;
}
