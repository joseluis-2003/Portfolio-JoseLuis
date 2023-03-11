//Ejercicio 1

// Obtener los botones
const blueButton = document.getElementById('blue-button');
const greenButton = document.getElementById('green-button');
const redButton = document.getElementById('red-button');
const resetButton = document.getElementById('reset-button');

// Obtener el elemento a cambiar de color
const cambiarColor = document.getElementById('cambiar-color');

// Añadir los event listeners a los botones
blueButton.addEventListener('click', cambiarTemaAzul);
greenButton.addEventListener('click', cambiarTemaVerde);
redButton.addEventListener('click', cambiarTemaRojo);
resetButton.addEventListener('click', resetTema);

// Funciones para cambiar el tema
function cambiarTemaAzul() {
  cambiarColor.style.backgroundColor = 'blue';
  cambiarColor.style.color = 'lightblue';
}

function cambiarTemaVerde() {
  cambiarColor.style.backgroundColor = 'green';
  cambiarColor.style.color = 'lightgreen';
}

function cambiarTemaRojo() {
  cambiarColor.style.backgroundColor = 'red';
  cambiarColor.style.color = 'pink';
}

function resetTema() {
  cambiarColor.style.backgroundColor = 'white';
  cambiarColor.style.color = 'black';
}

// Ejercicio 2 
filtrarProyectos("all")
function filtrarProyectos(c) {
  var x,i;
  x = document.getElementsByClassName("box");
  if(c == "all") c = "";
  for(i = 0; i < x.length; i++){
    removeClass(x[i], "show")
    if(x[i].className.indexOf(c) > -1) addClass(x[i],"show")
  }

}
function addClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for(i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) == -1){
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for ( i = 0; i < arr2.length; i++){
    while(arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



// Ejercicio 3
// Obtener el elemento <input> de HTML y agregar un controlador de eventos onBlur
var input = document.getElementById("miInput");
input.addEventListener("blur", validarInput);

function validarInput() {
  // Obtener el valor del input y quitar los espacios en blanco al principio y al final
  var valor = input.value.trim();

  // Verificar si el asunto no está vacío
  if (valor === "") {
    // Si está vacío, mostrar borde en rojo y mensaje de error en rojo debajo del input
    input.style.borderColor = "red";
    var mensajeError = document.createElement("p");
    mensajeError.textContent = "El asunto no puede estar vacío";
    mensajeError.style.color = "red";
    input.parentNode.insertBefore(mensajeError, input.nextSibling);
    return;
  }

  // Verificar si la dirección de correo es válida
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    // Si no es válida, mostrar borde en rojo y mensaje de error en rojo debajo del input
    input.style.borderColor = "red";
    var mensajeError = document.createElement("p");
    mensajeError.textContent = "La dirección de correo no es válida";
    mensajeError.style.color = "red";
    input.parentNode.insertBefore(mensajeError, input.nextSibling);
    return;
  }

  // Verificar si el cuerpo del mensaje no está vacío
  var cuerpo = document.getElementById("cuerpoMensaje").value.trim();
  if (cuerpo === "") {
    // Si está vacío, mostrar borde en rojo y mensaje de error en rojo debajo del input
    input.style.borderColor = redButton;
    var mensajeError = document.createElement("p");
    mensajeError.textContent = "El cuerpo del mensaje no puede estar vacío";
    mensajeError.style.color = redButton;
    input.parentNode.insertBefore(mensajeError, input.nextSibling);
    return;
  }

  // Si todo está correcto, mostrar borde en verde
  input.style.borderColor = "green";
}

