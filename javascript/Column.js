// main game row
class Column extends Pile {
  constructor(x, y) {
    super(x, y);

    this.faceUpCardOffsetY = FACE_UP_CARD_OFFSET;
    this.faceDownCardOffsetY = FACE_DOWN_CARD_OFFSET;
    this.markerImage = COLUMN_MARKER;
  }

  // detect the column clicked
  detectClicks() {
    let clickIndex = -1;
    if (this.length > 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        if (this[i].detectClicks()) {
          clickIndex = i;
          break;
        }
      }
    }

    return this.processClicks(clickIndex);
  }

  processClicks(clickIndex) {
    if (clickIndex > -1) {
      let card = this[clickIndex];

      if (card.orientation == FACE_UP) {
        return clickIndex;
      }

      // If exposed face-down card has been clicked, turn it over.
      if (card.orientation == FACE_DOWN && clickIndex == this.length - 1) {
        card.setOrientation(FACE_UP);
        this.updateAnchorPos();
      }
    }

    return clickIndex;
  }

  //  check if dropped card is valid or not
  validateDrop(card) {
    if (this.length > 0) {
      let targetCard = this[this.length - 1];

      // invalid if value mismatches
      if (targetCard.value != card.value + 1) {
        return false;
      }

      // invalid if the color is same
      if (targetCard.colour == card.colour) {
        return false;
      }
      // invalid if King card
    } else if (card.value != 13) {
      return false;
    }

    // valid if all filters pass
    return true;
  }

  // add the valid card to the moved array
  push(cards, orientation = FACE_UP) {
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];

      card.setOrientation(orientation);
      card.setPos(this.anchorX, this.anchorY);

      Array.prototype.push.call(this, card);

      this.updateAnchorPos();
    }
  }

  // remove cards from the old array
  pop() {
    let temp = Pile.prototype.pop.call(this);

    this.updateAnchorPos();

    return temp;
  }

  // if multiple cards are grabbed then move card from index
  popFromIndex(index) {
    let temp = Pile.prototype.popFromIndex.call(this, index);

    this.updateAnchorPos();

    return temp;
  }

  updateAnchorPos() {
    if (this.length > 0) {
      let topCard = this[this.length - 1];

      if (topCard.orientation == FACE_UP) {
        this.anchorY = topCard.y + this.faceUpCardOffsetY;
      } else {
        this.anchorY = topCard.y + this.faceDownCardOffsetY;
      }
    } else {
      this.anchorY = this.y;
    }
  }
}
