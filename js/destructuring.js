var obj = {
  a: 1,
  b: 'hello',
  c: true
}

var {a, b, c} = obj // var {a: a, b: b, c: c} --> var a = obj.a, var b = obj.b

var [d, e] = [1, 2];
var [f,,,g] = [1, 2, 3, 4];

// Caso de uso común

function doStuff(args) {
  if(!args.timeout) {
    args.timeout = 3000;
  }
}

doStuff({timeout: 3000});

// Todo lo de arriba se puede substituir por
// function doStuff(obj = {timeout: 3000, a: hello}) {
  // Aquó podré acceder a los atributos por nombre y podre llamar a la función
  // sin orden preestalecidon de argumentos
// }
