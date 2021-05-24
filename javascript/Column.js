class Column extends Pile {
  constructor(x, y) {
    super(x, y);

    this.faceUpCardOffsetY = FACE_UP_CARD_OFFSET;
    this.faceDownCardOffsetY = FACE_DOWN_CARD_OFFSET;
    this.markerImage = COLUMN_MARKER;
  }

  detectClicks() {
    if (this.length > 0) {
      var clickIndex = -1;
      for (var i = this.length - 1; i >= 0; i--) {
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
      var card = this[clickIndex];

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

  validateDrop(card) {
    if (this.length > 0) {
      var targetCard = this[this.length - 1];

      if (targetCard.value != card.value + 1) {
        return false;
      }

      if (targetCard.colour == card.colour) {
        return false;
      }
    } else if (card.value != 13) {
      return false;
    }

    return true;
  }

  push(cards, orientation = FACE_UP) {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];

      card.setOrientation(orientation);
      card.setPos(this.anchorX, this.anchorY);

      Array.prototype.push.call(this, card);

      this.updateAnchorPos();
    }
  }

  pop() {
    var temp = Pile.prototype.pop.call(this);

    this.updateAnchorPos();

    return temp;
  }
}
