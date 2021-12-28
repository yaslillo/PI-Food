import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom'

export default function Card ({name,image,score,diet,id}) {
    return (


        <div className="cardComp">
            <Link to={"/recipes/" + id}> 
            <img className="imgcard" src={image} alt="img not found" width="200px" height="250"/>
            <h3>{ name }</h3>
            <h3>{ diet }</h3>
            <h3>{score}</h3>
            </Link>
        </div>
)


}








