

function mostraralerta(){
  alert('Se hizo Click en el titulo desde una function')
}

function mostrarMensaje(){
  alert('Se hizo click')
}

function haceclick(){
  var elemento = document.getElementById('contenido');
  elemento.addEventListener('mouseover', mostrarMensaje, false);
}

window.addEventListener('load', haceclick, false);