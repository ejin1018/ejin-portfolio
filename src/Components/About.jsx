import React,{useRef} from "react";
// import { Canvas,useFrame, useLoader } from '@react-three/fiber';
// import { Environment } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const MacBook = ()=>{
//   useFrame(({clock})=>{
//     const a = clock.getElapsedTime();
//     ref.current.rotation.y = a;
//   })
//   const ref = useRef();
//   const gltf = useLoader(GLTFLoader,'./macbook/scene.gltf');
//   return <primitive object={gltf.scene} ref={ref}/>
// };

const About = ()=>{
  // const MacBookCam = (prop)=>{
  //   console.log(prop)
  // }
  return(
    <section className='about-wrap'>
      <h2 className='hidden-title'>About - 자기소개</h2>
      <div className="about-inner">
        <div className="about-right">
          <div className="about-right-top">
            {/* <div className="canvas-wrap">
              <Canvas onCreated={MacBookCam} camera={{position:[0,0.15,0.6]}}>
                <MacBook />
                <Environment preset='dawn'/>
              </Canvas>
            </div> */}
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
                <span className="personal-info-title lsp-four">생년월일</span>
                <span className="personal-info-text">1995. 10. 18</span>
              </p>
              <p className="personal-info">
                <span className="personal-info-title lsp-three">연락처</span>
                <span className="personal-info-text">01040175006</span>
              </p>
              <p className="personal-info">
                <span className="personal-info-title lsp-three">이메일</span>
                <span className="personal-info-text">wwijin95@gmail.com</span>
              </p>
              <p className="personal-info">
                <span className="personal-info-title lsp-two">학력</span>
                <span className="personal-info-text">2018.02<br/>공주대학교 시각디자인 전공 졸업</span>
              </p>
              <p className="personal-info">
                <span className="personal-info-title lsp-three">자격증</span>
                <span className="personal-info-text">SQL 개발자 (SQLD)</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About;