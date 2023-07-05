import { useState } from "react";
// import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import styles from './App.module.css';
import './global.css';


function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
      <input className={styles.inputName} type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Nome Usuario Git" />
      {nomeUsuario.length > 4 &&
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      }
    </>
  )
}

export default App

{/* {formIsVisible && (
  <Formulario />
)}
<button type="button" onClick={() => setFormIsVisible(!formIsVisible)}>Toggle Form</button> */}