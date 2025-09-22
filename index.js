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

let sumaPAres = 0;
for(let i = 0; i < 10; i++){
    if(i % 2 == 0){
        sumaPares += i
    }else{
        "No es numero par";
    }
}

//Variables.
let variableValorNumerico = 5;
const miNombre = "Artur";
const miNumeroFav = 7;

//Booleanos.

let booleanOr = booleano1 || booleano2;
let booleanoMix1 = (booleano1 && 
TAU/2 === PI) || (variableValorNumerico >= miNumeroFav);

let seisNoEsNueve = 6 !== 9;
let booleanoMix2 = 
variableValorNumerico => 1 || variableValorNumerico < -(miNumeroFav * TAU);

//Operadores
valorSuma = miNumeroFav + variableValorNumerico;
valorResta = miNumeroFav - variableValorNumerico;
valorMultiplicacion = miNumeroFav * variableValorNumerico;
valorDivision = miNumeroFav / 3;

//Bucles
let contarHasta10 = 0;
while(contarHasta10 < 10){
    contarHasta10++;
}

let preI = 0;
let preJ = 0;

for(let i = 0; i < 11; i++){
    preI += ++preJ;
}

let sumaImpares = 0;
for(let i = 0; i < 10; i++){
    if(i % 2 !== 0) {
        sumaImpares += i;
    } // Si es diferente a 0 que sume.
}
console.log("La suma de impares son:", sumaImpares);

