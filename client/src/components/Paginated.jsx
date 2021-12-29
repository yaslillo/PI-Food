import React from 'react';
import './Paginated.css';
import { Link } from 'react-router-dom';

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <section className="btnPag">
            {pageNumbers &&
                pageNumbers.map((number) => (
                    <Link to="/home">
                        <button key={number} onClick={() => paginado(number)}>
                            {number}
                        </button>
                    </Link>
                ))}
        </section>
    );
}
