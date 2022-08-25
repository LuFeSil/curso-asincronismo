function * generator () {
  console.log()
  yield 1
  yield 2
  yield 3
  console.log('Holi')
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

function * iterate (arr) {
  for (const value of arr) {
    yield value
  }
}

const myArr = [
  'Luis',
  'Felipe',
  'Daniel',
  'Gerardo',
  'Alvaro',
  'Augusto',
  'Patricia'
]

const it = iterate(myArr)

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
