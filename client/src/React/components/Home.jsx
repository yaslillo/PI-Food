import React, {  useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getRecipes} from '../../redux/Action/index';
import {Link} from 'react-router-dom';
import Card from './Card';

export default function Home (){

const dispatch = useDispatch()
const allRecipes = useSelector((state) => state.recipes)

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
                    <option value= "All">Todos</option>
                    <option value= "Asc">Ascendente</option>
                    <option value= "Desc">Descendente</option>
                </select>
                <select>
                    <option value="All">Todos</option>
                    <option value="score">Creados</option>
                    <option value="resume">Por dieta</option>
                    <option value="api">Existentes</option>
                </select>
                { allRecipes?.map((el) => {
                    return(
                        <div>
                            
                                <Card name={el.name} image={el.image} score={el.score} diet={el.diet} resume={el.resume}/>
                        </div>
                    
                    );
                })

                }
                
            </div>
        </div>
    )
}
