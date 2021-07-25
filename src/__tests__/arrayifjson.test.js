const { arrayifyJson } = require('../utils')

test('json object with empty arrays', () => {
  const jsonObject = {
    husky: [],
    dalmation: [],
    shiba: [],
  }
  expect(arrayifyJson(jsonObject)).toEqual(['husky', 'dalmation', 'shiba'])
})

test('json object with filled arrays', () => {
  const jsonObject = {
    husky: [],
    shepherd: ['german', 'australian']
  }
  expect(arrayifyJson(jsonObject)).toEqual(['husky', 'german shepherd', 'australian shepherd'])
})

test('empty object', () => {
  expect(arrayifyJson({})).toEqual([])
})