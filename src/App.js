import React,{ useEffect } from 'react';
import { Reset } from 'styled-reset';
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Abilities from './Components/Abilities';
import Footer from './Components/Footer';
import Scene from './Components/Scene'
import './App.css';
import './sass/style.scss';


function App() {
  useEffect(()=>{
    let colorTheme = document.querySelector('.colorTheme');
    let colorThemeBtns = document.querySelectorAll('.colorTheme-btn');
    
    colorThemeBtns.forEach((btns,index)=>{
      btns.addEventListener('click',function(){
        if(index === 0){
          colorTheme.classList.remove('beigeNblue');
          colorTheme.classList.remove('pinkNgold');
          colorTheme.classList.add('deepGreen');
        }else if(index === 1){
          colorTheme.classList.remove('pinkNgold');
          colorTheme.classList.remove('deepGreen');
          colorTheme.classList.add('beigeNblue');
        }else if(index === 2){
          colorTheme.classList.remove('beigeNblue');
          colorTheme.classList.remove('deepGreen');
          colorTheme.classList.add('pinkNgold');
        }
      })
    })
  },[])
  return (
    <>
      <Routes>
        <Route to="/" element={<App/>} />
      </Routes>
      <Reset />
      <div className='colorTheme deepGreen'>
        <Header />
        <Intro />
        <Abilities />
        <Scene />
        <Footer />
      </div>
    </>
  );
}

export default App;
