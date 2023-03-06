import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const FetchApi = () => {
  const [pokemon, setPokemon] = useState([])

    const fetchData = ()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then((response) => {
            console.log(response)
            setPokemon(response.data.results);
        })
        .catch((error) => {
            console.log(error)
        })
        console.log("I'm running before our promise gives me data")
    }

        
        
        



    return (

    <div>
        <h1>Pokemon List</h1>
        <button onClick={fetchData}>Fetch Pokemon</button>
        {
            pokemon.map((onePoke, idx) => {
            return(
                <div key={idx}>
                    <h3>{onePoke.name}</h3>
                </div>
            )})
        }

    </div>
  )
}

export default FetchApi