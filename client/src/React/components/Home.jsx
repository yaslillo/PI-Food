import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getRecipes} from '../../redux/Action/index';
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';

export default function Home (){

const dispatch = useDispatch()
const allRecipes = useSelector((state) => state.recipes)
        console.log(allRecipes)
//Paginado.-----------------------------------------------------------------------//
const [currentPage,setCurrentPage] = useState(1);
const[recipesPerPage,setRecipesPerPage] =useState(9);
const indexOfLastRecipes = currentPage * recipesPerPage;
const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
const currentRecipes = allRecipes.slice(indexOfFirstRecipes,indexOfLastRecipes);


const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}
//---------------------------------------------------------------------------------//

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
            <button onClick={e => { handlerClick (e)}}>
                volver a cargar recetas
                </button>
            <div>
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select
                >
                    <option value= "All">Todos</option>
                    <option value="dairy free">dairy free</option>
                    <option value= "fodmap friendly">fodmap friendly</option>
                    <option value="gluten free">gluten free</option>
                    <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
                    <option value= "paleolithic">paleolithic</option>
                    <option value= "primal">primal</option>
                    <option value="vegan">vegan</option>
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
                <Paginado
                recipesPerPage= {recipesPerPage}
                allRecipes={ allRecipes.length}
                paginado={paginado}
                />
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
