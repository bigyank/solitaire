class DealPile extends Pile {
  constructor(x, y) {
    super(x, y);

    this.cardOffsetX = DEAL_PILE_CARD_OFFSET;
  }

  pop() {
    // Move the anchor to the appropriate position for the next push().
    // This code accounts for the various possible positions
    // of cards that have been spread in a triple-deal.
    if (this.length == 0 || this.length == 1) {
      this.anchorX = this.x;
    } else {
      var topCard = this[this.length - 1];
      var cardBelow = this[this.length - 2];

      if (topCard.x == cardBelow.x) {
        this.anchorX = this.x;
      } else {
        this.anchorX = topCard.x;
      }
    }

    return Pile.prototype.pop.call(this);
  }

  spreadTopCards(numberToReveal) {
    var startIndex = this.length - numberToReveal;
    var endIndex = this.length - 1;
    var modifier = 0;

    for (var i = startIndex; i <= endIndex; i++) {
      this[i].x = this.x + modifier * this.cardOffsetX;
      modifier++;
    }

    var topCard = this[endIndex];
    this.anchorX = topCard.x + this.cardOffsetX;
  }

  unspreadCards() {
    for (var i = this.length - 1; i >= 0; i--) {
      this[i].x = this.x;
      this[i].y = this.y;
    }

    this.anchorX = this.x;
    this.anchorY = this.y;
  }
}
