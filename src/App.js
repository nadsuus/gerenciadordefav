import './App.css';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components//Conteudo';
import Rodape from './components/Rodape';

function App() {

  return (
    <div className="App">
      <Cabecalho logo="Logo.svg" 
      descricao="logo" 
      titulo="Gerenci" 
      menu1="adicionar" 
      menu2="ajuda"/>

      <Conteudo tituloPagina="Bem vindo ao Gerenciador de Favoritos"/>
      
      <Rodape 
      social1="facebook.svg" 
      social2="Twitter.svg"
      social3="Instagram.svg"
      />

    </div>
  );
}

export default App;
