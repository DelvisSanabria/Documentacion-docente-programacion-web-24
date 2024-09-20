/*
    ¿Que es Axios?
    Es una libreria que nos permite hacer peticiones HTTP, es decir, nos permite hacer 
    peticiones a una API, a un servidor, etc.

    Ademas de manejar los metos HTTP, tambien nos permite manejar promesas de forma mas
    sencilla.

    Con Axios nos podemos ahorrar el proceso de convertir la respuesta de la peticion a
    un JSON, ya que Axios lo hace automaticamente.

    Devuelve un objeto que contiene la respuesta de la peticion, ademas de otros datos
    como el estado de la peticion, el tiempo que tardo en responder, etc.

    Las propiedades del objeto que retorna Axios son:
    - config: Objeto que contiene la configuracion de la peticion.
    - data: Objeto que contiene la respuesta de la peticion (Con la estructura original de la API usada).
    - headers: Objeto que contiene los headers (las cabeceras) de la peticion.
    - request: Objeto que contiene la informacion de la peticion.
    - status: Numero que indica el estado de la peticion (200, 404, 500, etc).
    - statusText: Mensaje que indica el estado de la peticion (OK, Not Found, Internal Server Error, etc).


    Entre los metodos que nos ofrece Axios, tenemos:

    - axios.get(url)
        Permite hacer una peticion GET a la url que le pasemos como parametro.

    - axios.post(url, data)
        Permite hacer una peticion POST a la url que le pasemos como parametro, ademas de
        enviar los datos que le pasemos como segundo parametro (usualmente un objeto).

    - axios.put(url, data)
        Permite hacer una peticion PUT a la url que le pasemos como parametro, ademas de
        enviar los datos que le pasemos como segundo parametro (usualmente un objeto).

    - axios.patch(url, data)
        Permite hacer una peticion PATCH a la url que le pasemos como parametro, ademas de
        enviar los datos que le pasemos como segundo parametro (usualmente un objeto).

    - axios.delete(url)
        Permite hacer una peticion DELETE a la url que le pasemos como parametro.
*/


axios.get("https://rickandmortyapi.com/api/characterasd/")
    .then( res => console.table(res.data.results))
    .catch( err => console.error(err));