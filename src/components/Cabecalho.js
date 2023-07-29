import styles from './EstilosPaginas/Cabecalho.module.css'
import Nav from './Nav'

function Cabecalho({menu1,menu2}){
    return(

<div className={styles.navBar}>
    <Nav
    logo="Logo.svg" 
    descricao="logo" 
    titulo="Gerenci"
    />
    <p>{menu1}</p>
    <p>{menu2}</p>
</div>
    )
}
export default Cabecalho