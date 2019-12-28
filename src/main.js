const { PokeTrainer, VARIANTS } = require('./poker/trainer')

const pokeTrainer = new PokeTrainer({
  playerCount: 6,
  variant: VARIANTS.NLHE,
  startingStack: 3000,
  getLevel: (handCount) => Math.floor(handCount / 100),
  getSmallBlind: (level) => 20 + 10 * level,
  getAnte: (level) => 5 + 3 * level
})

let state = pokeTrainer.reset()

while (!state.done) {
  state = pokeTrainer.step(state.actions[0])
}
