// rafce

import React, { useState } from "react";
import index from '../../paginas/CadastroDeUsuario/index'
import CadastroUsuario from "../../paginas/CadastroDeUsuario/index";

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

      <CadastroUsuario/>

    </div >
  );
};

export default Estados;
