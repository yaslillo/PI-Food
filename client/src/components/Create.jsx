import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {getRecipeType,postRecipe,} from '../../src/redux/Action/index';
import { useDispatch,useSelector } from 'react-redux';
import './Create.css';


export default function RecipesCreate() {
    const dispatch = useDispatch()
    const types = useSelector((state) => state.types)

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

//Función para disparar la acción de select-------------------------------//
function handleSelect(e){
    setInput({
        ...input,
        diet : [...input.diet, e.target.value]
    })
    console.log(input.diet)
}

//Función para disparar la acción de la receta creada---------------------//
function handleSubmit(e){
    e.preventDefault();
const {name,resume,score,stepbystep,healthylevel,image,diet} = input;

if(name === undefined || name.length < 3) {
    return alert ('Nombre invalido');

}else if (resume === undefined || resume.length < 5){
    return alert ('Resumen invalido');

}else if (score === undefined || score < 10){

    setInput({
        ...input,
        score: "",
    });
    return alert ('Puntaje incorrecto')
}else if (stepbystep === undefined){
    return alert ('Completar campo')
}else if(healthylevel === undefined || healthylevel < 10){
    setInput ({
        ...input,
        healthylevel: "",
    })
}else if(image === undefined){
    return alert('Imagen invalida')
}else if (diet === undefined ){
    return alert('No se eligió dieta')
}

dispatch(postRecipe(input));
alert ('Receta creada');
setInput({
            name : "",
            resume : "",
            score : "",
            stepbystep: "",
            healthylevel : "",
            image : "",
            diet : [],
})

}


useEffect(() => {
    dispatch(getRecipeType())
},[dispatch]);

    return (
        <div className="cardContainer">
            <h1 >Crea tu receta</h1>
            <form onSubmit={(e) =>handleSubmit(e)}>
                <div>
                    <label>Nombre del plato:</label>
                    <input
                    type="text"
                    value={input.name}
                    name="name"
                    onChange={e => handleChange(e)}/>
                </div>
                <div >
                    <label>Resumen del plato:</label>
                    <input
                    type="text"
                    value={input.resume}
                    name="resume"
                    onChange={e => handleChange(e)}/>
                </div>
                <div >
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
                        <div>
                            <select onChange={(e) => handleSelect(e)}>
                                {types.map((el)=> (
                                    <option value={el.name}>{el.name}</option>
                                ))}
                            </select>
                            <ul><li>{input.diet.map(el => el + " ,")}</li></ul>
                            <button className="btnCreate" type='submit'>Crear Receta</button>
                        </div>
                </div>
            </form>
        </div>
    )
}

<Link  to='/home'><button className="btnCreate">Volver</button></Link>