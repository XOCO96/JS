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

 persona.prototype.soyalto = function() {
    return this.altura > 1.7
} 

/* persona.prototype.soyalto = () => {
    
    return this.altura > 1.7         //no da los valores esperados como la funcion anterior 
                                     //this referencia a lo que hay afuera de la funcion
                                     // this hace referencia a window, esto pasa en arrow functions
} */

var xoco = new persona('eduardo', 'lopez', 1.76)
var mn = new persona('male', 'heso', 1.60)
var an = new persona('anne', 'rapa',1.56)