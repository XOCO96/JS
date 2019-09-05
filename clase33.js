// promesas encadenadass

const API_URL= 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opt = { crossDomain: true}


function obtenerpersonaje(id) {

    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        .get(url, opt, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
    }

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerpersonaje(1)
    .then(personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)  
        return obtenerpersonaje(2) 
    })
    .then(personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)  
        return obtenerpersonaje(3) 
    })
    .then(personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)  
        return obtenerpersonaje(4) 
        })
    .then(personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)  
        return obtenerpersonaje(5) 
        })
    .then(personaje => {
        console.log(`El personaje 5 es ${personaje.name}`)  
        })
    .catch(onError)



