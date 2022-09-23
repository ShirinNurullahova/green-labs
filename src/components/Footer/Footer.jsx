import React, { forwardRef, useRef } from 'react'
import '../Footer/Footer.css'
const Footer = forwardRef((props, ref) => {
  const touchRef = useRef()

  return (
    <div className='footerEsas' ref={ref}>
      <div className='footer-up'>
        <div className='connect'>CONNECT</div>
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