// Event listeners.
game.addEventListener("mousedown", function mouseDownOnCanvas(pos) {
  hand.setPos(computeCursorPosition(pos));

  if (deck.detectClicks()) {
    SUFFEL_SOUND.play();
    deal();
  } else {
    // move card to player hand if click is detected
    for (let i = 0; i < locations.length; i++) {
      let clickIndex = locations[i].detectClicks();

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
    let dropOK = false;
    let bottomCardInHand = hand[0];

    // search for drop location
    // drop the card if move is valid
    for (let i = 1; i < locations.length; i++) {
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

    // return card back if invalid move
    if (!dropOK && hand.pickupLocation > -1) {
      locations[hand.pickupLocation].push(hand.popFromIndex(0));
    }
  }

  render();
});

// set the position of card according to the player hand
document.addEventListener("mousemove", function mouseMoveOnCanvas(pos) {
  hand.setPos(computeCursorPosition(pos));
  render();
});
