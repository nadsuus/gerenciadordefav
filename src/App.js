import './App.css';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

function App() {

  return (
    <div className="App">
      <Cabecalho 
      logo="logo.svg" 
      descricao="logo" 
      titulo="Gerenci" 
      menu1="adicionar" 
      menu2="ajuda"/>

      <Conteudo tituloPagina="Bem vindo ao Gerenciador de Favoritos"/>
      
      <Rodape 
      social1="./components/Elementos/facebook.svg/150" 
      social2="./components/Elementos/Twitter.svg/150"
      social3="./components/Elementos/Instagram.svg/150"/>

    </div>
  );
}

export default App;
