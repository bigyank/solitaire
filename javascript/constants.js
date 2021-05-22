// Globals
const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = context.canvas.clientWidth;
const CANVAS_HEIGHT = context.canvas.clientHeight;

const SPADES = 0;
const CLUBS = 1;
const HEARTS = 2;
const DIAMONDS = 3;
const BLACK = 0;
const RED = 1;
const FACE_DOWN = 0;
const FACE_UP = 1;
const SINGLE_DEAL = 0;
const TRIPLE_DEAL = 1;
const CARD_WIDTH = 100;
const CARD_HEIGHT = 140;

const FACE_DOWN_CARD_OFFSET = 5;
const FACE_UP_CARD_OFFSET = 20;
const DEAL_PILE_CARD_OFFSET = 25;
const DROP_THRESHOLD = 30;

let deck = null;
let dealPile = null;
let winPiles = null;
let columns = null;
let locations = null;
let hand = null;
let dealType = null;
