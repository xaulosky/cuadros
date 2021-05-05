let app = document.querySelector("#app");
let left = document.querySelector("#left");
let right = document.querySelector("#right");
let menu = document.querySelector("#menu");
let cuadro = document.querySelector("#cuadro");
let cuadroTextos = document.querySelector("#cuadro-textos");
let plantilla = document.querySelector("#plantilla");

// Creacion de elementos
let plantillas = document.createElement("div");
plantillas.id = "plantillas";
plantillas.innerHTML = `<div id="plantillas">
<h2 class="titulo"> Plantillas </h2> 
<img src="img/5.PNG" alt="">
<img src="img/6.PNG" alt="">
<img src="img/7.PNG" alt="">
<img src="img/11.PNG" alt="">
<img src="img/12.PNG" alt="">
<img src="img/14.PNG" alt="">
<img src="img/16.PNG" alt="">
<img src="img/17.PNG" alt="">
</div>`;

let titulo = document.createElement("input", "text");
titulo.id = "titulo";
titulo.type = "text";
titulo.placeholder = "Agregar titulo";

let subtitulo = document.createElement("input", "text");
subtitulo.id = "subtitulo";
subtitulo.type = "text";
subtitulo.placeholder = "Agregar subtitulo";

let parrafo = document.createElement("input", "text");
parrafo.id = "parrafo";
parrafo.type = "text";
parrafo.placeholder = "Agregar parrafo";

let textos = document.createElement("div");
textos.id = "textos";

let fotos = document.createElement("div");
fotos.id = "fotos";
fotos.innerHTML = `
<h2>Fotos</h2>
<input type="file" name="" id="file-upload" accept="image/*">
<div id="file-preview-zone">
</div>
<span> Tamaño </span>
<input type="range" min="20" max="360" id="dimension">
<button id="eliminar">Quitar imagen</button>
`;

// let botonDeTexto = document.createElement("div");
// botonDeTexto.id = "botonDeTexto";
// botonDeTexto.innerHTML = `
//     <button> Agregar Texto </button>
// `;

// botonDeTexto.addEventListener("click", ()=>{

//     console.log("creacion de cuadro de texto");
//     let textoEnCuadroo = document.createElement("div");
//     textosEnCuadro.innerHTML = `
//         <input type="text" placeholder="Agregar texto" >
//     `;
//     textosEnCuadro.id = "#textosEnCuadro";
//     cuadroTextos.appendChild(textoEnCuadroo);

//     console.log();
// });

// añadiendo elementos
left.appendChild(plantillas);
textos.innerHTML = `<h2 class="titulo">Textos</h2>`;
textos.appendChild(titulo);
textos.appendChild(subtitulo);
textos.appendChild(parrafo);
// textos.appendChild(botonDeTexto);
document.querySelector("#m-plantillas").classList =
    "colorterciario centro blanco";

// funciones
menu.addEventListener("click", (e) => {
    $("#m-plantillas").removeClass("colorterciario");
    $("#m-plantillas").removeClass("blanco");
    $("#m-textos").removeClass("colorterciario");
    $("#m-textos").removeClass("blanco");
    $("#m-imagenes").removeClass("colorterciario");
    $("#m-imagenes").removeClass("blanco");
  if (e.target.id == "m-plantillas") {
    left.innerHTML = "";
    left.appendChild(plantillas);
    document.querySelector(`#${e.target.id}`).classList =
    "colorterciario centro blanco";
  }
  if (e.target.id == "m-textos") {
    left.innerHTML = "";
    left.appendChild(textos);

    document.querySelector(`#${e.target.id}`).classList =
    "colorterciario centro blanco";
  }
  if (e.target.id == "m-imagenes") {
    left.innerHTML = "";
    left.appendChild(fotos);
    let dimension = document.querySelector("#dimension");
    dimension.addEventListener("input", () => {
      if (document.querySelector("#file-preview")) {
        document.querySelector(
          "#file-preview"
        ).style.width = `${dimension.value}px`;
      }
    });
    // previsualizar imagen

    var fileUpload = document.getElementById("file-upload");
    fileUpload.onchange = function (e) {
      readFile(e.srcElement);
      document.querySelector("#eliminar").addEventListener("click", () => {
        cuadro.removeChild(document.querySelector("#file-preview"));
      });
    };
    document.querySelector(`#${e.target.id}`).classList =
    "colorterciario centro blanco";
  }
});

plantillas.addEventListener("click", (e) => {
  if (e.target.src) {
    let imgplantilla = `<img class="imagen-cuadro" src="${e.target.src}">`;
    cuadro.innerHTML = imgplantilla;
  }
});
var textosEnCuadro = [];
let guardarTitulo = document.createElement("div");
guardarTitulo.id = "tituloGuardado";
let guardarParrafo = document.createElement("div");
guardarParrafo.id = "guardarParrafo";
let guardarSubtitulo = document.createElement("div");
guardarSubtitulo.id = "guardarSubtitulo";

textos.onchange = (e) => {
    
  if (e.target.id == "titulo") {
    guardarTitulo.innerHTML = `<h1 class="titulo"> ${titulo.value} </h1>`;
    cuadroTextos.appendChild(guardarTitulo);
    $("#tituloGuardado").draggable({
      containment: "#cuadro",
      scroll: false,
    });

    $("#tituloGuardado").addClass("cursiva");
    
  }
  if (e.target.id == "subtitulo") {
    guardarSubtitulo.innerHTML = `<h1 class="subtitulo"> ${subtitulo.value} </h1>`;
    cuadroTextos.appendChild(guardarSubtitulo);
    $("#guardarSubtitulo").draggable({
      containment: "#cuadro",
      scroll: false,
    });
  }
  if (e.target.id == "parrafo") {
    guardarParrafo.innerHTML = `<h1 class="parrafo"> ${parrafo.value} </h1>`;
    cuadroTextos.appendChild(guardarParrafo);
    $("#guardarParrafo").draggable({
      containment: "#cuadro",
      scroll: false,
    });
  }
};

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var filePreview = document.createElement("img");
      filePreview.id = "file-preview";
      //e.target.result contents the base64 data from the image uploaded
      filePreview.src = e.target.result;

      var previewZone = document.getElementById("file-preview-zone");
      previewZone.appendChild(filePreview);
      cuadroTextos.appendChild(filePreview);
      $("#file-preview").draggable({
        containment: "#plantilla",
        scroll: false,
      });
    };

    reader.readAsDataURL(input.files[0]);
  }
}
