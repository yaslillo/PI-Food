import React from "react";
import { Link } from "react-router-dom"
import  './LandingPage.css';


export default function LandingPage() {
    return (
        <div className="Container">
            <h1>Bienvenidos!!!</h1>
            <Link  to='/home' >
                <img className="logo"src="https://cdn.imusa.com.co/resources/2017/11/vector-utensilios.png" alt="to home" />
            </Link>
            <h1>Proyecto Individual para Henry Bootcamp: Yasna Lillo.</h1>
        </div>
    )
}