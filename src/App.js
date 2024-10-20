import { FaRegSnowflake } from "react-icons/fa";
import './App.css';
import logo_wacs from "./logo_wacs.png";
import Main from "./main";
import Snowfall from 'react-snowfall';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo_wacs} alt='Logo' className='logo_wacs'/>
        <p className="titre">Menus Wepn</p>
        <FaRegSnowflake size={50} className="snow"/>
      </header>
        <Main/>
    </div>
  );
}

export default App;
