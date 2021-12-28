import axios from 'axios';
import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import'./Details.css'

export default function Details () {
const [detail,setDetail]=useState(null)
    const {id} = useParams();

    useEffect(() => {
        axios.get('/recipes/' + id)
        .then((info) => {
            setDetail(info.data)
        })
        return () => {
            setDetail(null)
        }
    }, [id])


    return (                                        
        <div>
            { 
                    detail ? 
                    <div className="cardDetails">
                        <img src={detail[0]?.image} alt="img not found" width="200px" height="250px"/>
                        <h1>Nombre de Receta:{detail[0]?.name}</h1>
                        <h2>Resumen:{detail[0]?.resume.replace(/<[^>]*>?/g, '')}</h2>
                        <h2>Nivel de comida saludable:{detail[0]?.healthylevel}</h2>
                        <h2>Paso a paso:{detail[0]?.stepbystep}</h2>
                        <h2>Puntuación:{detail[0]?.score}</h2>
                        <h2>Dietas:{!detail[0]?.createdIndb? detail[0]?.diet?.join(", ") : detail[0]?.diet?.map((el) => el.name).join(", ")}</h2>
                        </div>  
                : <p className="description">Cargando..........</p> 
            } 
            <div>
                            <Link to={'/home'}>
                                <button className="btnCreate">Volver</button>
                            </Link>
                            </div>
        </div>                                      
    )
}

