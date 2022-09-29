import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../Sharper/Sharper.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import newlogo from '../Images/newlogo.png'
import loader from "../Images/loader.svg";
import random from "../Images/randomm.svg";
import partlogo from "../Images/tc-top-logo.svg";
import { gsap } from "gsap";
import Menu from '../HomePage/Menu/Menu'
import Footer from '../Footer/Footer';
gsap.registerPlugin(ScrollTrigger)

let anna = 0
const Sharper = () => {
  const footerRef = useRef();
  $(document).on('mousemove', function (e) {
    $('#sharpen').css({
      left: e.pageX,
      top: e.pageY,
    })
  })

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $('#sharpen').addClass('dimBackground')

      }
      if ($(this).scrollTop() < 300) {
        $('#sharpen').removeClass('dimBackground')
      }
      if ($(this).scrollTop() > 1000) {
        $('#sharpen').addClass('dimBackground1')

      }
      if ($(this).scrollTop() < 1000) {
        $('#sharpen').removeClass('dimBackground1')

      }
      if ($(this).scrollTop() > 1700) {
        $('#sharpen').addClass('dimBackground2')

      }
      if ($(this).scrollTop() < 1700) {
        $('#sharpen').removeClass('dimBackground2')

      }
    });
  });

  const [menu, setMenu] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault()
    if (menu) {
      setMenu(false)
      console.log("salam")
    } else {
      setMenu(true)
      console.log("sagol")
    }
  }

  const [loading, setLoading] = useState(true);
  const boxRef = useRef();
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const ballRef = useRef();
  const refSmall = useRef()
  const logoRef = useRef();
  const touchRef = useRef()
  const one = useRef()
  const two = useRef()
  const three = useRef()
  const four = useRef()
  const five = useRef()
  const six = useRef()
  const seven = useRef()
  const eight = useRef()
  const nine = useRef()
  const ten = useRef()
  const a = useRef()
  const b = useRef()
  const c = useRef()
  const d = useRef()
  const e = useRef()
  const f = useRef()
  const g = useRef()
  const h = useRef()
  const j = useRef()
  function handler() {
    ballRef.current.style.width = '60px';
    ballRef.current.style.height = '60px';
    refSmall.current.style.display = "none";
    // header.style.overflowY = "hidden"
  }
  function nonHandler() {
    ballRef.current.style.width = '40px';
    ballRef.current.style.height = '40px'
    refSmall.current.style.display = "block";
    // header.style.overflowY = "hidden"
  }
  useEffect(() => {
    anna++
    if (anna >= 4) {
      // console.log('cixmag vaxtidi')
      return
    }
    // console.log('girdiyeeee girdi girdi ')

    let tl = gsap.timeline()
    // console.log("salam")
    setTimeout(() => {
      // console.log("sagol")
      setLoading(false);

    }, 3000);
    tl.to(boxRef.current, { height: "100vh ", duration: 1.5 }, ">")
      .to(boxRef1.current, { height: "100vh ", duration: 1.5 }, ">")
      .to(boxRef2.current, { display: "block", duration: 1.5 }, ">")
      .to(footerRef.current, { display: "block", duration: 1.5 }, "<")

      .fromTo(one.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(two.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(three.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(four.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(five.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(six.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(seven.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(eight.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(nine.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(ten.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(a.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(b.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(c.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(d.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(e.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(f.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(g.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(h.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(j.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')



    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".ball");
    const ball1 = document.querySelector(".ball1");
    const pos = { x: window.innerWidth / 200, y: window.innerHeight / 180 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.15;


    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    const xSet1 = gsap.quickSetter(ball1, "x", "px");
    const ySet1 = gsap.quickSetter(ball1, "y", "px");

    window.addEventListener("mousemove", e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {

      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;


      xSet(pos.x);
      ySet(pos.y);
      xSet1(pos.x);
      ySet1(pos.y);
    });
  });



  if (loading) {
    return <>

      <img className="loadload" src={loader} />
    </>
  }
  return (
    <>
    <div>
      <Menu menu={menu} setMenu={setMenu} />

      <div className='sharp-circle' id='sharp-circle'>
        <div className={`green ${menu && 'hi'}`} ref={boxRef}></div>

        <div className={`white ${menu && 'hii'}`} ref={boxRef1}></div>

        <div className="ball1" ref={ballRef}></div>
        <div className="ball" ref={refSmall}> </div>


        <div className={`mainPage ${menu && "sjsj"}`} ref={boxRef2} >
          <div className="header">

            <div className="logoContainer" style={{ zIndex: "1000" }} ref={logoRef} onMouseEnter={handler} onMouseLeave={nonHandler}>
              <img className="random" src={newlogo} />
              <div className="two">

                {/* <img className="logo1" src={partlogo} /> */}

              </div>

            </div>
            <div className="flexTouch" ref={touchRef}>
              <a style={{ zIndex: "1000" }} aria-label="Get in Touch " className="rolling-text getInTouch" onMouseEnter={handler} onMouseLeave={nonHandler}>
                <div className="spans">
                  <span className="block" >
                    <span className="letter" style={{ color: "white" }}>G</span>
                    <span className="letter" style={{ color: "white" }}>e</span>
                    <span className="letter" style={{ color: "white" }}>t</span>
                    <span className="letter">&nbsp;</span>
                    <span className="letter" style={{ color: "white" }}>i</span>
                    <span className="letter" style={{ color: "white" }}>n</span>
                    <span className="letter " style={{ color: "white" }}>&nbsp;</span>

                    <span className="letter" style={{ color: "white" }}>T</span>
                    <span className="letter" style={{ color: "white" }}>o</span>
                    <span className="letter" style={{ color: "white" }}>u</span>
                    <span className="letter" style={{ color: "white" }}>c</span>
                    <span className="letter" style={{ color: "white" }}>h</span>


                  </span>
                  <span className="block" >
                    <span className="letter">G</span>
                    <span className="letter">e</span>
                    <span className="letter">t</span>
                    <span className="letter">&nbsp;</span>
                    <span className="letter">i</span>
                    <span className="letter">n</span>
                    <span className="letter">&nbsp;</span>
                    <span className="letter">T</span>
                    <span className="letter">o</span>
                    <span className="letter">u</span>
                    <span className="letter">c</span>
                    <span className="letter">h</span>
                  </span>
                </div>

              </a>



              <div className="circle" id="sharp-part-circle" onClick={toggleMenu}>
                <span className="bl" style={{ color: "black" }}></span>
                <span className="bl" style={{ color: "black" }}></span>
                <span className="bl" style={{ color: "black" }}></span>
              </div>

            </div>

          </div>

          <div className='blurred'></div>
          <div className='overlay'></div>
          <div className='sharp' id="sharpen"></div>

          <div className='culture' >
            <div className='culture-reqem'>
              <p className='reqem'>01.</p>
            </div>

            <div className='art'>
              <p className='art-yazi'>Art Culture</p>
              <p className='art-dubai'>Dubai Culture</p>
            </div>
          </div>


          <div className='culture' id='ikinci'>
            <div className='culture-reqem'>
              <p className='reqem'>02.</p>
            </div>

            <div className='art' id='art'>
              <p className='art-yazi'>Art and Culture</p>
              <p className='art-dubai'>Louvre Abu Dhabi</p>
            </div>
          </div>

          <div className='culture' id='ikinci'>
            <div className='culture-reqem'>
              <p className='reqem'>03.</p>
            </div>

            <div className='art' id='art'>
              <p className='art-yazi'>Finance</p>
              <p className='art-dubai'>AL-ETIHAD CREDIT BUREAU</p>
            </div>
          </div>

          <div className='culture' id='ikinci'>
            <div className='culture-reqem'>
              <p className='reqem'>04.</p>
            </div>

            <div className='art' id='art'>
              <p className='art-yazi'>Automotive</p>
              <p className='art-dubai'>HONDA MIDDLE EAST</p>
            </div>
          </div>

          <div />
        </div>



      </div>


    </div>
      {/* <Footer ref={footerRef} /> */}
     </>
  )
}

export default Sharper