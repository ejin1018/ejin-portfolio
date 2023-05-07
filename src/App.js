import React,{ useEffect } from 'react';
import { Reset } from 'styled-reset';
import Header from './Components/Header';
import Intro from './Components/Intro';
import About from './Components/About';
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

    let sections = document.querySelectorAll('section');
    let menus = document.querySelectorAll('.nav-btn');
    menus.forEach((menu,index)=>{
      menu.addEventListener('click',function(){
        if(index === 0 || index === 4){
          window.scrollTo({
            top:0,
            behavior:'smooth'
          })
        }else if(index === 1 || index === 5){
          window.scrollTo({
            top:sections[1].offsetTop,
            behavior:'smooth'
          })
        }else if(index === 2 || index === 6){
          window.scrollTo({
            top:sections[2].offsetTop,
            behavior:'smooth'
          })
        }else if(index === 3 || index === 7){
          window.scrollTo({
            top:sections[3].offsetTop,
            behavior:'smooth'
          })
        }
      })
    })

    window.addEventListener('scroll',function(){

      let nowY = window.scrollY;
      if(nowY < sections[1].offsetTop){
        menus.forEach((menu)=>{
          menu.classList.remove('nav-btn-on');
        })
        menus[0].classList.add('nav-btn-on');
      }else if(nowY < sections[2].offsetTop){
        menus.forEach((menu)=>{
          menu.classList.remove('nav-btn-on');
        })
        menus[1].classList.add('nav-btn-on');
      }else if(nowY < sections[3].offsetTop){
        menus.forEach((menu)=>{
          menu.classList.remove('nav-btn-on');
        })
        menus[2].classList.add('nav-btn-on');
      }else{
        menus.forEach((menu)=>{
          menu.classList.remove('nav-btn-on');
        })
        menus[3].classList.add('nav-btn-on');
      }
    })
  },[])
  return (
    <>
      <Reset />
      <div className='colorTheme pinkNgold'>
        <Header />
        <Intro />
        <About />
        <Abilities />
        <Scene />
        <Footer />
      </div>
    </>
  );
}

export default App;
