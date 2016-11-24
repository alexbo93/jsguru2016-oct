// Los webworkers permiten realizar threads en navegador, fomentando asi
// el paralelismo en web. Worker viene incorporado en Javascript

var worker1 = new Worker('js/workers.worker1.js');

// Sólo se puede ejecutar en paralelo un archivo independiente js.
// INIT

// Para enviar objetos, solo se puede enviar JSON serializado o stream de bits.S
worker1.postMessage(JSON.stringify({text: 'hello world'})); // Enviar mensaje a worker o a main thread

worker1.addEventListener('message', response => {
  console.log(JSON.parse(response.success));
  worker1.terminate();
})

// setTimeout(function () {
//   worker1.terminate();
// }, 1000);

// Se pueden invocar workers sin necesidad de nuevo archivo físico
// ===============================================================
var worker2Code = `
this.addEventListener('message', e => {
  this.postMessage(e.data);
});`;

var code = new blob([worker2Code]); // Loading binary code
var codeUrl = URL.createObjectURL(code); // CodeUrl has a virtual URL hosting code created before

var worker2 = new Worker(codeUrl);
worker2.postMessage('hello world 2');

worker2.addEventListener('message', e => {
  console.log(e.data);
})
// ===============================================================
