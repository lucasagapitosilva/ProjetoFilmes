import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Filme from './Pages/Filme';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    )
}