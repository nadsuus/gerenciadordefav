import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components//Conteudo";
import Rodape from "./components/Rodape";
// import Estados from "./exemplos/Estados";

function App() {
  return (
    <div>
      <Cabecalho menu1="adicionar" menu2="ajuda" />
      <Conteudo tituloPagina="Bem vindo ao Gerenciador de Favoritos" />
      <Rodape
        social1="facebook.svg"
        social2="Twitter.svg"
        social3="Instagram.svg"/>

      {/* <Estados /> */}
    </div>
  );
}

export default App;
