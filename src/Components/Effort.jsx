import React from 'react';

const Effort = ()=>{
  return(
    <section className='effort-wrap'>
      <h2 className="hidden-title">Effort - 노력</h2>
      <div className="effort-inner">
        <div className="effort-left">
          <h3 className="effort-title en">Hand Writing</h3>
          <div className="effort-imgs hand-imgs">
            <img src="/images/effort/hand-write0.JPG" alt="click 이벤트에 대해 공부한 손코딩 이미지입니다." />
            <img src="/images/effort/hand-write1.JPG" alt="리액트 Props에 대해 공부한 손코딩 이미지입니다." />
            <img src="/images/effort/hand-write2.JPG" alt="querySelectorAll과 forEach 에 대해 공부한 손코딩 이미지입니다." />
          </div>
          <p className="effort-text">
            <span>취미가 손코딩인 개발자</span> <br/> 헷갈리는 개념은 아무것도 참고하지 않고 적을 수 있을 때까지 손코딩 해봅니다.
          </p>
        </div>
        <div className="effort-right">
          <h3 className="effort-title en">Code Note</h3>
          <div className="effort-imgs note-imgs">
            <img src="/images/effort/code-note-img0.png" alt="개발 공부 과정을 담은 코드 노트 노션의 전체 목록입니다." />
            <img src="/images/effort/code-note-img1.png" alt="코드 노션 중 과정을 기록한 노트의 일부입니다." />
          </div>
          <p className="effort-text">
            <span>개념, 오류는 모두 기록하는 개발자</span> <br/> 개발 과정에서 배운 개념과 마주친 오류들, 개발 과정을 기록한 일지입니다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Effort;