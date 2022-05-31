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
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}` //Connexion à L'Api 
      const res = await axios.get(url)
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray);
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
          <input type="text" onChange={handleChange} placeholder="Entrer le nom du pokemon en anglais"></input>
        </label>
      </form>
      {pokemonData.map((data) => 
      {
        return (
          <div className="container">
            <div className="Sprite">      {/* La class pour les photos du pokémon en version normal et shiny*/}
              <img src= {data.sprites["front_default"]}/>
              <img src= {data.sprites["front_shiny"]}/>
              <img src= {data.sprites["back_default"]}/>
              <img src= {data.sprites["back_shiny"]}/>
            </div>
              <div className="divTable"> {/* La class pour les informations du pokémon récupéré de L'Api */}
                <div className="divTableBody"></div>
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Taille</div>
                <div className="divTableCell">{" "}{Math.round(data.height * 10)} centimètres </div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Poids</div>
                <div className="divTableCell">{" "}{Math.round(data.weight /10)} kilos</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Nombre de bataille</div>
                <div className="divTableCell">{data.game_indices.length}</div>
              </div>
            </div>
          </div>
      
        )
      })}
    </div>
  )
}

export default App;