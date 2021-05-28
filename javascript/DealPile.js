class DealPile extends Pile {
  constructor(x, y) {
    super(x, y);

    this.cardOffsetX = DEAL_PILE_CARD_OFFSET;
  }

  pop() {
    if (this.length == 0 || this.length == 1) {
      this.anchorX = this.x;
    } else {
      let topCard = this[this.length - 1];
      let cardBelow = this[this.length - 2];

      if (topCard.x == cardBelow.x) {
        this.anchorX = this.x;
      } else {
        this.anchorX = topCard.x;
      }
    }

    return Pile.prototype.pop.call(this);
  }

  spreadTopCards(numberToReveal) {
    let startIndex = this.length - numberToReveal;
    let endIndex = this.length - 1;
    let modifier = 0;

    for (let i = startIndex; i <= endIndex; i++) {
      this[i].x = this.x + modifier * this.cardOffsetX;
      modifier++;
    }

    let topCard = this[endIndex];
    this.anchorX = topCard.x + this.cardOffsetX;
  }

  unspreadCards() {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i].x = this.x;
      this[i].y = this.y;
    }

    this.anchorX = this.x;
    this.anchorY = this.y;
  }
}
