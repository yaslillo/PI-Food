import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameRecipes } from "../../redux/Action/index";


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [state, setState] = useState("")


    const recipesAll = useSelector((state) => state.recipes)

    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const toSearch = name.toLowerCase()
        const validate = recipesAll.filter((el) => el.name.toLowerCase().includes(toSearch))
        if (validate.length < 1 || validate.length === null)
            return alert('no recipe with that name found')
        dispatch(getNameRecipes(name))
    }
    // function handleKeyPress(event) {
    //     if (event.key === 13) {
    //         console.log(event)
    //     }

    // }
    return (
        <div className='searchBar'>
            <input
                className="input"
                type="Text"
                placeholder="Buscar..."
                onChange={(e) => handleInputChange(e)}
            // onkeyPress={handleKeyPress}

            />
            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn">
                <span class="material-icons">search</span>
            </button>
        </div>
    )
}