import './App.css';
import { Reset } from 'styled-reset';
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Intro from './Components/Intro';

function App() {
  return (
    <>
      <Routes>
        <Route to="/intro" element="<Intro/>" />
      </Routes>
      <Reset />
      <Header />
      <Intro />
    </>
  );
}

export default App;
