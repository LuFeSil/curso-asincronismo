const fnasync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("OK")
        }, 2000)
      : reject(new Error("Error"))
  })
}

const anotherFn = async () => {
  const response = await fnasync()

  console.log(response)
  console.log("Hello")
}

console.log("before")
anotherFn()
console.log("after")
