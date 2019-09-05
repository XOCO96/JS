
//   PASAR FUNCIONES COMO PARAMETROS
class persona {
    constructor (nombre, apellido, altura){
        console.log('Me ejecutaron')
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura      
    }
    saludar(fn){
        var nombre= this.nombre
        var apellido = this.apellido
        console.log(`hola me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }
    soyalto(){
        return this.altura > 1.7 
    }
}

class desarrollador extends persona {               //extends hace heredar a desarrollador de persona
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`hola me llamo ${nombre} ${apellido} y soy un desarrollador(a)`)    
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function repondersaludo( nombre, apellido, esDev){
    console.log(`hola, buen dia ${nombre} ${apellido}`)    
    if(esDev){
        console.log(`ah mira no sabia que eras un desarrollador(a)`)    
    }
}

var xoco = new persona('eduardo', 'lopez', 1.76)
var mn = new persona('male', 'heso', 1.60)
var an = new desarrollador('anne', 'rapa',1.56)

xoco.saludar()
mn.saludar(repondersaludo)
an.saludar(repondersaludo)
