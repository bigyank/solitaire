class Deck extends Pile {
  constructor(x, y, deckResetImage) {
    super(x, y, deckResetImage);

    // Populate deck.
    for (let i = 0; i < 52; i++) {
      let value = (i % 13) + 1;
      let suit = Math.floor(i / 13);
      let image = CARD_IMAGES[i];

      let card = new Card(value, suit, image);
      this.push([card], FACE_DOWN);
    }
  }

  detectClicks() {
    if (
      hand.x > this.x &&
      hand.y > this.y &&
      hand.x < this.x + this.markerW &&
      hand.y < this.y + this.markerH
    ) {
      return true;
    } else {
      return false;
    }
  }

  shuffle() {
    let currentIndex = this.length;
    let temp, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temp;
    }
  }
}
