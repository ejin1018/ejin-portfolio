import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Intro = ()=>{
  return(
    <div className="intro-wrap">
      <div className="intro-back-rect"></div>
        <Marquee loop={0} speed={40} className="intro-back-marquee">
          <div className="intro-back-text en">&nbsp; Front-end developer, good at react, vanilla javascript, sass</div>
        </Marquee>
      <div className="intro-inner">
        <section className="intro-contents">
          <div className="intro-sayhi">
            <h2 className="intro-slogan">
              <span className="qmark-l bold-text en">&ldquo;</span>
              <span className="bold-text">목표</span>
              로 향하는<br/>길을 이어주는<br/>프론트앤드 개발자
              <span className="qmark-r bold-text en">&rdquo;</span>
              <br/><span className="bold-text">정이진</span> 
              입니다
            </h2>
            <div className="intro-buttons">
              <Link 
                to='https://github.com/ejin1018/ejin-portfolio/blob/main/ejin-resume.pdf' 
                target={'_blank'} 
                className="intro-pf-link"
              >
                <svg className="intro-pf-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ReadMe</title><path d="M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8847-3.133 6.138-3.133h3.7373A2.0007 2.0007 0 0 0 24 15.5131V5.2697a2.0007 2.0007 0 0 0-1.9887-2.0006Zm-11.928 11.0557a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9524a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm10.8037 5.0696a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9484a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144v.9524z"/></svg>
                <p className="intro-pf-name">이력서</p>
              </Link>
              <Link 
                to='https://github.com/ejin1018' 
                target={'_blank'} 
                className="intro-pf-link"
              >
                <svg className="intro-pf-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                <p className="intro-pf-name">깃허브</p>
              </Link>
              <Link 
                to='https://ej-note.notion.site/7cd5f540e7ab4f979e273a1cad064873?v=f0d75044d5234cab8dfad9f221be47ce' 
                target={'_blank'} 
                className="intro-pf-link"
              >
                <svg className="intro-pf-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
                <p className="intro-pf-name">코드노트</p>
              </Link>
            </div>
          </div>
          <div className="intro-photo">
            <div className="intro-photo-back"></div>
            <div className="intro-photo-ejin"></div>
            <div className="intro-photo-line">
          </div>
          </div>
        </section>
        <div className="intro-bottom">
          <p className="colorTheme-here en">choose the color<br/>you want!</p>
          <ul className="colorTheme-btns">
            <li>
              <Link to="/" className="deepGreen colorTheme-btn"></Link>
            </li>
            <li>
              <Link to="/" className="beigeNblue colorTheme-btn"></Link>
            </li>
            <li>
              <Link to="/" className="pinkNgold colorTheme-btn"></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Intro;