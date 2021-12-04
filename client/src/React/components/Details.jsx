import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getDetail} from '../../redux/Action/index';


export default function Detail () {
    const distpatch = useDispatch();
    const params = useParams();
    const myDetail = useSelector((state) => state.detail)
    
    useEffect(() => {
        distpatch(getDetail(params.id));
    }, [distpatch, params.id])


    return (
        <div>
            {
                myDetail.length > 0 ? 
                    <div>
                        <h1>Nombre de Receta:{myDetail.name}</h1>
                        <img src={myDetail.image} alt="" width="500px" height="700px"/>
                        <h2>Puntuación:{myDetail.score}</h2>
                        <p>Resumen:{myDetail.resume}</p>
                        <h3>Puntuación del plato:{myDetail.healthylevel}</h3>
                        <p>Paso a paso:{myDetail.stepbystep}</p>
                        <h5>Dietas:{ myDetail.diet.map((el) => el.name).join(", ")}</h5>
                    </div> 
                : <p>Cargando...</p>
            }
            <Link to='/home'>
                <button>Volver</button>
            </Link>
        </div>
    )
}