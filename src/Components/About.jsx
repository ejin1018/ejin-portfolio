import React,{useRef} from "react";
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

const About = ()=>{
  const MacBookCam = (prop)=>{
    console.log(prop)
  }
  return(
    <section className='about-wrap'>
      <h2 className='hidden-title'>About - 자기소개</h2>
      <div className="about-inner">
        <div className="about-right">
          <div className="about-right-top">
            <div className="canvas-wrap">
              <Canvas onCreated={MacBookCam} camera={{position:[0,0.15,0.6]}}>
                <MacBook />
                <Environment preset='dawn'/>
              </Canvas>
            </div>
            <p className='about-promise'>
              문제에는 끈질기게 덤벼 해결해내는 <span className="bold-text">지구력</span>,<br/>
              유쾌한 성격과 리더십으로 모두의 입장을 이해하는 <span className="bold-text">분위기 메이커</span>입니다.<br/>
              <span className="bold-text">타협하지 않는 태도</span>로 접근성, 유지·보수까지 꽉 잡겠습니다.
            </p>
          </div>
          <div className="about-right-middle">
            <p className="about-name-ko">정이진</p>
            <p className="about-name-en en">Jeong E Jin</p>
          </div>
          <div className="about-right-bottom">
            <div className="more-infos">
              <p className="personal-info">
                <span className="personal-title">생년월일</span>
                1995. 10. 18
              </p>
              <p className="personal-info">
                <span className="personal-title">연락처</span>
                01040175006
              </p>
              <p className="personal-info">
                <span className="personal-title">이메일</span>
                wwijin95@gmail.com
              </p>
              <p className="personal-info">
                <span className="personal-title">학력</span>
                2018.02<br/>공주대학교 시각디자인 전공 졸업
              </p>
              <p className="personal-info">
                <span className="personal-title">자격증</span>
                2023.04<br/>SQL 개발자
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About;