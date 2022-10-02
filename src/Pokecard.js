import React from "react";
import './Pokecard.css'

const Pokecard = ({name, type, baseExperience, img}) => {
    return (
        <div id="pokecard-div">
            <h4>{name}</h4>
            <img src={img} alt="Pokemon card"/>
            <div>
                <p>Type: {type}</p>
                <p>EXP: {baseExperience}</p>
            </div>

        </div>
    )

}

export default Pokecard