import React from 'react';

const Abilities = ()=>{
  return(
    <section className='abilities-wrap'>
      <h2 className='hidden-title'>Abilities - 역량</h2>
      <div className='abilities-inner'>
        <div className='abilities-box'>
          <div className='abibox-title'>
            <h3 className='abibox-title-back en'>DESIGN</h3>
            <ul className='abibox-icon-list'>
              <li className='abibox-icon-list-ai'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"/></svg>
              </li>
              <li className='abibox-icon-list-xd'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adobe XD</title><path d="M18.835.3H5.165A5.165 5.165 0 0 0 0 5.465v13.07A5.165 5.165 0 0 0 5.165 23.7h13.67A5.165 5.165 0 0 0 24 18.535V5.465A5.165 5.165 0 0 0 18.835.3zm-6.106 16.491h-2.287c-.16 0-.274-.006-.338-.113-.215-.419-.43-.835-.644-1.248a45.137 45.137 0 0 0-.684-1.264 66.961 66.961 0 0 1-.717-1.305h-.016a52.7 52.7 0 0 1-.668 1.288c-.23.429-.459.856-.684 1.28A54.85 54.85 0 0 1 6 16.693c-.044.097-.119.107-.227.107H3.568c-.043 0-.067.017-.072-.026a.166.166 0 0 1 .024-.113l3.107-5.105L3.6 6.438c-.033-.043-.038-.078-.016-.107a.115.115 0 0 1 .097-.04h2.27a.36.36 0 0 1 .145.024.292.292 0 0 1 .096.089c.193.43.408.859.644 1.288.236.429.475.853.716 1.272.241.419.464.843.668 1.272h.016c.213-.44.43-.869.652-1.288.222-.419.447-.84.676-1.264.231-.425.453-.847.668-1.264a.246.246 0 0 1 .064-.106.239.239 0 0 1 .129-.024h2.109a.093.093 0 0 1 .112.067.093.093 0 0 1-.031.094l.001.004-2.995 4.943 3.204 5.249c.021.037.026.08.016.121-.01.036-.047.012-.112.023zm7.681-.42a8.02 8.02 0 0 1-1.626.483 8.63 8.63 0 0 1-1.547.145 5.006 5.006 0 0 1-2.149-.45 3.421 3.421 0 0 1-1.506-1.361 4.348 4.348 0 0 1-.548-2.278 4.202 4.202 0 0 1 .548-2.109 4.018 4.018 0 0 1 1.595-1.545 5.139 5.139 0 0 1 2.737-.572c.086.005.188.013.306.024V5.536c0-.075.032-.113.097-.113h2.028a.086.086 0 0 1 .097.073.096.096 0 0 1 0 .024v9.517c0 .183.008.381.024.596.016.214.03.407.04.579a.163.163 0 0 1-.096.159zm-2.457-5.812c.09.009.179.025.266.048v4.395a1.634 1.634 0 0 1-.354.064 4.965 4.965 0 0 1-.419.016 2.656 2.656 0 0 1-.83-.129 1.714 1.714 0 0 1-.676-.402 1.973 1.973 0 0 1-.451-.708 2.83 2.83 0 0 1-.169-1.031 2.217 2.217 0 0 1 .33-1.272c.213-.316.504-.571.845-.741.35-.173.736-.262 1.127-.258.111.002.221.007.331.018z"/></svg>
              </li>
              <li className='abibox-icon-list-figma'>
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
              </li>
            </ul>
          </div>
          <div className='abibox-content'>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>ADOBE ILLUSTRATOR</span>
              아이콘, 일러스트, 그래픽 제작 가능
            </p>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>ADOBE XD</span>
              웹 디자인, ‘네스트호텔 리뉴얼’ 작업
            </p>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>FIGMA</span>
              웹 디자인, 프로토타입 작업 가능
            </p>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>ant design,bootstrap,three js</span>
              빠른 작업을 위한 앤트 디자인,부트스트랩 사용 가능,three js로 심플한 3d 요소 삽입 가능
            </p>
          </div>
        </div>
        <div className='abilities-box'>
          <div className='abibox-title'>
            <h3 className='abibox-title-back en'>DESIGN</h3>
            <ul className='abibox-icon-list'>
              <li className='abibox-icon-list-ai'></li>
              <li className='abibox-icon-list-xd'></li>
              <li className='abibox-icon-list-figma'></li>
            </ul>
          </div>
          <div className='abibox-content'>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>ADOBE ILLUSTRATOR</span>
              아이콘, 일러스트, 그래픽 제작 가능
            </p>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>ADOBE XD</span>
              웹 디자인, ‘네스트호텔 리뉴얼’ 작업
            </p>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>FIGMA</span>
              웹 디자인, 프로토타입 작업 가능
            </p>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>ant design,bootstrap,three js</span>
              빠른 작업을 위한 앤트 디자인,부트스트랩 사용 가능,three js로 심플한 3d 요소 삽입 가능
            </p>
          </div>
        </div>
        <div className='abilities-box'>
          <div className='abibox-title'>
            <h3 className='abibox-title-back en'>DESIGN</h3>
            <ul className='abibox-icon-list'>
              <li className='abibox-icon-list-ai'></li>
              <li className='abibox-icon-list-xd'></li>
              <li className='abibox-icon-list-figma'></li>
            </ul>
          </div>
          <div className='abibox-content'>
            <div className='abibox-content-info'>
              <p className='abibox-content-program'>ADOBE ILLUSTRATOR</p>
              <p className='abibox-content-text'>아이콘, 일러스트, 그래픽 제작 가능</p>
            </div>
            <div className='abibox-content-text'>
              <p className='abibox-content-program'>ADOBE XD</p>
              <p className='abibox-content-text'>웹 디자인, ‘네스트호텔 리뉴얼’ 작업</p>
            </div>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>FIGMA</span>
              웹 디자인, 프로토타입 작업 가능
            </p>
            <p className='abibox-content-text'>
              <span className='abibox-content-program'>ant design,bootstrap,three js</span>
              빠른 작업을 위한 앤트 디자인,부트스트랩 사용 가능,three js로 심플한 3d 요소 삽입 가능
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Abilities;