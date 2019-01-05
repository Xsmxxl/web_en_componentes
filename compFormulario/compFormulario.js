import { incluye } from '.././incluir.js';

var nomb = "invitado";

var compFormulario = {
    crear: function(){
      var div = document.createElement("div");
      div.id="Div2"
      div.setAttribute("class", "container");
      div.setAttribute("w3-include-html", "compFormulario/compFormulario.html");
      var dondeInsertar = document.getElementById('principal');
      dondeInsertar.append(div);
      incluye();
    },
    cliquear: async function(){
      //window.onload = function(){
        var btn = await document.getElementById('btn');
        await btn.onclick = ()=>{
            nomb = document.getElementById('nombre').value;
            var ed = document.getElementById('edad').value;
            // console.log(nomb+" "+ed);
            if(nomb != "" && ed !=""){
              compMostrar(nomb, ed);
              document.getElementById('nombre').value = "";
              document.getElementById('edad').value = "";
            }else{
              alert("favor de llenar los campos requeridos");
            }
        //};
        btn.ontouchstart = ()=>{
            nomb = document.getElementById('nombre').value;
            var ed = document.getElementById('edad').value;
            // console.log(nomb+" "+ed);
            if(nomb != "" && ed !=""){
              compMostrar(nomb, ed);
              document.getElementById('nombre').value = "";
              document.getElementById('edad').value = "";
            }else{
              alert("favor de llenar los campos requeridos");
            }
        };
      }
    }
}

var compMostrar = (nombre, edad)=>{
    var str = `Hola ${nombre} bienvenido/a a ésta webApp progresiva`;
    var p = document.createElement("p");
    p.innerHTML += str;
    p.setAttribute("class", "lead mx-auto")
    var dondeInsertar = document.getElementById('mostrar');
    dondeInsertar.append(p);
}

export { compFormulario };
