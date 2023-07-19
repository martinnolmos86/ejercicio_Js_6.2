const datosPersonales = {
  nombre: "Martin",
  apellido: "Olmos",
  edad: 37,
  altura: 1.87,
  eresDesarrollador: true,
};

const edad = datosPersonales.edad;

const listaDatosPersonales = [
  datosPersonales,
  {
    nombre: "Atilio",
    apellido: "David",
    edad: 37,
    altura: 1.7,
    eresDesarrollador: false,
  },
  {
    nombre: "Chipi",
    apellido: "Bahillo",
    edad: 36,
    altura: 1.74,
    eresDesarrollador: true,
  },
];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenadaPorEdad = listaDatosPersonales.sort(
  (a, b) => b.edad - a.edad
);

// Imprimir resultados en la consola
console.log("Datos personales:", datosPersonales);
console.log("Edad:", edad);
console.log("Lista de datos personales:", listaDatosPersonales);
console.log("Lista ordenada por edad:", listaOrdenadaPorEdad);
