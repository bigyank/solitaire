// individual card
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

  // if hand click inside the boundry of card then card is clicked
  detectClicks() {
    if (
      hand.x > this.x &&
      hand.y > this.y &&
      hand.x < this.x + this.w &&
      hand.y < this.y + this.h
    ) {
      hand.setDragOffset(this.x - hand.x, this.y - hand.y);
      return true;
    } else {
      return false;
    }
  }

  draw() {
    if (this.orientation == FACE_UP) {
      context.drawImage(this.faceImage, this.x, this.y, this.w, this.h);
    } else {
      context.drawImage(this.backImage, this.x, this.y, this.w, this.h);
    }
  }

  // update xasis and yaxis of the card
  setPos(x, y) {
    this.x = x;
    this.y = y;
  }

  // change the face of the card
  setOrientation(orientation) {
    this.orientation = orientation;
  }
}
