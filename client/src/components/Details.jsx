import axios from 'axios';
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import'./Details.css'

export default function Details () {
const [detail,setDetail]=useState(null)
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:3001/recipes/' + id)
        .then((info) => {
            setDetail(info.data)
        })
        return () => {
            setDetail(null)
        }
    }, [id])


    return (
        <div className="detail">
            { 
                    detail ? 
                    <div>
                        <h1>Nombre de Receta:{detail[0].name}</h1>
                        <img src={detail[0].image} alt="img not found" width="200px" height="250px"/>
                        <h2>Puntuación:{detail[0].score}</h2>
                        <h3>Resumen{detail[0].resume}</h3>
                        <h2>Puntuación del plato:{detail[0].healthylevel}</h2>
                        <h3 >Paso a paso:{detail[0].stepbystep}</h3>
                        <h2>Dietas:{!detail[0].createdIndb? detail[0].diet?.join(", ") : detail[0].diet?.map((el) => el.name).join(", ")}</h2>
                        </div>  
                : <p>Cargando..........</p> 
            } 
            <div>
                            <Link to={'/home'}>
                                <button>Volver</button>
                            </Link>
                            </div>
        </div>
    )
}

