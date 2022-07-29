// Pequeño script para el cambio del tema de los botones y del fondo (Body)

const boton = document.querySelector('.boton-light')
const fondo = document.querySelector('.fondo')

boton.addEventListener('click', cambiarfondo);

// Function de los botones y cambio de fondo

function cambiarfondo () { 
    if(fondo.classList.contains('fondo2')) {
        fondo.classList.remove('fondo2');
        boton.classList.remove('boton-dark');
        boton.textContent = 'Cambiar tema Dark'
    } else {
        fondo.classList.add('fondo2');
        boton.classList.add('boton-dark');
        boton.textContent = 'Cambiar tema Ligth'
    }
}