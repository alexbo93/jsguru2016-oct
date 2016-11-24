// Dentro de webworker this (o self) es el propio worker.
// Para que esto se ejecute necesitamos hacer postMessage del worker (root)
this.addEventListener('message', e => {
  var data = JSON.parse(e.data);
  var response = {success: true};
  this.postMessage(JSON.stringify(response)); // e.data lleva el mensaje que se ha pasado
})

// this.close(); //Para terminar el worker desde dentro -> Equivale a worker.terminate en root.

// Al ser un proceso separado, no se permite acceder al DOM en ningún worker
// Si que se pueden hacer peticiones ajax y timeouts, pero nada de UI.
