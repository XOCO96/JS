var signo = prompt('Cual es tu signo')

switch(signo){
    case 'leo':
        console.log(`Hola ${signo} tendras mucha fortuna en el amor este año`)
        break
    case 'libra':
        console.log(`Hola ${signo} tendras mucha fortuna en el estudio y amor este año`)
        break
    default:
        console.log(`Wow, ¡${signo.toUpperCase()}!, parace un signo nuevo, pero no esta en mi base de datos, introduce un signo zodiacal valido.`)
        break
}