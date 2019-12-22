const { factorial } = require('./factorial')

function kInN (k, n) {
  switch (k) {
    case 0: return 0
    case 1: return n
    case n: return 1

    default: return factorial(n) / (factorial(k) * factorial(n - k))
  }
}

module.exports = {
  kInN
}
