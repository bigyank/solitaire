class Deck extends Pile {
  constructor(x, y, deckResetImage) {
    super(x, y, deckResetImage);

    // Populate deck.
    for (var i = 0; i < 52; i++) {
      var value = (i % 13) + 1;
      var suit = Math.floor(i / 13);
      var image = CARD_IMAGES[i];

      var card = new Card(value, suit, image);
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
    var currentIndex = this.length;
    var temp, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temp;
    }
  }
}
