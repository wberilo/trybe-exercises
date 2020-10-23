const fetch = require('node-fetch')
const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = async () => {
  try{
    const result = await fetch(API_URL,myObject)
    .then((result)=>result.json())
    return result;
  }
  catch (error){
    console.log(error)
  }
};

fetchJoke().then((a)=>console.log(a))
