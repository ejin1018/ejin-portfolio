import React from "react";
import { Link } from "react-router-dom";

const Intro = ()=>{
  return(
    <div className="intro-wrap">
      <div className="intro-back-rect"></div>
      <div className="intro-back-text">FRONT-END DEVELOPER FRONT-END DEVELOPER</div>
      <div className="intro-inner">
        <p className="intro-slogan"><span className="qmark">"</span><span className="blod-text">목표</span>로 향하는 길을 이어주는 프론트앤드 개발자<span className="qmark">"</span><span className="bold-text">정이진</span> 입니다</p>
        <div className="intro-photo">
          <div className="intro-photo-back"></div>
          <div className="intro-photo-ejin"></div>
          <div className="intro-photo-line"></div>
        </div>
        <div className="intro-bottom">
          <ul className="intro-bottom-linklist">
            <li><Link to="https://github.com/ejin1018">GITHUB</Link></li>
            <li><Link to="https://github.com/ejin1018">RESUME</Link></li>
            <li><Link to="https://ej-note.notion.site/b0198295e1c04dd29907f546a31719f4">CODE-NOTE</Link></li>
          </ul>
          <Link to="mailto:wwijin95@gmail.com">wwijin95@gmail.com</Link>
        </div>
      </div>
    </div>
  )
}

export default Intro;