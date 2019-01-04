//importando funciones del modulo funciones, para usarlo en un html se coloca que el tipo de script es un tipo: "module"
// import { cube, foo, graph } from './funciones.js';
import { compTitulo } from './compTitulo/compTitulo.js';
import { compFormulario } from './compFormulario/compFormulario.js';
// //console.log(cube(3));
// console.log(foo);
// graph.draw();
// console.log(graph.options.color);

compTitulo("titulo", "titulo");
compFormulario.crear();
compFormulario.cliquear();
