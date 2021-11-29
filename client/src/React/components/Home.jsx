import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getRecipes,setRecipeOrder,filterCreated} from '../../redux/Action/index';
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';

export default function Home (){

const dispatch = useDispatch()
const allRecipes = useSelector((state) => state.recipes)
        console.log(allRecipes)
//Paginado.
const [currentPage,setCurrentPage] = useState(1);
const[recipesPerPage,setRecipesPerPage] =useState(9);
const indexOfLastRecipes = currentPage * recipesPerPage;
const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
const currentRecipes = allRecipes.slice(indexOfFirstRecipes,indexOfLastRecipes);

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}
useEffect(() =>{
    dispatch(getRecipes());
},[dispatch])

function handlerClick(e){
    e.preventDefault(getRecipes());
    dispatch(getRecipes());
}

    return(
        <div>
            <Link to='/recipes'>Crear Receta</Link>
            <h1>LAS MEJORES RECETAS</h1> 
            <button onClick={e=>{handlerClick(e)}}>
                volver a cargar recetas
            </button>
            <div>
                <select>
                    <option value= "see-all">Todos</option>
                    <option value= "score-asc">Ptje Asc</option>
                    <option value= "score-desc">Ptje Desc</option>
                    <option value= "alph-asc">A-Z</option>
                    <option value= "alph-desc">Z-A</option>
                </select>
                <select>
                    <option value="All">Todos</option>
                    <option value="diet">Tipo de dieta</option>
                </select>
                <select>
                    <option value="All">Todos</option>
                    <option value="Created">Creados</option>
                    <option value="api">Existentes</option>
                </select>
                <p> Aca va el paginado</p>
                <Paginado
                recipesPerPage= {recipesPerPage}
                allRecipes={ allRecipes.length}
                paginado={paginado}
                />
                <p> Aca va el paginado</p>
                { currentRecipes?.map((el) => {
                    return(
                        <div>
                        
                        <Card name={el.name} image={el.image} diet={el.diet} id={el.id}/>
                
                        </div>
                    );
                })}
                <Paginado
                recipesPerPage= {recipesPerPage}
                allRecipes={ allRecipes.length}
                paginado={paginado}
                />
                
                
            </div>
        </div>
    )
}
