/* 
    ¿Que son las peticiones HTTP?
    Las peticiones HTTP son solicitudes que se realizan a un servidor para obtener informacion, 
    estas peticiones se pueden realizar desde el cliente (navegador) o desde el servidor.
    Se pueden realizar peticiones HTTP con JavaScript utilizando la API Fetch, la cual nos permite
    realizar solicitudes a servidores y obtener informacion de estos.


    ¿Que son los metodos HTTP?
    Los metodos HTTP son verbos que se utilizan para indicar la accion que se desea realizar con un recurso, estos son:
    - GET: Se utiliza para obtener informacion de un recurso.
    - POST: Se utiliza para enviar informacion a un recurso.
    - PUT: Se utiliza para actualizar informacion de un recurso.
    - PATCH: Se utiliza para actualizar informacion de un recurso.
    - DELETE: Se utiliza para eliminar un recurso.


    ¿Que son los estados de respuesta HTTP?
    Son codigos numericos que se envian desde el servidor al cliente para indicar el estado de la peticion,
    estos codigos se dividen en 5 grupos:

    100 - 199: Respuestas informativas, que indican que la peticion fue recibida y se esta procesando.
    200 - 299: Respuestas satisfactorias, que indican que la peticion fue recibida y procesada correctamente.
    300 - 399: Respuestas de redireccion, que indican que el cliente debe realizar otra accion para completar la peticion.
    400 - 499: Respuestas de error del cliente, que indican que la peticion no pudo ser procesada 
    por el servidor debido a un error del cliente al momento de realizar la peticion.
    500 - 599: Respuestas de error del servidor, que indican que la peticion no pudo ser procesada
    por el servidor debido a un error interno.
    
    Referencia: https://developer.mozilla.org/es/docs/Web/HTTP/Status


    Tabla de codigos de estado HTTP:
    Código  Nombre                        Descripción
    100     Continue                      El servidor ha recibido los encabezados de la solicitud y el cliente debe proceder a enviar el cuerpo de la solicitud.
    101     Switching Protocols           El servidor acepta cambiar el protocolo según lo solicitado por el cliente.
    102     Processing                    El servidor ha recibido y está procesando la solicitud, pero no hay respuesta disponible aún.
    103     Early Hints                   Se envían cabeceras tempranas antes de la respuesta final.
    200     OK                            La solicitud ha tenido éxito.
    201     Created                       La solicitud ha tenido éxito y se ha creado un nuevo recurso.
    202     Accepted                      La solicitud ha sido aceptada para procesamiento, pero el procesamiento no ha sido completado.
    203     Non-Authoritative Information La solicitud ha tenido éxito, pero la información devuelta puede provenir de otra fuente.
    204     No Content                    La solicitud ha tenido éxito, pero no hay contenido que enviar en la respuesta.
    205     Reset Content                 La solicitud ha tenido éxito, pero el cliente debe resetear el formulario de entrada.
    206     Partial Content               El servidor está entregando solo parte del recurso (rango de bytes).
    207     Multi-Status                  Proporciona información sobre múltiples recursos.
    208     Already Reported              Los miembros de un enlace DAV ya han sido enumerados en una respuesta anterior.
    226     IM Used                       El servidor ha cumplido una solicitud para el recurso, y la respuesta es una representación del resultado de una o más manipulaciones aplicadas.
    300     Multiple Choices              Existen múltiples opciones para el recurso que el cliente puede seguir.
    301     Moved Permanently             El recurso solicitado ha sido movido permanentemente a una nueva URL.
    302     Found                         El recurso solicitado se encuentra temporalmente en una URL diferente.
    303     See Other                     El recurso solicitado se encuentra en una URL diferente y se debe usar un método GET para obtenerlo.
    304     Not Modified                  El recurso no ha sido modificado desde la última solicitud.
    305     Use Proxy                     El recurso solicitado debe ser accedido a través del proxy especificado.
    306     Switch Proxy                  Este código está obsoleto y no debe ser utilizado.
    307     Temporary Redirect            El recurso solicitado se encuentra temporalmente en una URL diferente, pero se debe usar el mismo método de la solicitud original.
    308     Permanent Redirect            El recurso solicitado ha sido movido permanentemente a una nueva URL, y se debe usar el mismo método de la solicitud original.
    400     Bad Request                   El servidor no puede procesar la solicitud debido a un error del cliente (por ejemplo, sintaxis incorrecta).
    401     Unauthorized                  La solicitud requiere autenticación del usuario.
    402     Payment Required              Este código está reservado para uso futuro.
    403     Forbidden                     El servidor entiende la solicitud, pero se niega a autorizarla.
    404     Not Found                     El servidor no puede encontrar el recurso solicitado.
    405     Method Not Allowed            El método especificado en la solicitud no está permitido para el recurso.
    406     Not Acceptable                El servidor no puede generar una respuesta aceptable según las cabeceras "Accept" enviadas en la solicitud.
    407     Proxy Authentication Required El cliente debe autenticarse con el proxy.
    408     Request Timeout               El servidor agotó el tiempo de espera para la solicitud.
    409     Conflict                      La solicitud no pudo ser completada debido a un conflicto con el estado actual del recurso.
    410     Gone                          El recurso solicitado ya no está disponible y no lo estará en el futuro.
    411     Length Required               El servidor requiere una cabecera "Content-Length" en la solicitud.
    412     Precondition Failed           Una condición previa dada en la solicitud evaluó como falsa en el servidor.
    413     Payload Too Large             El servidor se niega a procesar la solicitud porque el cuerpo de la solicitud es demasiado grande.
    414     URI Too Long                  El servidor se niega a procesar la solicitud porque la URI solicitada es demasiado larga.
    415     Unsupported Media Type        El servidor no soporta el formato de los datos solicitados.
    416     Range Not Satisfiable         El cliente solicitó una parte del archivo que el servidor no puede proporcionar.
    417     Expectation Failed            El servidor no puede cumplir con los requisitos de la cabecera "Expect" de la solicitud.
    418     I'm a teapot                  Código definido en la especificación de broma de Hyper Text Coffee Pot Control Protocol (HTCPCP).
    421     Misdirected Request           La solicitud fue dirigida a un servidor que no es capaz de producir una respuesta.
    422     Unprocessable Entity          El servidor entiende la solicitud pero no puede procesarla debido a errores de semántica.
    423     Locked                        El recurso al que se está intentando acceder está bloqueado.
    424     Failed Dependency             La solicitud falló debido a la falla de una solicitud previa.
    425     Too Early                     El servidor no está dispuesto a arriesgarse a procesar una solicitud que podría ser repetida.
    426     Upgrade Required              El cliente debe cambiar a un protocolo diferente, como TLS/1.0.
    428     Precondition Required         El servidor requiere que la solicitud sea condicional.
    429     Too Many Requests             El cliente ha enviado demasiadas solicitudes en un período de tiempo determinado.
    431     Request Header Fields Too Large  El servidor no puede procesar la solicitud porque las cabeceras de la solicitud son demasiado grandes.
    451     Unavailable For Legal Reasons  El recurso no está disponible por razones legales.
    500     Internal Server Error         El servidor encontró una condición inesperada que le impidió completar la solicitud.
    501     Not Implemented               El servidor no reconoce el método de solicitud o carece de la capacidad para completarla.
    502     Bad Gateway                   El servidor, actuando como una puerta de enlace o proxy, recibió una respuesta inválida del servidor aguas arriba.
    503     Service Unavailable           El servidor no está listo para manejar la solicitud, generalmente debido a mantenimiento o sobrecarga.
    504     Gateway Timeout               El servidor, actuando como una puerta de enlace o proxy, no recibió una respuesta a tiempo del servidor aguas arriba.
    505     HTTP Version Not Supported    El servidor no admite la versión HTTP utilizada en la solicitud.
    506     Variant Also Negotiates       El servidor tiene un error de configuración interno: el recurso está configurado para usar contenido transparente negociado y un proceso circular ha sido detectado.
    507     Insufficient Storage          El servidor no puede almacenar la representación necesaria para completar la solicitud.
    508     Loop Detected                 El servidor detectó un bucle infinito al procesar una solicitud con WebDAV.
    510     Not Extended                  La política de extensión para la solicitud no se cumple, es necesario para el servidor procesarla.
    511     Network Authentication Required   El cliente debe autenticarse para obtener acceso a la red.
*/
