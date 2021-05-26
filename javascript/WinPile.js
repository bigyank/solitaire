class WinPile extends Pile {
  constructor(x, y, suit, markerImage) {
    super(x, y, markerImage);

    this.suit = suit;
  }

  validateDrop(card) {
    if (card.suit != this.suit) {
      return false;
    }

    if (this.length == 0 && card.value != 1) {
      return false;
    }

    if (this.length > 0) {
      var targetCard = this[this.length - 1];

      if (targetCard.value != card.value - 1) {
        return false;
      }
    }

    return true;
  }
}
