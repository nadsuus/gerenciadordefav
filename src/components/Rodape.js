import styles from "./EstilosPaginas/Rodape.module.css";

function Data() {
  const novaData = new Date();
  console.log(novaData);
  return novaData.toLocaleDateString();
}

function Rodape({ social1, social2, social3, descRodape }) {
  return (
    <div className={styles.footer}>
      {Rodape}
      <img className={styles.social} src={social1} alt={descRodape}></img>
      <img className={styles.social} src={social2} alt={descRodape}></img>
      <img className={styles.social} src={social3} alt={descRodape}></img>
      <p> {Data()} </p>
    </div>
  );
}

export default Rodape;
