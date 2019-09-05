// 

const API_URL= 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opt = { crossDomain: true}


function obtenerpersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    
    $.get(url, opt, function (persona) {
        console.log(`hola, yo soy ${persona.name}`)
        if(callback){
            callback()
        }
    })

}

obtenerpersonaje(1, function(){
    obtenerpersonaje(2, function(){
        obtenerpersonaje(3, function(){
            obtenerpersonaje(4, function(){
                obtenerpersonaje(5)
            })
        })
    })    
})



