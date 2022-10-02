import React from "react";
import './Pokedex.css'
import Pokecard from "./Pokecard";

const Pokedex = ({pokemon}) => {
    return(
        <div id="pokedex-div">
            {pokemon.map(p => (
                <Pokecard key={p.id} name={p.name} type={p.type} baseExperience={p.base_experience} 
                img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} />
            ))}

        </div>
    )

}

export default Pokedex