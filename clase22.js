        //prototipos

function persona(nombre, apellido, altura){
    console.log('Me ejecutaron')
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    
}

persona.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

/* persona.prototype.soyalto = function() {
    return this.altura > 1.7
} */

persona.prototype.soyalto = () => this.altura > 1.7         //no da los valores esperados como la funcion anterior

var xoco = new persona('eduardo', 'lopez', 1.66)
var mn = new persona('male', 'heso', 1.80)
var an = new persona('anne', 'rapa',1.76)