import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../src/redux/Action/index";
import './SearchBar.css';

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("");


function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameRecipes(name))
}
        return(
            <div>
                <input 
                className="input"
                type= 'text'
                placeholder="Buscar..."
                onChange={(e) => handleInputChange(e)}
                />
                <button type='submit' onClick={(e) => handleSubmit(e)} className="btn">
                    <span className="btnCreate">Buscar</span>
                </button>
            </div>
        )

        
}
