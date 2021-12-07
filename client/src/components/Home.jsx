import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {getRecipes, orderByScore, orderByAlphabetics, setFilterByDiets,filterCreated } from '../../src/redux/Action/index';
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginated';
import SearchBar from "./SearchBar";
import './Home.css';

export default function Home (){
const dispatch = useDispatch()
const allRecipes = useSelector((state) => state.recipes)

//Paginado.-----------------------------------------------------------------------//
const [currentPage, setCurrentPage] = useState(1);
const [recipesPerPage, setRecipesPerPage] = useState(9);
const [order, setOrder] = useState('');
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



//Filtro por puntuación.-----------------------------------------------------------//
function handleOrderByScore(e){
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
}
//---------------------------------------------------------------------------------//
//Filtro para ordenar alfabeticamente;
function handleOrderByAlpha(e){
    e.preventDefault();
    dispatch(orderByAlphabetics(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
}
//-----------------------------------------------------------------------------------//
//Filtro por tipo de diet;
function handleSetFilterByDiets(e) {
    e.preventDefault();
    dispatch(setFilterByDiets(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
}
//------------------------------------------------------------------------------------//
//Filtro por Creados o existentes;
function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
}
//------------------------------------------------------------------------------------//
    return(
        <div>
            <h1 className="text">LAS MEJORES RECETAS</h1> 
            <Link to='/recipe/'className="linkCreate">
                <button className="button">Crear Receta</button>
                </Link>
                <div>
                <select className="btnCreate" onChange={e => handleOrderByScore(e)}>
                    <option value="all">Orden por puntuación</option>
                    <option value="asc">Puntuación Asc</option>
                    <option value="desc">Puntuación Desc</option>
                </select> 
                <select className="btnCreate" onChange={e => handleOrderByAlpha(e)}>
                    <option value="all">Orden Alfabetico</option>
                    <option value="A-Z">Orden de A - Z</option>
                    <option value="Z-A">Orden de Z - A</option>
                </select> 
                <select className="btnCreate"onChange={e => handleSetFilterByDiets(e)}>
                    <option value="all"> Tipo de dieta</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="dairy free">Dairy Free</option>
                    <option value="lacto ovo vegetarian">Lacto ovo Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="fodmap friendly">Fodmap Friendly</option>
                    <option value="whole 30">Whole 30</option>
                </select>
                <select className="btnCreate" onChange={e => handleFilterCreated(e)}>
                    <option value="All"> Todos</option>
                    <option value="created">Creados</option>
                    <option value="api">Existentes</option>
                </select>
                </div>
                <SearchBar/>
                <Paginado
                recipesPerPage= {recipesPerPage}
                allRecipes={ allRecipes.length}
                paginado={paginado}
                />
                <div className="card">
                { currentRecipes?.map((el) => {
                    return(
                        <div className="thumb">

                            <Link to={`/${el.id}`}>
                                <Card key={el.id} id={el.id} name={el.name} image={el.image} diet={el.diet}/>
                            </Link>
                        </div>
                    );
                })}
                <div>
                <Paginado
                recipesPerPage= {recipesPerPage}
                allRecipes={ allRecipes.length}
                paginado={paginado}
                />
                </div>
            </div>
        </div>
    )
}
