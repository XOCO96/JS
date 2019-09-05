// 

const API_URL= 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opt = { crossDomain: true}


function obtenerpersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    
    $
        .get(url, opt, callback)
        .fail(() => {
            console.log(`sucedio un error, no se obtubo el personaje ${id}`)
    })

}

obtenerpersonaje(1, function(personaje){
    console.log(`hola, yo soy ${personaje.name}`)

    obtenerpersonaje(2, function(){
        console.log(`hola, yo soy ${personaje.name}`)

        obtenerpersonaje(3, function(){
            console.log(`hola, yo soy ${personaje.name}`)

            obtenerpersonaje(4, function(){
                console.log(`hola, yo soy ${personaje.name}`)

                obtenerpersonaje(5, function(personaje){
                    console.log(`hola, yo soy ${personaje.name}`)

                })
            })
        })
    })    
})



