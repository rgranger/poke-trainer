const { factorial } = require('./factorial')

test('factorial 0 to equal 0', () => {
  expect(factorial(0)).toBe(0)
})

test('factorial 1 to equal 1', () => {
  expect(factorial(1)).toBe(1)
})

test('factorial 5 to equal 120', () => {
  expect(factorial(5)).toBe(120)
})

test('factorial 10 to equal 3628800', () => {
  expect(factorial(10)).toBe(3628800)
})
