import { w3 } from '.././w3.js';

var nomb = "";
var ed = 0;

async function compFormulario(){
    var div = document.createElement("div");
    div.id="Div2"
    div.setAttribute("class", "container");
    div.setAttribute("w3-include-html", "compFormulario/compFormulario.html");
    var dondeInsertar = document.getElementById('principal');
    dondeInsertar.append(div);
    w3.includeHTML( ()=>{
      // aquí va todo el código callback
      w3.displayObject("Div2", obj);
      var btn = document.getElementById(obj.id);
      btn.onclick = ()=>{
        nomb = document.getElementById('nombre').value;
        ed = document.getElementById('edad').value;
        // console.log(nomb+" "+ed);
        compMostrar(nomb, ed);
      }
    });
}

var compMostrar = (nombre, edad)=>{
    if(nombre != "" && edad != ""){
      var str = `Hola ${nombre} bienvenido/a a ésta webApp progresiva`;
      var p = document.createElement("p");
      p.innerHTML += str;
      p.setAttribute("class", "lead mx-auto")
      var dondeInsertar = document.getElementById('mostrar');
      dondeInsertar.append(p);
      document.getElementById('nombre').value = "";
      document.getElementById('edad').value = "";
    }else{
      console.log("por favor insertar los dos argumentos");
    }
}

var obj = {
  id : 'btn',
  cliquear : 'espera();'
}

export { compFormulario };
