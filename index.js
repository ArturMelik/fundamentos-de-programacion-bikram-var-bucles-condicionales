//Variables.

let varoableSinValor;

let booleano1 = false;
let booleano2 = true;

const PI = 3.14;
const TAU = 2 * PI;

//Booleanos
let booleanoAnd = booleano1 && booleano2;
let booleanoNot = !booleano1;
let booleanMix0 = booleano1 || (booleano2 && (booleano1 || (booleano1 && !booleano2)));

//Operadores
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

//Bucles 
let ContarHasta10_2 = 0;
for(let i = 0; i < 10; i++) {
    ContarHasta10_2++
}
console.log(ContarHasta10_2 === 10);
console.log("Valor requerido:",ContarHasta10_2);

let postI =0;
let postJ = 0;

for (let i = 0; i < 11; i++){
    postI = postI + postJ++;
}
console.log(postI);


