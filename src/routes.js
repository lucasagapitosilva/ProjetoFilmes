import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Header from './Componentes/Header';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    )
}