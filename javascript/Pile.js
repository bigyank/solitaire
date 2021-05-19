class Pile extends Array {
  constructor(x = 0, y = 0, markerImage = null) {
    super();

    this.x = x;
    this.y = y;
    this.anchorX = x;
    this.anchorY = y;
    this.markerW = CARD_WIDTH;
    this.markerH = CARD_HEIGHT;
    this.markerImage = markerImage;
  }

  draw() {
    if (this.markerImage) {
      context.drawImage(
        this.markerImage,
        this.x,
        this.y,
        this.markerW,
        this.markerH
      );
    }

    // Draw all cards.
    for (var i = 0; i < this.length; i++) {
      this[i].draw();
    }
  }
}
