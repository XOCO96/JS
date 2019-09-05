        //prototipos

function persona(nombre, apellido){
    console.log('Me ejecutaron')
    this.nombre = nombre
    this.apellido = apellido
    
}

persona.prototype.saludar = function() {
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

var xoco = new persona('eduardo', 'lopez')
var mn = new persona('male', 'heso')
var an = new persona('anne', 'rapa')