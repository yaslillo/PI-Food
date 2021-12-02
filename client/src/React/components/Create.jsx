import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getRecipeType,postRecipe,} from '../../redux/Action/index';
import { useDispatch,useSelector } from 'react-redux';


export default function RecipesCreate() {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)
        console.log(types)

    const [input,setInput] = useState({
                name:"",
                resume:"",
                score: "",
                stepbystep:"",
                healthylevel:"",
                image:"",
                diet:[]
    })
//Función que me dispara la acción......................................//
function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    console.log(input)
}
//-----------------------------------------------------------------------//
    useEffect(() => {
        dispatch(getRecipeType())
    },[])

//Función para disparar la acción de select-------------------------------//
function handleSelect(e){
    setInput({
        ...input,
        diet : [...input.diet, e.target.value]
    })
}
//Función para disparar la acción de la receta creada---------------------//
function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    dispatch(postRecipe(input))
    alert("Receta creada!!!")
    setInput({
        name:"",
        resume:"",
        score: "",
        stepbystep:"",
        healthylevel:"",
        image:"",
        diet:[]
    })
    
}
    return (
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <h1>Crea tu receta</h1>
            <form onSubmit={(e) =>handleSubmit(e)}>
                <div>
                    <label>Nombre del plato:</label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Resumen del plato:</label>
                    <input
                    type="text"
                    value={input.resume}
                    name="resume"
                    onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Puntuación del plato:</label>
                    <input
                    type="number"
                    value={input.score}
                    name="score"
                    onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Paso a paso:</label>
                    <input
                    type=""
                    value={input.stepbystep}
                    name="stepbystep"
                    onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Nivel saludable:</label>
                    <input
                    type="number"
                    value={input.healthylevel}
                    name="healthylevel"
                    onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                    type=""
                    value={input.image}
                    name="image"
                    onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Elegir dieta:</label>
                        <div>
                            <select onChange={(e) => handleSelect(e)}>
                                {types.map((el)=> (
                                    <option value={el.name}>{el.name}</option>
                                ))}
                            </select>
                            <ul><li>{input.diet.map(el => el + " ,")}</li></ul>
                            <button type='submit'>Crear Receta</button>
                        </div>
                </div>
            </form>
        </div>
    )
}