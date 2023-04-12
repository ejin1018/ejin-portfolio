import React,{useRef} from "react";
import { Link } from "react-router-dom";
import { Canvas,useFrame, useLoader } from '@react-three/fiber';
import { Environment } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const MacBook = ()=>{
  useFrame(({clock})=>{
    const a = clock.getElapsedTime();
    ref.current.rotation.y = a;
  })
  const ref = useRef();
  const gltf = useLoader(GLTFLoader,'./macbook/scene.gltf');
  return <primitive object={gltf.scene} ref={ref}/>
};


const Intro = ()=>{
  const MacBookCam = (prop)=>{
    console.log(prop)
  }
  return(
    <div className="intro-wrap">
      <div className="intro-back-rect"></div>
      <div className="intro-inner">
        <div className="intro-back-text en">Front-end developer, good at react, vanilla javascript, sass</div>
        <section className="intro-contents">
          <h2 className="intro-slogan">
            <span className="qmark-l bold-text en">&ldquo;</span>
            <span className="bold-text">목표</span>
            로 향하는<br/>길을 이어주는<br/>프론트앤드 개발자
            <span className="qmark-r bold-text en">&rdquo;</span>
            <br/><span className="bold-text">정이진</span> 
            입니다
          </h2>
          <div className="intro-photo">
            <div className="intro-photo-back"></div>
            <div className="intro-photo-ejin"></div>
            <div className="intro-photo-line">
              <ul className="line-bottom-linklist">
                <li><Link to="https://github.com/ejin1018" className="linklist-btn en">GITHUB</Link></li>
                <li><Link to="https://github.com/ejin1018" className="linklist-btn en">RESUME</Link></li>
                <li><Link to="https://ej-note.notion.site/b0198295e1c04dd29907f546a31719f4" className="linklist-btn en">CODE-NOTE</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <div className="intro-bottom">
          <ul className="colorTheme-btns">
            <li>
              <Link to="/" className="pinkNgold colorTheme-btn">1</Link>
            </li>
            <li>
              <Link to="/" className="beigeNblue colorTheme-btn">2</Link>
            </li>
            <li>
              <Link to="/" className="deepGreen colorTheme-btn">3</Link>
            </li>
          </ul>
        </div>

        <div className="canvas-wrap">
          <Canvas onCreated={MacBookCam} camera={{position:[0,0.15,0.6]}}>
            <MacBook />
            <Environment preset='dawn'/>
          </Canvas>
        </div>

      </div>
    </div>
  )
}

export default Intro;