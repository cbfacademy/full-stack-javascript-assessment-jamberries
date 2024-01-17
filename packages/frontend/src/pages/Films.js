import React, { useState, useEffect } from "react";

export default function Films() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/api/films")
        .then(res => res.json())
        .then(films => setFilms(films))
        .catch(error => console.error(error));
    }, [])

    return (
        <div>
            <h1>Film</h1>
            <ul>
                {films.map(film => (
                    <li key={film._id}>
                        <h3>{film.name}</h3>
                        <p>{film.overview}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}