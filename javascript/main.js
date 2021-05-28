// Initialization.
function init() {
  deck = new Deck(10, 10, DECK_RESET);

  dealPile = new DealPile(120, 10);

  winPiles = [
    new WinPile(340, 10, SPADES, WIN_PILE_MARKER_SPADES),
    new WinPile(450, 10, CLUBS, WIN_PILE_MARKER_CLUBS),
    new WinPile(560, 10, HEARTS, WIN_PILE_MARKER_HEARTS),
    new WinPile(670, 10, DIAMONDS, WIN_PILE_MARKER_DIAMONDS),
  ];

  columns = [
    new Column(10, 160),
    new Column(120, 160),
    new Column(230, 160),
    new Column(340, 160),
    new Column(450, 160),
    new Column(560, 160),
    new Column(670, 160),
  ];

  locations = [
    dealPile,
    winPiles[0],
    winPiles[1],
    winPiles[2],
    winPiles[3],
    columns[0],
    columns[1],
    columns[2],
    columns[3],
    columns[4],
    columns[5],
    columns[6],
  ];

  hand = new Hand();

  newGame();
}

// When all files have loaded, start game.
window.addEventListener("load", (event) => {
  init();
});
