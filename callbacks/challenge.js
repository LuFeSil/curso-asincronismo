const XMLHttppRequest = require("xmlhttprequest").XMLHttpRequest
const API = " https://api.escuelajs.co/api/v1"

//#region Forma vieja de hacer peticiones
function fetchData(apiUrl, callback) {
  let xhttp = new XMLHttppRequest()

  xhttp.open("GET", apiUrl, true)
  xhttp.onreadystatechange = event => {
    /**
     * Valores del xhttp.readyState:
     * 0-> Se ha inicializado.
     * 1-> Loading (cargando).
     * 2-> Se ha cargado.
     * 3-> Procesamiento si existe alguna descarga.
     * 4-> Completado
     */
    if (xhttp.readyState === 4) {
      /**
       * Valores de xhttp.status:
       * 200-> OK -> Indica que todo está correcto.
       * 201-> Created -> Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
       * 204-> No Content -> Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
       * 400-> Bad Request -> Indica que algo está mal en la petición (no encontró algo).
       * 401-> Unauthorized -> Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
       * 403-> Forbidden -> Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
       * 404-> Not Found -> Indica que no existe el recurso que se está intentando acceder.
       * 500-> Internal Server Error -> Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.
       */
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error("Error" + apiUrl)
        return callback(error, null)
      }
    }
  }
  xhttp.send()
}

fetchData(`${API}/products`, (error1, data1) => {
  if (error1) return console.error(error1)

  fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
    if (error2) console.error(error2)

    fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
      if (error3) console.error(error3)

      console.log(data1[0])
      console.log(data2.title)
      console.log(data3.name)
    })
  })
})
//#endregion Forma vieja de hacer peticiones
