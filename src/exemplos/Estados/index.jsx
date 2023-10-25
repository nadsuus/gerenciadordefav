// rafce

import React, { useState } from "react";
import styles from '../../components/EstilosPaginas/SalvarFavorito.module.css'

const Estados = () => {
  const [nomeSite, setNomeSite] = useState("");
  const [urlSite, setUrlSite] = useState("");
  const [favoritos, setFavoritos] = useState("");
  const [importante, setimportante] = useState([]);


  function salvarFavoritos() {
    setFavoritos([...favoritos, { nomeSite, urlSite }]);
    console.log('favoritos', favoritos)
    localStorage.setItem("Favorito", JSON.stringify({}));
  }
  return (
    <div>
      <dl>
        {favoritos[0] !== undefined &&
          favoritos.map((favorito) => (
            < div>
              <dt style={{ color: "white", backgroundColor: 'lightpink' }} key={favorito.nomeSite}> {favorito.nomeSite} </dt>
              <dd style={{ color: "white" }} > {favorito.urlSite} </dd>

              <li style={favorito.importante ? { color: 'red' } : {}}> {favorito.nomeSite} : {favorito.url} : {favorito.importante ? 'impotante' : 'gg'} </li>

            </div >
          ))
        }

      </dl >

      <h1>Conteudo</h1>

      <section>
        <form action="" method="get" onSubmit={() => alert("Favorito salvo")}>
          <label htmlFor="Nome">NOME</label>
          <input
            name="nomeSite"
            onChange={(evento) => {
              setNomeSite(evento.target.value);
              console.log(nomeSite);
            }}
          ></input>

          <br />

          <label htmlFor="">URL</label>
          <input
            name="urlSite"
            onChange={(evento) => {
              setUrlSite(evento.target.value);
              console.log(urlSite);
            }}
          />

          <input type="checkbox" name="checkbok" onChange={(evento) =>
            setimportante(importante)} ></input>

          <label htmlFor="checkkbox">Importante</label>
          <input type="button" value="salvar" onClick={() => salvarFavoritos()} />
        </form>
      </section>

    </div >
  );
};

export default Estados;
