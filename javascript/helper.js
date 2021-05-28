// get cursor position on the screen
function computeCursorPosition(pos) {
  let canvasRect = canvas.getBoundingClientRect();

  let x = pos.clientX - canvasRect.left;
  let y = pos.clientY - canvasRect.top;

  return new Point(x, y);
}

function deal() {
  if (deck.length == 0) {
    recoverDealPile();
    return;
  }

  let dealSize = getDealSize();

  dealPile.unspreadCards();
  dealPile.push(deck.popFromIndex(deck.length - dealSize));

  if (dealType == TRIPLE_DEAL) {
    dealPile.spreadTopCards(dealSize);
  }
}

function getDealSize() {
  let dealSize = 0;
  while (dealSize < 3 && dealSize < deck.length) {
    dealSize++;

    if (dealType == SINGLE_DEAL) {
      break;
    }
  }

  return dealSize;
}

//  generate deal cards
function recoverDealPile() {
  dealPileInitialLength = dealPile.length;
  for (let i = 0; i < dealPileInitialLength; i++) {
    deck.push(dealPile.pop(), FACE_DOWN);
  }
}

//  generate column cards
function recoverAllCards() {
  for (let i = 0; i < locations.length; i++) {
    deck.push(locations[i].popFromIndex(0), FACE_DOWN);
  }
}

// display cards on the screen
function render() {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  deck.draw();

  for (let i = 0; i < locations.length; i++) {
    locations[i].draw();
  }

  hand.draw();
}

// generates cards and displays them on the screen
function newGame() {
  recoverAllCards();

  deck.shuffle();

  deck.reverse();

  // Deal columns
  for (let i = 0; i < columns.length; i++) {
    for (let j = 0; j < i; j++) {
      columns[i].push(deck.pop(), FACE_DOWN);
    }

    columns[i].push(deck.pop());
  }

  render();
}

// util function
function Point(x, y) {
  this.x = x;
  this.y = y;
}
