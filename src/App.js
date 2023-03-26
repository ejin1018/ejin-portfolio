import React,{useEffect} from 'react';
import { Reset } from 'styled-reset';
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Intro from './Components/Intro';
import './App.css';
import './sass/style.scss';


function App() {
  useEffect(()=>{
    let colorTheme = document.querySelector('.colorTheme');
    let colorThemeBtns = document.querySelectorAll('.colorTheme-btn');
    
    colorThemeBtns.forEach((btns,index)=>{
      btns.addEventListener('click',function(){
        if(index == 0){
          colorTheme.classList.remove('beigeNblue');
          colorTheme.classList.remove('deepGreen');
          colorTheme.classList.add('pinkNgold');
        }else if(index == 1){
          colorTheme.classList.remove('pinkNgold');
          colorTheme.classList.remove('deepGreen');
          colorTheme.classList.add('beigeNblue');
        }else if(index == 2){
          colorTheme.classList.remove('beigeNblue');
          colorTheme.classList.remove('pinkNgold');
          colorTheme.classList.add('deepGreen');
        }
      })
    })
  },[])
  return (
    <>
      <Routes>
        <Route to="/" element="<Intro/>" />
      </Routes>
      <Reset />
      <div className='colorTheme pinkNgold'>
        <Header />
        <Intro />
      </div>
    </>
  );
}

export default App;
