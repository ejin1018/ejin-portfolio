import React from "react";

const Footer = ()=>{
  return(
    <section className="footer-wrap">
      <h2 className='hidden-title'>Footer</h2>
      <div className="footer-inner">
        <p className="en footer-sign">WORK<br/>WITH<br/>ME!</p>
        <div className="footer-box">
          <p className="en footer-box-title">Let's Interview</p>
          <p className="en footer-box-text">+82 01040175006</p>
          <p className="en footer-box-text">wwijin95@gmail.com</p>
        </div>
        <div className="footer-box">
          <p className="en footer-box-title">follow my -</p>
          <p className="en footer-box-text under-line">Github</p>
          <p className="en footer-box-text under-line">Notion</p>
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