

class persona {
    constructor (nombre, apellido, altura){
        console.log('Me ejecutaron')
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura      
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
    }
    soyalto(){
        return this.altura > 1.7 
    }
}

class desarrollador extends persona {               //extends hace heredar a desarrollador de persona
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy un desarrollador(a)`)    
    }
}


/* var xoco = new persona('eduardo', 'lopez', 1.76)
var mn = new persona('male', 'heso', 1.60)
var an = new persona('anne', 'rapa',1.56) */