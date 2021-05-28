// winner cards row
class WinPile extends Pile {
  constructor(x, y, suit, markerImage) {
    super(x, y, markerImage);

    this.suit = suit;
  }

  validateDrop(card) {
    // check if right card is dropped
    if (card.suit != this.suit) {
      return false;
    }

    // invalid if value of dropped card is not a step above
    if (this.length == 0 && card.value != 1) {
      return false;
    }

    // add all cards if multiple cards are dropped
    // and check the value of card at last index
    if (this.length > 0) {
      let targetCard = this[this.length - 1];

      if (targetCard.value != card.value - 1) {
        return false;
      }
    }

    return true;
  }
}
