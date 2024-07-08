// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy = [...pointsList]
console.log(pointsListCopy)

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy}
console.log(toyCopy)

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.

const ptsList = [32, 54, 21, 64, 75, 43];
const ptsList2 = [54,87,99,65,32];
const fullPtsList = [...ptsList, ...ptsList2]
console.log(fullPtsList)

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const fullToys ={...toy2, ...toyUpdate}
console.log(fullToys)

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operators.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
[color1, color2, ...rest] = colors
colorsUpdate = [color1, ...rest]
console.log(colorsUpdate)