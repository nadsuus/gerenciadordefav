import styles from './EstilosPaginas/Nav.module.css'

function Nav({logo,titulo,descricao}){
    return(
        <div className={styles.nav}>
    <img className={styles.logo} src={logo} alt={descricao}></img>
    <h2 className={styles.titulo} >{titulo}</h2>
        </div>
    )
}
export default Nav