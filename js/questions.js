// JS Questions:
//
// Explain event delegation
// Explain how this works in JavaScript
// Explain how prototypal inheritance works
// What do you think of AMD vs CommonJS?
asynchronous module definition (AMD) --> import por ejemplo. En web va bien para cargar grandes números de archivos, sobretodo en UI.

CommonJS va mejor para node y por tanto para servidor. No tiene asincronías
// Explain why the following doesn't work as an IIFE: function foo(){ }();.
function foo(){ }() Se necesitaría cerrar la función con paréntesis --> (function foo(){ })()
// What needs to be changed to properly make it an IIFE?
// What's the difference between a variable that is: null, undefined or undeclared?
// How would you go about checking for any of these states?
// What is a closure, and how/why would you use one?
// What's a typical use case for anonymous functions?
// How do you organize your code? (module pattern, classical inheritance?)
Modulos de ECMAscript 6 es la respuesta (referimos a import * from...), herencia clasica con <script> no es óptimo.
// What's the difference between host objects and native objects?
// Difference between: function Person(){}, var person = Person(), and var person = new Person()?
// What's the difference between .call and .apply?
// Explain Function.prototype.bind.
// When would you use document.write()?
NEVER -->
// What's the difference between feature detection, feature inference, and using the UA string?
// Explain Ajax in as much detail as possible.
// What are the advantages and disadvantages of using Ajax?
// Explain how JSONP works (and how it's not really Ajax).
Substituido por CORS. Se hacían peticiones con script tag, para que se puedan hacer peticiones fuera del dominio. Asigna el resultado a una variable. Ahora con CORS ya se puede hacer con AJAX.
// Have you ever used JavaScript templating?
UI frameworks lo usan
// If so, what libraries have you used?
// Explain "hoisting".
var a --> se iba al ámbito global.
// Describe event bubbling.
Por defecto los eventos se propagan a los elementos padres. e.preventPropagation.
// What's the difference between an "attribute" and a "property"?
document.getElementById().getAttribute('id') vs properties
// Why is extending built-in JavaScript objects not a good idea?
Quizás ya se han definido
// Difference between document load event and document DOMContentLoaded event?
onload event, para cuando se ha cargado una página --> garantiza que HTML se ha cargado.
DOMContentLoaded --> elemento parseado y se está visualizando. $().Ready() de jQuery.
// What is the difference between == and ===?
// Explain the same-origin policy with regards to JavaScript.
// Make this work:
// duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
// Why is it called a Ternary expression, what does the word "Ternary" indicate?
condition ? true : false
// What is "use strict";? what are the advantages and disadvantages to using it?
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
// Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
// Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
// Explain what a single page app is and how to make one SEO-friendly.
// What is the extent of your experience with Promises and/or their polyfills?
// What are the pros and cons of using Promises instead of callbacks?
// What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
// What tools and techniques do you use debugging JavaScript code?
// What language constructions do you use for iterating over object properties and array items?
// Explain the difference between mutable and immutable objects.
// What is an example of an immutable object in JavaScript?
// What are the pros and cons of immutability?
// How can you achieve immutability in your own code?
// Explain the difference between synchronous and asynchronous functions.
// What is event loop?
// What is the difference between call stack and task queue?
// Explain the differences on the usage of foo between function foo() {} and var foo = function() {}
