function factorial (n) {
  switch (n) {
    case 0: return 0
    case 1: return 1
    default: return factorial(n - 1) * n
  }
}

module.exports = {
  factorial
}
