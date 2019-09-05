// 

const API_URL= 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opt = { crossDomain: true}


const onpeopleresponse = function (persona) {
    console.log(`hola, yo soy ${persona.name}`)
}

function obtenerpersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opt, onpeopleresponse)
}

obtenerpersonaje(5)
obtenerpersonaje(20)
obtenerpersonaje(1)

