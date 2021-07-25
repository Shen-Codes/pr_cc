const { CorrectBreedName }= require('../components')

test('dog name german shepherd', () => {
  expect(CorrectBreedName("germanshepherd")).toBe('german shepherd')
})

test('dog name Australian Shepherd', () => {
  expect(CorrectBreedName("shepherd australian")).toBe('australian shepherd')
})

test('dog name pembroke', () => {
  expect(CorrectBreedName("pembroke")).toBe('pembroke corgi')
})

test('dog name default', () => {
  expect(CorrectBreedName("default")).toBe('default')
})