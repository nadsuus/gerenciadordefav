// rafce

import React, { useState } from "react";

const Estados = () => {
  // const [texto, setTexto] = useState(" Nadsuu");
  const [nome, setNome] = useState("Google");
  const [url, setUrl] = useState("www.google.com");
  const [favoritos, setFavoritos] = useState([]);

  function adicionaFavoritos(nome, url) {
    let favorito = { nome, url };
    // favoritos.push(favorito);
    // setFavoritos(favoritos);
    console.log(favoritos);
    // Esses 3 pontos significa espalhar, se a gente usasse
    // vai da um erro pois
    setFavoritos([...favoritos, favorito]);
  }

  function handleInput(nome) {
    setNome(nome);
  }

  function handleInput(url) {
    setUrl(url);
  }

  return (
    <div>
      <h1>Estados</h1>

      <br />
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
      </ul>
    </div>
  );
};

export default Estados;
