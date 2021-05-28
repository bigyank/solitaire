// main class, this class is extended by other cards
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

  // detect clicked cards
  detectClicks() {
    if (this.length > 0) {
      if (this[this.length - 1].detectClicks()) {
        return this.length - 1;
      }
    }

    return -1;
  }

  // detect if the cards overlaps each other
  detectDrops(card) {
    let dropDistanceX = Math.abs(this.anchorX - card.x);
    let dropDistanceY = Math.abs(this.anchorY - card.y);

    if (dropDistanceX < DROP_THRESHOLD && dropDistanceY < DROP_THRESHOLD) {
      return true;
    } else {
      return false;
    }
  }

  // check if the droped card is valid
  validateDrop(card) {
    if (this.length > 0) {
      let targetCard = this[this.length - 1];

      if (targetCard.value != card.value + 1) {
        return false;
      }

      if (targetCard.colour == card.colour) {
        return false;
      }
    }

    return true;
  }

  // add card to the main Array
  push(cards, orientation = FACE_UP) {
    for (let i = 0; i < cards.length; i++) {
      let card = cards[i];

      card.setOrientation(orientation);
      card.setPos(this.anchorX, this.anchorY);

      Array.prototype.push.call(this, card);
    }
  }

  // remove cards from the main array
  pop() {
    let card = Array.prototype.pop.call(this);

    return [card];
  }

  // if multiple cards are dragged then
  // move cards from the given index
  popFromIndex(index) {
    let endSegment = [];

    // From index to end of pile, copy items to new array.
    for (let i = index; i < this.length; i++) {
      endSegment.push(this[i]);
    }

    // Clear copied items from pile.
    let itemsToClear = this.length;
    for (let i = index; i < itemsToClear; i++) {
      this.pop();
    }

    // Return new array;
    return endSegment;
  }

  // draw all the cards to the canvas
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
    for (let i = 0; i < this.length; i++) {
      this[i].draw();
    }
  }
}
