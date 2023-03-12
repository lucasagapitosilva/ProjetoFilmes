import {useEffect, useState} from 'react';
import api from '../../Services/api';
import {Link} from 'react-router-dom';

import './style.css'

// API URL:  /movie/now_playing?api_key=fcd0af7da8afc0e1599c2c3b6e0f64c7&language=pt-BR

export default function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "fcd0af7da8afc0e1599c2c3b6e0f64c7",
                    language: "pt-BR",
                    page: 1,
                }
            });

            //console.log(response.data.results.slice(0,10));

            setFilmes(response.data.results.slice(0,10));
        }

        loadFilmes();
    }, []);

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong className="title">{filme.title}</strong>
                            <img className="img" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}