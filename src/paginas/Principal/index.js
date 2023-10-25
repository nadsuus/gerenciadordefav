import styles from './principal.module.css'
import Cabecalho from '../../components/Cabecalho'
import Rodape from '../../components/Rodape'
function Principal() {
    return (
        <div>
            <Cabecalho logo="imagens/header-logo.png" titulo="Supermercado Favorito" />
            <Rodape logo="imagens/header-logo.png" />
        </div>
    )
}

export default Principal