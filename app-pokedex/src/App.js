import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const App = () => 
{
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const getPokemon = async () => 
  {
    const toArray = [];
    try
    {
      const url = "https://pokeapi.co/api/v2/pokemon/${pokemon}"
      const res = await axios.get(url)
      console.log(res)
    } 
    catch (e) 
    {
      console.log(e)
    }
  }

  const handleChange = (e) => 
  {
    setPokemon(e.target.value.toLowerCase())
  };

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    getPokemon();
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleChange} placeholder="Enter Pokemon Name"></input>
        </label>
      </form>

    </div>
  );
}

export default App;