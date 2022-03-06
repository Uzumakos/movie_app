import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com/?apikey=993e4965';

const App = () => {
    const [fim, setFim ] = useState([]);

    const chacheFim = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setFim(data.Search);
    }

    useEffect(() => {
        chacheFim('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>Bon Fim</h1>

            <div className="search">
                <input 
                    placeholder="Chache fim ou an"
                    value="Avengers"
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            {
                fim?.lenght > 0
                    ? (
                        <div className="container">
                         <MovieCard movie1={fim[0]} />
                        </div>
                    ) : (
                       <div className="empty">

                       </div>
                    ) 

            }

          
        </div>
    );
}

export default App;
