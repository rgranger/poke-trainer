const { kInN } = require('./k-in-n')

test('kInN 0 to equal 0', () => {
  expect(kInN(0, 0)).toBe(0)
  expect(kInN(0, 1)).toBe(0)
  expect(kInN(0, 10)).toBe(0)
})

test('kInN 1, n to equal n', () => {
  expect(kInN(1, 0)).toBe(0)
  expect(kInN(1, 1)).toBe(1)
  expect(kInN(1, 10)).toBe(10)
  expect(kInN(1, 3)).toBe(3)
})

test('kInN 5, 10 to equal 252', () => {
  expect(kInN(5, 10)).toBe(252)
})

test('kInN 3, 14 to equal 364', () => {
  expect(kInN(3, 14)).toBe(364)
})
