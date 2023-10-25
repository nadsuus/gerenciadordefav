import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from './paginas/Principal'
import TelaLogin from './paginas/LoginDeUsuario'
import Cadastro from './paginas/CadastroDeUsuario'

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas