import React from "react";
import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <div className='Container'>
            <h1>Welcome</h1>
            <Link to='/home' >
                <img className="logo"src="https://cdn.imusa.com.co/resources/2017/11/vector-utensilios.png" alt="to home" />
                <button>Ingresar</button>
            </Link>
        </div>
    )
}