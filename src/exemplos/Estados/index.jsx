// rafce

import React, { useState } from "react";

const Estados = () => {
  // const [texto, setTexto] = useState(" Nadsuu");
  const [nomeSite, setNomeSite] = useState("");
  const [urlSite, setUrlSite] = useState("");
  const [favoritos, setFavoritos] = useState("");
  // let favoritos = [];


  function salvarFavoritos() {
    setFavoritos([...favoritos, { nomeSite, urlSite }]);
    console.log('favoritos', favoritos)
    localStorage.setItem("Favorito", JSON.stringify({}));
  }
  // const [favoritos, setFavoritos] = useState([]);

  // function adicionaFavoritos(nome, url) {
  //   let favorito = { nome, url };
  //   // favoritos.push(favorito);
  //   // setFavoritos(favoritos);
  //   console.log(favoritos);
  //   // Esses 3 pontos significa espalhar, se a gente usasse
  //   // vai da um erro pois
  //   setFavoritos([...favoritos, favorito]);
  // }

  // function handleInput(nome) {
  //   setNome(nome);
  // }

  // function handleInput(url) {
  //   setUrl(url);
  // }


  return (
    <div>
<ul>
      {favoritos[0] !== undefined &&
       favoritos.map((favorito) => (
       <li> {favorito.nomeSite} : {favorito.urlSite} </li>)) }
      
</ul>

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

      <input type="button" value="salvar" onClick={() => salvarFavoritos()} />
        </form>
      </section>
      {/* <br />
      <h2>Nome</h2>
      <input
        type="texto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <br />
      <h2>{url}</h2>
      <input
        type="texto"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => adicionaFavoritos(nome, url)}>adicionar</button>

      <ul>
        {favoritos.map((elemento) => (
          <li>{elemento.nome}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Estados;
