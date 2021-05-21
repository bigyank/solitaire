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
}
