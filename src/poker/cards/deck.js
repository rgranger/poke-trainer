const { RANKS } = require('./ranks')
const { SUITS } = require('./suits')
const { Card } = require('./card')

export class Deck {
  reset () {
    this._cards = []

    for (const suit of Object.values(SUITS)) {
      for (const rank of Object.values(RANKS)) {
        this._cards.push(new Card(rank, suit))
      }
    }
  }

  takeRandom () {
    const index = Math.floor(Math.random() * this._cards.length)
    const card = this._cards[index]
    this._cards.splice(index, 1)

    return card
  }
}
