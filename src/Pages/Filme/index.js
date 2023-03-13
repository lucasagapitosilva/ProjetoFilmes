import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../Services/api';
import './style.css'
import {toast} from 'react-toastify';

export default function Filme() {

    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "fcd0af7da8afc0e1599c2c3b6e0f64c7",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    setLoading(false);
                })
                .catch(() => {
                    console.log("Filme não encontrado!")
                    navigate("/", { replace: true });
                    return;
                })
        }

        loadFilme()

        return () => {
            console.log("desmontado")
        }
    }, [navigate, id]);

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
        let filmesSalvo = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvo.some((filmes) => filmes.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme já está salvo na sua lista !")
        }

        filmesSalvo.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvo));
        toast.success("Seu filme foi salvo com sucesso !")

    }

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avalianção: {filme.vote_average.toFixed(1)} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}