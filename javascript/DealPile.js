class DealPile extends Pile {
  constructor(x, y) {
    super(x, y);

    this.cardOffsetX = DEAL_PILE_CARD_OFFSET;
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
