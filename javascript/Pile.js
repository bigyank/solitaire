class Pile extends Array {
  constructor(x = 0, y = 0, markerImage = null) {
    super();

    this.x = x;
    this.y = y;
    this.anchorX = x;
    this.anchorY = y;
    this.markerW = CARD_WIDTH;
    this.markerH = CARD_HEIGHT;
    this.markerImage = markerImage;
  }

  detectClicks() {
    if (this.length > 0) {
      if (this[this.length - 1].detectClicks()) {
        return this.length - 1;
      }
    }

    return -1;
  }

  detectDrops(card) {
    var dropDistanceX = Math.abs(this.anchorX - card.x);
    var dropDistanceY = Math.abs(this.anchorY - card.y);

    if (dropDistanceX < DROP_THRESHOLD && dropDistanceY < DROP_THRESHOLD) {
      return true;
    } else {
      return false;
    }
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
    }

    return true;
  }

  push(cards, orientation = FACE_UP) {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];

      card.setOrientation(orientation);
      card.setPos(this.anchorX, this.anchorY);

      Array.prototype.push.call(this, card);
    }
  }

  pop() {
    var card = Array.prototype.pop.call(this);

    return [card];
  }

  popFromIndex(index) {
    var endSegment = [];

    // From index to end of pile, copy items to new array.
    for (var i = index; i < this.length; i++) {
      endSegment.push(this[i]);
    }

    // Clear copied items from pile.
    var itemsToClear = this.length;
    for (var i = index; i < itemsToClear; i++) {
      this.pop();
    }

    // Return new array;
    return endSegment;
  }

  draw() {
    if (this.markerImage) {
      context.drawImage(
        this.markerImage,
        this.x,
        this.y,
        this.markerW,
        this.markerH
      );
    }

    // Draw all cards.
    for (var i = 0; i < this.length; i++) {
      this[i].draw();
    }
  }
}
