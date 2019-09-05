var nombre = 'Xocoyotzin', apellido = 'Lopez'

//      clase1)
/* var edad = 22

edad='22 años'
 
console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad + ' años')

var pes = 55 */

//  clase 2
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = nombre.toLowerCase()

var primerLetraDelNombre =  nombre.charAt(0)
var cantidaddeletrasdelnombre = nombre.length
//var nombrecompleto = nombre + ' ' + apellido

var nombrecompleto= `${nombre} ${apellido}`

//var str = nombre.charAt(1) + nombre.charAt(2)
var str = nombre.substr(1,2)

//  reto de clase 2
var ultimaletradelnombre = nombre.charAt(cantidaddeletrasdelnombre -1)