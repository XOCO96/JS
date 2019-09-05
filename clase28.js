// 

const API_URL= 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opt = { crossDomain: true}


const onpeopleresponse = function (persona){
    console.log(`hola yo soy ${persona.name}`)
}

$.get(lukeurl, opt, onpeopleresponse)

