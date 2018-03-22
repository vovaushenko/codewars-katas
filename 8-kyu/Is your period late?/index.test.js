const periodIsLate = require('./index.js')

test('Test 1', () => {
  expect(
    periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35)
  ).toBeFalsy()
})

test('Test 2', () => {
  expect(
    periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28)
  ).toBeTruthy()
})
