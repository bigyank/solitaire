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
}
