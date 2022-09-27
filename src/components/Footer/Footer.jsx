import React, { forwardRef, useRef } from 'react'
import '../Footer/Footer.css';
import Drag from './Drag/Drag';
import Main from './Main/Main';
const Footer = forwardRef((props, ref) => {
  const touchRef = useRef()

  return (
    <div className='footerEsas' ref={ref}>
      <div class="brand-side-logo">
            <svg viewBox="0 0 249 696.6">
                <path fill='#0bd46e' d="M8.6,202.5L8.6,202.5c-17.3-31.4-5.9-70.8,25.5-88.1l0,0L240.4,0.7l0,0c17.3,31.4,5.9,70.8-25.5,88.1l0,0 L8.6,202.5z"></path>
                <path   stroke="#0bd46e" fill='transparent' d="M9.1,285.4L9.1,285.4c-14.2-25.7-4.9-57.9,20.8-72.1l0,0l168.7-93l0,0c14.1,25.7,4.8,57.9-20.8,72.1l0,0 L9.1,285.4z"></path>
                <path stroke="#0bd46e" fill='transparent' d="M11.5,358.8L11.5,358.8c-12.9-23.3-4.4-52.6,18.9-65.5l0,0l153.3-84.5l0,0c12.9,23.3,4.4,52.6-18.9,65.5l0,0 L11.5,358.8z"></path>
                <path opacity='0.6' stroke="#0bd46e" fill='transparent' d="M14,432.2L14,432.2c-11.6-21-3.9-47.3,17-58.9l0,0l137.9-76l0,0c11.6,21,3.9,47.3-17,58.9L14,432.2z"></path>
                <path opacity='0.5' stroke="#0bd46e" fill='transparent' d="M16.5,505.7L16.5,505.7c-10.3-18.6-3.5-42,15.1-52.3L154,385.9l0,0c10.3,18.6,3.5,42-15.1,52.3L16.5,505.7z"></path>
                <path opacity='0.4' stroke="#0bd46e" fill='transparent' d="M19,579.1L19,579.1c-9-16.3-3.1-36.7,13.2-45.7l0,0l107-59l0,0c9,16.3,3.1,36.7-13.2,45.7L19,579.1z"></path>
                <path opacity='0.3' stroke="#0bd46e" fill='transparent' d="M21.5,642.5L21.5,642.5c-7.7-13.9-2.6-31.4,11.3-39.1l91.6-50.5l0,0c7.7,13.9,2.6,31.4-11.3,39.1L21.5,642.5z"></path>
                <path opacity='0.2' stroke="#0bd46e" fill='transparent' d="M24,695.9L24,695.9c-6.4-11.6-2.2-26.1,9.4-32.5l76.2-42l0,0c6.4,11.6,2.2,26.1-9.4,32.5l0,0L24,695.9z"></path>
            </svg>
        </div>
      <div className='footer-up'>
        <div className='connect'>CONNECT</div>
        <Main/>
        <div>
          <div className="flexTouch" ref={touchRef}>
            <i className='icon-linkedin'></i>
            <a aria-label="Get in Touch " className="rolling-text getInTouch">
              <div className="spans">
                <span className="block" >
                  <span className="letter" style={{ color: "#0bd46e" }}>G</span>
                  <span className="letter" style={{ color: "#0bd46e" }}>e</span>
                  <span className="letter" style={{ color: "#0bd46e" }}>t</span>
                  <span className="letter">&nbsp;</span>
                  <span className="letter" style={{ color: "#0bd46e" }}>i</span>
                  <span className="letter" style={{ color: "#0bd46e" }}>n</span>
                  <span className="letter ">&nbsp;</span>

                  <span className="letter" style={{ color: "#0bd46e" }}>T</span>
                  <span className="letter" style={{ color: "#0bd46e" }}>o</span>
                  <span className="letter" style={{ color: "#0bd46e" }}>u</span>
                  <span className="letter" style={{ color: "#0bd46e" }}>c</span>
                  <span className="letter" style={{ color: "#0bd46e" }}>h</span>


                </span>
                <span className="block" >
                  <span className="letter" style={{ color: 'black' }}>G</span>
                  <span className="letter" style={{ color: 'black' }}>e</span>
                  <span className="letter" style={{ color: 'black' }}>t</span>
                  <span className="letter">&nbsp;</span>
                  <span className="letter" style={{ color: 'black' }}>i</span>
                  <span className="letter" style={{ color: 'black' }}>n</span>
                  <span className="letter">&nbsp;</span>
                  <span className="letter" style={{ color: 'black' }}>T</span>
                  <span className="letter" style={{ color: 'black' }}>o</span>
                  <span className="letter" style={{ color: 'black' }}>u</span>
                  <span className="letter" style={{ color: 'black' }}>c</span>
                  <span className="letter" style={{ color: 'black' }}>h</span>

                </span>
              </div>

            </a>

          </div>
        </div>


      </div>
      <div className="es">


        <div className="dragger-text">
          <span className="drag">Drag to see more</span>
          <p>
            <img className="flu"
              src="//images.ctfassets.net/hk1y6qq9eac8/5k5A01wrokgYY3kZqoNMxt/6c943d0b97a7f68096a2715e4680972c/drag-mouse.svg" alt="Drag to see more" />
          </p>
        </div>

      </div>
      <div className='footer-contact'>
        <div id='ftline'></div>
        <div style={{ display: "flex" }}>
          <div className='contact-1'>
            <span className='contact-span'></span>
            <p className='contact-adress' style={{ textAlign: "left" }}>Adress:</p>
            <div className='basliq'>
              <img style={{ width: "5%", marginRight: "5%" }} src="//images.ctfassets.net/hk1y6qq9eac8/5XDwFgDbkRbTuiIXkY8S7i/522c30c35f39d8879fff0c07d0c2efa5/dubai-icon.svg" alt="undefined" class="img-fluid" />
              <div className='contact-text' style={{ textAlign: "left" }}>
                <p className='contact-text-p'>
                  Office 2205, Floor 22, Mazaya Business Avenue, Tower AA1, Jumeirah Lake Towers, Dubai. UAE
                </p>
                <div className="flexTouch" ref={touchRef} style={{ display: "block" }}>

                  <a aria-label="Get in Touch " className="rolling-text getInTouch">
                    <div className="spans">
                      <span className="block" >
                        <span className="letter" style={{ color: "#0bd46e" }}>G</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>e</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>t</span>
                        <span className="letter">&nbsp;</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>i</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>n</span>
                        <span className="letter ">&nbsp;</span>

                        <span className="letter" style={{ color: "#0bd46e" }}>T</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>o</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>u</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>c</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>h</span>


                      </span>
                      <span className="block" >
                        <span className="letter" style={{ color: 'black' }}>G</span>
                        <span className="letter" style={{ color: 'black' }}>e</span>
                        <span className="letter" style={{ color: 'black' }}>t</span>
                        <span className="letter">&nbsp;</span>
                        <span className="letter" style={{ color: 'black' }}>i</span>
                        <span className="letter" style={{ color: 'black' }}>n</span>
                        <span className="letter">&nbsp;</span>
                        <span className="letter" style={{ color: 'black' }}>T</span>
                        <span className="letter" style={{ color: 'black' }}>o</span>
                        <span className="letter" style={{ color: 'black' }}>u</span>
                        <span className="letter" style={{ color: 'black' }}>c</span>
                        <span className="letter" style={{ color: 'black' }}>h</span>

                      </span>
                    </div>

                  </a>

                </div>
              </div>
            </div>
            <div className='basliq'>
              <img style={{ width: "7%", marginRight: "5%" }} src="//images.ctfassets.net/hk1y6qq9eac8/1ntpvyIrwlPaiwpZ2jYKCR/1330d15c87c8621a76ffcc78e57cd1fb/karachi-icon.svg" alt="undefined" class="img-fluid" />
              <div className='contact-text' style={{ textAlign: "left" }}>
                <p className='contact-text-p'>
                  Office 2205, Floor 22, Mazaya Business Avenue, Tower AA1, Jumeirah Lake Towers, Dubai. UAE
                </p>
                <div className="flexTouch" ref={touchRef} style={{ display: "block" }}>

                  <a aria-label="Get in Touch " className="rolling-text getInTouch">
                    <div className="spans">
                      <span className="block" >
                        <span className="letter" style={{ color: "#0bd46e" }}>G</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>e</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>t</span>
                        <span className="letter">&nbsp;</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>i</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>n</span>
                        <span className="letter ">&nbsp;</span>

                        <span className="letter" style={{ color: "#0bd46e" }}>T</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>o</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>u</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>c</span>
                        <span className="letter" style={{ color: "#0bd46e" }}>h</span>


                      </span>
                      <span className="block" >
                        <span className="letter" style={{ color: 'black' }}>G</span>
                        <span className="letter" style={{ color: 'black' }}>e</span>
                        <span className="letter" style={{ color: 'black' }}>t</span>
                        <span className="letter">&nbsp;</span>
                        <span className="letter" style={{ color: 'black' }}>i</span>
                        <span className="letter" style={{ color: 'black' }}>n</span>
                        <span className="letter">&nbsp;</span>
                        <span className="letter" style={{ color: 'black' }}>T</span>
                        <span className="letter" style={{ color: 'black' }}>o</span>
                        <span className="letter" style={{ color: 'black' }}>u</span>
                        <span className="letter" style={{ color: 'black' }}>c</span>
                        <span className="letter" style={{ color: 'black' }}>h</span>

                      </span>
                    </div>

                  </a>

                </div>
              </div>
            </div>
          </div>
          <div className='contact-1'>
            <span className='contact-span' style={{ backgroundColor: "gray" }}></span>
            <p className='contact-adress' style={{ textAlign: "left" }}>Call:</p>
            <div className='basliq'>
              <div className='contact-text' style={{ textAlign: "left" }}>
                <p className='contact-text-p'>
                  +92 (2)1 3722 0227
                </p>
                <p className='contact-text-p' id='nomre'>
                  +92 (2)1 3722 0227
                </p>
              </div>
            </div>
          </div>
          <div className='contact-1'>
            <span className='contact-span' ></span>
            <p className='contact-adress' style={{ textAlign: "left" }}>Email:</p>
            <div className='basliq'>
              <div className='contact-text' style={{ textAlign: "left" }}>
                <p className='contact-text-p'>
                  sirin.nurullahova@mail.ru
                </p>

              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className='son'>
          <p className='labor'>Greenlight Labs © 2022</p>
          <img className='toplu' src="//images.ctfassets.net/hk1y6qq9eac8/7Jxlem5eBDdCQzH4ZQZ7TZ/cfd65b2710da66ecaa42b824f2fd1e9e/the-collective.svg" alt="The Collective" ></img>
        </div>
     
    </div>
  )
}
)
export default Footer