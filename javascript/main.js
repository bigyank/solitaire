// Initialization.
function init() {
  deck = new Deck(10, 10, DECK_RESET);

  dealPile = new DealPile(160, 10);

  winPiles = [
    new WinPile(460, 10, SPADES, WIN_PILE_MARKER_SPADES),
    new WinPile(610, 10, CLUBS, WIN_PILE_MARKER_CLUBS),
    new WinPile(760, 10, HEARTS, WIN_PILE_MARKER_HEARTS),
    new WinPile(910, 10, DIAMONDS, WIN_PILE_MARKER_DIAMONDS),
  ];

  // create card columns
  columns = [];
  for (let index = 10; index <= 910; index += 150) {
    columns.push(new Column(index, 200));
  }

  locations = [dealPile, ...winPiles, ...columns];

  hand = new Hand();

  newGame();
}

// When all files have loaded, start game.
window.addEventListener("load", (event) => {
  init();
});
