var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

// Creacion de objetos
var fondo = {
  url: "tile.png",
  cargaOK: false,
};

var vaca = {
  url: "vaca.png",
  cargaOK: false,
};

//creacion del objeto de fondo
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", () => {
  fondo.cargaOK = true;
  dibujar();
}); //propiedad de carga con funcion temporal para modificar el estado de carga y llamar la funcion dibujar

//creacion del objeto de vaca
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", () => {
  vaca.cargaOK = true;
  dibujar();
}); //propiedad de carga con funcion temporal para modificar el estado de carga y llamar la funcion dibujar

//funcion de dibujar los animales con coordenadas aleatorias
function dibujar() {
  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK == true) {
    for (let v = 0; v < 1; v++) {
      x = redondear(0, vp.width - vaca.imagen.width);
      y = redondear(0, vp.height - vaca.imagen.height);
      papel.drawImage(vaca.imagen, x, y);
      console.log("🚀 ~ vaca.imagen", vaca.imagen);
      console.log("🚀 ~ x", x);
      console.log("🚀 ~ y", y);
    }
  }
}

//funcion de redondear
function redondear(min, max) {
  var resultado = Math.round(Math.random() * (max - min) + min);
  return resultado;
}

//-----------Codigo para mover un objeto-------------//

//variables de las teclas con keys
const teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};
// variables para el movimiento
var moverx = 150;
var movery = 150;

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
  dibujar();
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      console.log("arriba");
      moverObjeto(moverx, movery - movimiento, papel);
      movery -= movimiento;
      break;
    case teclas.DOWN:
      console.log("abajo");
      moverObjeto(moverx, movery + movimiento, papel);
      movery += movimiento;
      break;
    case teclas.LEFT:
      console.log("izquierda");
      moverObjeto(moverx - movimiento, movery, papel);
      moverx -= movimiento;
      break;
    case teclas.RIGHT:
      console.log("derecha");
      moverObjeto(moverx + movimiento, movery, papel);
      moverx += movimiento;
      break;
  }
}

function moverObjeto(xinicial, yinicial, lienzo) {
  lienzo.drawImage(vaca.imagen, xinicial, yinicial);
}
