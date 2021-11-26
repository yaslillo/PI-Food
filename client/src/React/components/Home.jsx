import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getRecipes} from '../../redux/Action/index';
import {Link} from 'react-router-dom'

export default function Home (){

const dispatch = useDispatch()
const allRecipes = useSelector((state) => state.recipes)

useEffect(() =>{
    dispatch(getRecipes());
},[])

function handlerClick(e){
    e.preventDefault(getRecipes());
}

    return(
        <div>
            <Link to='/recipes'>Crear Receta</Link>
            <h1>LAS MEJORES RECETAS</h1> 
            <button onClick={e=>{handlerClick(e)}}>
                Buscar
            </button>
            <div>
                <select>
                    <option value= "Asc">Ascendente</option>
                    <option value= "Desc">Descendente</option>
                </select>
                <select>
                    <option></option>
                </select>
            </div>
        </div>
    )
}