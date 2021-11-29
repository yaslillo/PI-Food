import React from 'react';
import {Link} from 'react-router-dom';

export default function Card ({name,image,diet,id}) {
    return (

        <div>
            <Link to={"/home/" + id}> 
            <h3>{name}</h3>
            <h5>{diet}</h5>
            <img src={image} alt="img not found" width="200px" height="250"/>
            </Link>
        </div>
                
    
    )
}







