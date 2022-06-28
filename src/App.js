import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/Main/Main.js';
import { animals } from './animalArray.js';

function App() {
  return (
    <div className="App">
      <div id="Header"><Header greeting={'Alchemy Animal Farm'} /></div>
      <Main animal={ animals }/>
      <div id="Footer"><Footer copyright={'Copyright Alchemy Codelab 2021-2022'}/></div>
    </div>
  );
}

export default App;
