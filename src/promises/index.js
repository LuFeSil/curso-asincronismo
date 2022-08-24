// const promise = new Promise((resolve, reject) => {
//   resolve("hey")
// })

const cows = 15

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve("OK")
  } else {
    reject("Not enough")
  }
})

countCows
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    console.log("The end")
  })
