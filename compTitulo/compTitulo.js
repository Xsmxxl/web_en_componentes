import { w3 } from '.././w3.js';
// import { nomb } from '.././compFormulario/compFormulario.js';

var compTitulo = (titulo, id)=>{
    var myObject= { 'id' : id, 'titulo' : titulo };
    // var titulo = "titulo";
    // var id = "titulo";
    // var str = `<h1 id=${id} class="display-1"> Este es un ${titulo} nuevo </h1>`;
    var div = document.createElement("div");
    div.setAttribute("id", "Div1");
    div.setAttribute("w3-include-html", "compTitulo/compTitulo.html");
    // div.innerHTML += str;
    var dondeInsertar = document.getElementById('principal');
    dondeInsertar.append(div);

    w3.includeHTML(()=>{
      w3.displayObject("Div1", myObject);
      // aquí va todo el código callback
      // var prueba = nomb || "aún no se recive la variable";
      // console.log("titulo arrancando: " + prueba);
    });
}


export { compTitulo };
