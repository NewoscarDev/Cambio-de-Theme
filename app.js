// Cambio de tema de la pagina web (De blanco a negro y de negro a blanco)

const colorfondo = document.querySelector('.fondo') // Clase fondo / Para cambiar el tema de la web.
const navegacion = document.querySelector('.tema') // Clase del boton / Para cambiar el tema de la web.
                  

// console.log (colorfondo.classList);

// Boton dark

const colorfondos = document.createElement('a')

colorfondos.textContent = 'Tema Dark';
colorfondos.href = '#';

console.log(colorfondos)

navegacion.insertBefore(colorfondos, navegacion.children[3])


// Ejecutar el cambio de tema Dark
colorfondos.onclick = colorfondoscript;
function colorfondoscript () {
    colorfondo.classList.add('fondo-blanco')
    colorfondo.classList.remove(colorfondo)  
}


