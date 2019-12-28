export const VARIANTS = {
  NLHE: 0
}

export class PokeTrainer {
  constructor ({
    playerCount = 2,
    variant = VARIANTS.NLHE,
    startingStack = 1000,
    getLevel = () => 1,
    getSmallBlind = () => 5,
    getAnte = () => 1
  }) {
    this._playerCount = playerCount
    this._variant = variant
    this._startingStack = startingStack
    this._getLevel = getLevel
    this._getSmallBlind = getSmallBlind
    this._getAnte = getAnte
  }

  reset () {
    this._players = []
    for (let i = 0; i < this._playerCount; i++) {
      this._players.push(new Player({ stack: this._startingStack }))
    }

    this._table = new Table({
      players: this._players,
      variant: this._variant,
      getLevel: this._getLevel,
      getAnte: this._getAnte
    })
  }
}
