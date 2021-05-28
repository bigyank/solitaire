// init
function init() {
  // create deck
  deck = new Deck(10, 10, DECK_RESET);

  // generate cards from deck
  dealPile = new DealPile(160, 10);

  // init winner row cards
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

  // merge all cards
  locations = [dealPile, ...winPiles, ...columns];

  // init player hand
  hand = new Hand();

  // start game
  newGame();
}

// begin game
window.addEventListener("load", (event) => {
  init();
});
