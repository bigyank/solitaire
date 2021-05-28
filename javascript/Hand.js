// Hand = cursor + dragged cards.
class Hand extends Pile {
  constructor() {
    super();

    this.dragOffsetX;
    this.dragOffsetY;
    this.cardOffsetY = FACE_UP_CARD_OFFSET;
    this.pickupLocation = -1;
  }

  push(cards) {
    Pile.prototype.push.call(this, cards);

    // Set positions of pushed cards.
    this.setPos();
  }

  // set the position of the hand
  setPos(pos = new Point(this.x, this.y)) {
    this.x = pos.x;
    this.y = pos.y;

    for (let i = 0; i < this.length; i++) {
      let card = this[i];

      let cardX = this.x + this.dragOffsetX;
      let cardY = this.y + this.dragOffsetY + i * this.cardOffsetY;

      card.setPos(cardX, cardY);
    }
  }

  setDragOffset(x, y) {
    this.dragOffsetX = x;
    this.dragOffsetY = y;
  }
}
