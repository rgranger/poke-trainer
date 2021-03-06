const { RANKS } = require('./ranks')
const { SUITS } = require('./suits')
const { Card } = require('./card')

const fullDeck = [
  // HEARTS
  new Card(RANKS.A, SUITS.HEARTS),
  new Card(RANKS[2], SUITS.HEARTS),
  new Card(RANKS[3], SUITS.HEARTS),
  new Card(RANKS[4], SUITS.HEARTS),
  new Card(RANKS[5], SUITS.HEARTS),
  new Card(RANKS[6], SUITS.HEARTS),
  new Card(RANKS[7], SUITS.HEARTS),
  new Card(RANKS[8], SUITS.HEARTS),
  new Card(RANKS[9], SUITS.HEARTS),
  new Card(RANKS[10], SUITS.HEARTS),
  new Card(RANKS.J, SUITS.HEARTS),
  new Card(RANKS.Q, SUITS.HEARTS),
  new Card(RANKS.K, SUITS.HEARTS),
  // DIAMONDS
  new Card(RANKS.A, SUITS.DIAMONDS),
  new Card(RANKS[2], SUITS.DIAMONDS),
  new Card(RANKS[3], SUITS.DIAMONDS),
  new Card(RANKS[4], SUITS.DIAMONDS),
  new Card(RANKS[5], SUITS.DIAMONDS),
  new Card(RANKS[6], SUITS.DIAMONDS),
  new Card(RANKS[7], SUITS.DIAMONDS),
  new Card(RANKS[8], SUITS.DIAMONDS),
  new Card(RANKS[9], SUITS.DIAMONDS),
  new Card(RANKS[10], SUITS.DIAMONDS),
  new Card(RANKS.J, SUITS.DIAMONDS),
  new Card(RANKS.Q, SUITS.DIAMONDS),
  new Card(RANKS.K, SUITS.DIAMONDS),
  // CLUBS
  new Card(RANKS.A, SUITS.CLUBS),
  new Card(RANKS[2], SUITS.CLUBS),
  new Card(RANKS[3], SUITS.CLUBS),
  new Card(RANKS[4], SUITS.CLUBS),
  new Card(RANKS[5], SUITS.CLUBS),
  new Card(RANKS[6], SUITS.CLUBS),
  new Card(RANKS[7], SUITS.CLUBS),
  new Card(RANKS[8], SUITS.CLUBS),
  new Card(RANKS[9], SUITS.CLUBS),
  new Card(RANKS[10], SUITS.CLUBS),
  new Card(RANKS.J, SUITS.CLUBS),
  new Card(RANKS.Q, SUITS.CLUBS),
  new Card(RANKS.K, SUITS.CLUBS),
  // SPADES
  new Card(RANKS.A, SUITS.SPADES),
  new Card(RANKS[2], SUITS.SPADES),
  new Card(RANKS[3], SUITS.SPADES),
  new Card(RANKS[4], SUITS.SPADES),
  new Card(RANKS[5], SUITS.SPADES),
  new Card(RANKS[6], SUITS.SPADES),
  new Card(RANKS[7], SUITS.SPADES),
  new Card(RANKS[8], SUITS.SPADES),
  new Card(RANKS[9], SUITS.SPADES),
  new Card(RANKS[10], SUITS.SPADES),
  new Card(RANKS.J, SUITS.SPADES),
  new Card(RANKS.Q, SUITS.SPADES),
  new Card(RANKS.K, SUITS.SPADES)
]
