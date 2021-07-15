const nombre = prompt('Cual es tu nombre');
// toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} está aprendiendo JavaScript Moderno`;

//asignar el valor hacia la variable producto
const producto = 'Monitor 24 pulgadas';

function hola(){
    console.log('ok');
    console.log('ok');
    console.log('ok');
    console.log('ok');
    console.log('ok');

}

// También se pueden crear arreglos
console.log([1, 2, 3, 4]);

// De la misma forma se pueden crear objetos
let obj = { nombre: "juan", profesion: "Desarrollador Web" }
console.log( obj );

// También se pueden imprimir resultados como tabla
console.table([1, 2, 3, 4]);

// o mostrar algún error
console.error("Algo salió mal");

// O enviar advertencias
console.warn("Eso no esta permitido");

// También monitorear el tiempo que tarda algo en ejecutarse
console.time('Hola'); 
console.warn("Eso no esta permitido"); 
console.warn("Eso no esta permitido");
console.warn("Eso no esta permitido");
console.timeEnd('Hola');