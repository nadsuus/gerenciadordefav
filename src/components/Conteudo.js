import styles from './EstilosPaginas/Conteudo.module.css'

function Conteudo({tituloPagina}){
    return(
        <div>
            <h1 className={styles.main}>{tituloPagina}</h1>
        </div>
    )
}
export default Conteudo