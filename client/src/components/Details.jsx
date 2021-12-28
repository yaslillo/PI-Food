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
                        <h1>Nombre de Receta:</h1><li>{detail[0]?.name}</li>
                        <img className="detail"src={detail[0]?.image} alt="img not found" width="200px" height="250px"/>
                        <h1>Resumen:</h1><li>{detail[0]?.resume.replace(/<[^>]*>?/g, '')}</li>
                        <h1>Nivel de comida saludable:</h1><li>{detail[0]?.healthylevel}</li>
                        <h1>Paso a paso:</h1><li>{detail[0]?.stepbystep}</li>
                        <h1>Puntuación:</h1><li>{detail[0]?.score}</li>
                        <h1>Dietas:</h1><li>{!detail[0]?.createdIndb? detail[0]?.diet?.join(", ") : detail[0]?.diet?.map((el) => el.name).join(", ")}</li>
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

