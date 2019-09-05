// promesas paralelas

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



async function obtenerpersonajes(){
    var ids = [1, 2, 3, 4, 5] 
    var promesas = ids.map(id => obtenerpersonaje(id) )
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerpersonajes()

