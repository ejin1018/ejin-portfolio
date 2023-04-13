import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=>{
  return(
    <section className="footer-wrap">
      <h2 className='hidden-title'>Footer</h2>
      <div className="footer-inner">
        <p className="en footer-sign">WORK<br/>WITH<br/>ME!</p>
        <div className="footer-box">
          <p className="en footer-box-title">Let's Interview</p>
          <Link to={`tel:01040175006`} className="en footer-box-text">+82 01040175006</Link>
          <Link to={`mailto:wwijin95@gmail.com`} className="en footer-box-text">wwijin95@gmail.com</Link>
        </div>
        <div className="footer-box">
          <p className="en footer-box-title">follow my -</p>
          <Link to='https://github.com/ejin1018' target={'_blank'} className="en footer-box-text under-line">Github</Link>
          <Link to='https://ej-note.notion.site/7cd5f540e7ab4f979e273a1cad064873?v=f0d75044d5234cab8dfad9f221be47ce' target={'_blank'} className="en footer-box-text under-line">Notion</Link>
        </div>
        <div className="footer-box">
          <p className="en footer-box-title">Remember! My-</p>
          <p className="en footer-box-text">Intro</p>
          <p className="en footer-box-text">Abilities</p>
          <p className="en footer-box-text">Works</p>
          <p className="en footer-box-text">Pieces</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;