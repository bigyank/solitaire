// create new images for 53 cards
const CARD_IMAGES = [...Array(52)].map(() => new Image());

const DECK_RESET = new Image();
const CARD_BACK = new Image();
const COLUMN_MARKER = new Image();
const WIN_PILE_MARKER_SPADES = new Image();
const WIN_PILE_MARKER_CLUBS = new Image();
const WIN_PILE_MARKER_HEARTS = new Image();
const WIN_PILE_MARKER_DIAMONDS = new Image();

const SUFFEL_SOUND = new Audio();
const ERROR_SOUND = new Audio();
const DRAW_SOUND = new Audio();

// these should be in order of A-K and Spades->Clubs->Hearts->Diamonds
CARD_IMAGES[0].src = "./assets/images/Spades/AofSpades.png";
CARD_IMAGES[1].src = "./assets/images/Spades/2ofSpades.png";
CARD_IMAGES[2].src = "./assets/images/Spades/3ofSpades.png";
CARD_IMAGES[3].src = "./assets/images/Spades/4ofSpades.png";
CARD_IMAGES[4].src = "./assets/images/Spades/5ofSpades.png";
CARD_IMAGES[5].src = "./assets/images/Spades/6ofSpades.png";
CARD_IMAGES[6].src = "./assets/images/Spades/7ofSpades.png";
CARD_IMAGES[7].src = "./assets/images/Spades/8ofSpades.png";
CARD_IMAGES[8].src = "./assets/images/Spades/9ofSpades.png";
CARD_IMAGES[9].src = "./assets/images/Spades/10ofSpades.png";
CARD_IMAGES[10].src = "./assets/images/Spades/JofSpades.png";
CARD_IMAGES[11].src = "./assets/images/Spades/QofSpades.png";
CARD_IMAGES[12].src = "./assets/images/Spades/KofSpades.png";
CARD_IMAGES[13].src = "./assets/images/Clubs/AofClubs.png";
CARD_IMAGES[14].src = "./assets/images/Clubs/2ofClubs.png";
CARD_IMAGES[15].src = "./assets/images/Clubs/3ofClubs.png";
CARD_IMAGES[16].src = "./assets/images/Clubs/4ofClubs.png";
CARD_IMAGES[17].src = "./assets/images/Clubs/5ofClubs.png";
CARD_IMAGES[18].src = "./assets/images/Clubs/6ofClubs.png";
CARD_IMAGES[19].src = "./assets/images/Clubs/7ofClubs.png";
CARD_IMAGES[20].src = "./assets/images/Clubs/8ofClubs.png";
CARD_IMAGES[21].src = "./assets/images/Clubs/9ofClubs.png";
CARD_IMAGES[22].src = "./assets/images/Clubs/10ofClubs.png";
CARD_IMAGES[23].src = "./assets/images/Clubs/JofClubs.png";
CARD_IMAGES[24].src = "./assets/images/Clubs/QofClubs.png";
CARD_IMAGES[25].src = "./assets/images/Clubs/KofClubs.png";
CARD_IMAGES[26].src = "./assets/images/Hearts/AofHearts.png";
CARD_IMAGES[27].src = "./assets/images/Hearts/2ofHearts.png";
CARD_IMAGES[28].src = "./assets/images/Hearts/3ofHearts.png";
CARD_IMAGES[29].src = "./assets/images/Hearts/4ofHearts.png";
CARD_IMAGES[30].src = "./assets/images/Hearts/5ofHearts.png";
CARD_IMAGES[31].src = "./assets/images/Hearts/6ofHearts.png";
CARD_IMAGES[32].src = "./assets/images/Hearts/7ofHearts.png";
CARD_IMAGES[33].src = "./assets/images/Hearts/8ofHearts.png";
CARD_IMAGES[34].src = "./assets/images/Hearts/9ofHearts.png";
CARD_IMAGES[35].src = "./assets/images/Hearts/10ofHearts.png";
CARD_IMAGES[36].src = "./assets/images/Hearts/JofHearts.png";
CARD_IMAGES[37].src = "./assets/images/Hearts/QofHearts.png";
CARD_IMAGES[38].src = "./assets/images/Hearts/KofHearts.png";
CARD_IMAGES[39].src = "./assets/images/Dmnds/AofDmnds.png";
CARD_IMAGES[40].src = "./assets/images/Dmnds/2ofDmnds.png";
CARD_IMAGES[41].src = "./assets/images/Dmnds/3ofDmnds.png";
CARD_IMAGES[42].src = "./assets/images/Dmnds/4ofDmnds.png";
CARD_IMAGES[43].src = "./assets/images/Dmnds/5ofDmnds.png";
CARD_IMAGES[44].src = "./assets/images/Dmnds/6ofDmnds.png";
CARD_IMAGES[45].src = "./assets/images/Dmnds/7ofDmnds.png";
CARD_IMAGES[46].src = "./assets/images/Dmnds/8ofDmnds.png";
CARD_IMAGES[47].src = "./assets/images/Dmnds/9ofDmnds.png";
CARD_IMAGES[48].src = "./assets/images/Dmnds/10ofDmnds.png";
CARD_IMAGES[49].src = "./assets/images/Dmnds/JofDmnds.png";
CARD_IMAGES[50].src = "./assets/images/Dmnds/QofDmnds.png";
CARD_IMAGES[51].src = "./assets/images/Dmnds/KofDmnds.png";

DECK_RESET.src = "./assets/images/misc/deckReset.png";
CARD_BACK.src = "./assets/images/misc/cardBack.png";
COLUMN_MARKER.src = "./assets/images/misc/blankcard.png";
WIN_PILE_MARKER_SPADES.src = "./assets/images/misc/spadesBack.png";
WIN_PILE_MARKER_CLUBS.src = "./assets/images/misc/clubBack.png";
WIN_PILE_MARKER_HEARTS.src = "./assets/images/misc/heartBack.png";
WIN_PILE_MARKER_DIAMONDS.src = "./assets/images/misc/diamondsBack.png";

SUFFEL_SOUND.src = "./assets/audio/shuffle.wav";
ERROR_SOUND.src = "./assets/audio/error.wav";
DRAW_SOUND.src = "./assets/audio/draw.wav";