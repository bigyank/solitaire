function Point(x, y) {
  this.x = x;
  this.y = y;
}

// Event listeners.
game.addEventListener("mousedown", function mouseDownOnCanvas(pos) {
  hand.setPos(computeCursorPosition(pos));

  if (deck.detectClicks()) {
    SUFFEL_SOUND.play();
    deal();
  } else {
    // Scan locations for clicks.
    // Transfer cards to hand if pickup detected.
    for (var i = 0; i < locations.length; i++) {
      var clickIndex = locations[i].detectClicks();

      if (clickIndex > -1) {
        hand.push(locations[i].popFromIndex(clickIndex));
        hand.pickupLocation = i;
        break;
      }
    }
  }

  render();
});

document.addEventListener("mouseup", function mouseUpOnCanvas(pos) {
  hand.setPos(computeCursorPosition(pos));

  if (hand.length > 0) {
    var dropOK = false;
    var bottomCardInHand = hand[0];

    // Scan locations for drops, perform drop if detected.
    // Deal pile (location 0) does not accept drops, so scan begins at location 1.
    for (var i = 1; i < locations.length; i++) {
      if (
        locations[i].detectDrops(bottomCardInHand) &&
        locations[i].validateDrop(bottomCardInHand)
      ) {
        locations[i].push(hand.popFromIndex(0));
        dropOK = true;
        if (dropOK) {
          DRAW_SOUND.play();
        }
        break;
      }
    }

    // If drop unsuccessful, return cards to pickup location.
    if (!dropOK && hand.pickupLocation > -1) {
      locations[hand.pickupLocation].push(hand.popFromIndex(0));
    }
  }

  render();
});

// drag and drop
document.addEventListener("mousemove", function mouseMoveOnCanvas(pos) {
  hand.setPos(computeCursorPosition(pos));

  render();
});

// Initialization.
function init() {
  deck = new Deck(10, 10, DECK_RESET);

  dealPile = new DealPile(160, 10);

  winPiles = [
    new WinPile(460, 10, SPADES, WIN_PILE_MARKER_SPADES),
    new WinPile(610, 10, CLUBS, WIN_PILE_MARKER_CLUBS),
    new WinPile(760, 10, HEARTS, WIN_PILE_MARKER_HEARTS),
    new WinPile(910, 10, DIAMONDS, WIN_PILE_MARKER_DIAMONDS),
  ];

  // create card columns
  columns = [];
  for (let index = 10; index <= 910; index += 150) {
    columns.push(new Column(index, 200));
  }

  locations = [dealPile, ...winPiles, ...columns];

  hand = new Hand();

  newGame();
}

// When all files have loaded, start game.
window.addEventListener("load", (event) => {
  init();
});
