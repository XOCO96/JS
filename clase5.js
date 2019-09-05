/* var nombre = 'eduardo'

function imprimirnombremayusculas(n){
    n = n.toUpperCase()
    console.log(n)
}
imprimirnombremayusculas(nombre) */

//   clase 6   //

/* var nombre1 = 'eduardo'
var nombre2 = 'xocoyotzin' */

var eduardo = {
    nombre: 'Ed',
    apellido : 'lopez',
    edad : 22
}
var xocoyotzin = {
    nombre: 'xoco',
    apellido : 'perez',
    edad : 23
}

/* function imprimirnombremayusculas(n){
    n = n.toUpperCase()
    console.log(n)
} */
/* function imprimirnombremayusculas(persina){
    console.log(persina.nombre.toUpperCase())
} */
function imprimirnombremayusculas({nombre}){
    console.log(nombre.toUpperCase())
}

imprimirnombremayusculas(eduardo)
imprimirnombremayusculas(xocoyotzin)
imprimirnombremayusculas({nombre:'pepito'})