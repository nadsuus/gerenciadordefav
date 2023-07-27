import styles from './Cabecalho.module.css'

function Cabecalho({logo,descricao,titulo,menu1,menu2}){
    return(

<div className={styles.navBar}>
    <img className={styles.logo} src={logo} alt={descricao}></img>
    <h2>{titulo}</h2>
    <p>{menu1}</p>
    <p>{menu2}</p>
</div>
    )
}
export default Cabecalho