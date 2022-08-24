import fetch from "node-fetch"

const API = " https://api.escuelajs.co/api/v1"

function fetchData(apiUrl) {
  return fetch(apiUrl)
}

// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products)
//   })
//   .catch(error => console.log("dat error"))
//   .finally(() => console.log("The end"))

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => console.log(category.name))
  .catch(error => console.log("Dat error"))
  .finally(() => console.log("the end"))
