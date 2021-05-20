// Prototypes.
class Card {
  constructor(value, suit, faceImage) {
    this.value = value;
    this.suit = suit;
    this.faceImage = faceImage;
    this.backImage = CARD_BACK;
    this.x = 0;
    this.y = 0;
    this.w = CARD_WIDTH;
    this.h = CARD_HEIGHT;
    this.orientation = FACE_UP;

    if (suit == SPADES || suit == CLUBS) {
      this.colour = BLACK;
    }
    if (suit == HEARTS || suit == DIAMONDS) {
      this.colour = RED;
    }
  }

  draw() {
    if (this.orientation == FACE_UP) {
      context.drawImage(this.faceImage, this.x, this.y, this.w, this.h);
    } else {
      context.drawImage(this.backImage, this.x, this.y, this.w, this.h);
    }
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  }

  setOrientation(orientation) {
    this.orientation = orientation;
  }
}
