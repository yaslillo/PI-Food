import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom'

export default function Card ({name,image,score,diet,id}) {
    return (


        <div className="cardComp">
            <Link to={"/recipes/" + id}> 
            <h3>{ name }</h3>
            <h3>{ diet }</h3>
            <h3>{score}</h3>
            <img src={image} alt="img not found" width="150px" height="200"/>
            </Link>
        </div>
)


}









