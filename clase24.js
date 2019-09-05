//herencia

function heredaDe (prototipohijo, prototipopadre){
    var fn = function(){}
    fn.prototype = prototipopadre.prototype
    prototipohijo.prototype = new fn
    prototipohijo.prototype.constructor = prototipohijo
}


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

function desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(desarrollador,persona)

desarrollador.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy un desarrollador(a)`)
}

/* var xoco = new persona('eduardo', 'lopez', 1.76)
var mn = new persona('male', 'heso', 1.60)
var an = new persona('anne', 'rapa',1.56) */