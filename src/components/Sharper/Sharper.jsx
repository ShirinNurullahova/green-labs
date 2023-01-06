import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../Sharper/Sharper.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import newlogo from '../Images/logo1.png'
import loader from "../Images/loader.svg";
import random from "../Images/randomm.svg";
import partlogo from "../Images/tc-top-logo.svg";
import { gsap } from "gsap";
import Menu from '../HomePage/Menu/Menu'
import Footer from '../Footer/Footer';
import line from "../Images/line-1.svg"

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
  const listRef1 = useRef()
  const listRef111 = useRef()
  const listRef112 = useRef()
  const listRef113 = useRef()
  const listRef114 = useRef()
  const listRef115 = useRef()
  const listRef116 = useRef()
  const listRef117 = useRef()
  const listRef118 = useRef()
  const listRef119 = useRef()
  const listRef120 = useRef()
  const listRef121 = useRef()
  const listRef122 = useRef()
  const listRef123 = useRef()
  const listRef124 = useRef()
  const listRef125 = useRef()
  const listRef126 = useRef()
  const listRef127 = useRef()

  const listRef2 = useRef()
  const listRef3 = useRef()
  const listRef4 = useRef()
  const listRef5 = useRef()
  const listRef6 = useRef()
  const listRef7 = useRef()
  const listRef8 = useRef()
  const listRef9 = useRef()
  const listRef10 = useRef()
  const listRef11 = useRef()
  const listRef12 = useRef()
  const listRef13 = useRef()
  const listRef14 = useRef()
  const listRef15 = useRef()
  const listRef16 = useRef()
  const listRef17 = useRef()
  const digitRef = useRef()
  const ulRef = useRef()
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
      .fromTo(listRef1.current, { opacity: 0 }, { opacity: 1 }, "<")
      .fromTo(listRef2.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef3.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef4.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef5.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef6.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef7.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef8.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef9.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef10.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef11.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef12.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef13.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef14.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef15.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef16.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")
      .fromTo(listRef17.current, { opacity: 0 }, { opacity: 1, delay: 0.1 }, "<")

      .to(listRef17.current, { transform: "translate(0px,-65.8824% )" }, "<")
      .to(listRef16.current, { transform: "translate(0px,  -69.7647%)" }, "<")
      .to(listRef15.current, { transform: "translate(0px,  -74.6471%)" }, "<")
      .to(listRef14.current, { transform: "translate(0px,  -79.5294%)" }, "<")
      .to(listRef13.current, { transform: "translate(0px,  -84.4118%)" }, "<")
      .to(listRef12.current, { transform: "translate(0px,  -89.2941%)" }, "<")
      .to(listRef11.current, { transform: "translate(0px,  -94.1765%)" }, "<")
      .to(listRef10.current, { transform: "translate(0px,  -99.9412%)" }, "<")
      .to(listRef9.current, { transform: "translate(0px,  -104.0588%)" }, "<")
      .to(listRef8.current, { transform: "translate(0px,  -109.8235%)" }, "<")
      .to(listRef7.current, { transform: "translate(0px,  -114.7059%)" }, "<")
      .to(listRef6.current, { transform: "translate(0px,  -119.5882%)" }, "<")
      .to(listRef5.current, { transform: "translate(0px,  -124.4706%)" }, "<")
      .to(listRef4.current, { transform: "translate(0px,  -129.3529%)" }, "<")
      .to(listRef3.current, { transform: "translate(0px, -134.2353%)" }, "<")
      .to(listRef2.current, { transform: "translate(0px, -139.1176% )" }, "<")
      .to(listRef1.current, { transform: "translate(0px, -143.1176% )" }, "<")

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
    //   .from(textOne.current, {
    //     x: 200,
    //     // opacity: 0,
    //     stagger: 0.3,
    //     scrollTrigger: {
    //         // start: 'top top',
    //         end: "+=250",
    //         // markers: true,
    //         trigger: textOne.current,
    //         scrub: true,
    //         // pin: true,
    //     },
    // })
    // .from(textTwo.current, {
    //     x: 200,
    //     // opacity: 0,
    //     stagger: 0.3,
    //     scrollTrigger: {
    //         // start: 'top top',
    //         end: "+=250",
    //         // markers: true,
    //         trigger: textTwo.current,
    //         scrub: true,
    //         // pin: true,
    //     },
    // })
    // .from(textThree.current, {
    //     x: 200,
    //     // opacity: 0,
    //     stagger: 0.3,
    //     scrollTrigger: {
    //         // start: 'top top',
    //         end: "+=250",
    //         // markers: true,
    //         trigger: textThree.current,
    //         scrub: true,
    //         // pin: true,
    //     },
    // })
    // .from(textFour.current, {
    //     x: 200,
    //     // opacity: 0,
    //     stagger: 0.3,
    //     scrollTrigger: {
    //         // start: 'top top',
    //         end: "+=250",
    //         // markers: true,
    //         trigger: textFour.current,
    //         scrub: true,
    //         // pin: true,
    //     },
    // })


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

  const textOne = useRef()
  const textTwo = useRef()
  const textThree = useRef()
  const textFour = useRef()



  if (loading) {
    return <>
      <img className="loadload" src={loader}/>
    </>
  }
  
  return (
    <>
      <div style={{overflowX:'hidden !important'}}>
        <Menu menu={menu} setMenu={setMenu} />

        <div className='sharp-circle' id='sharp-circle'>


          {/* <div className="digital-lines" ref={digitRef} style={{ zIndex: '9999', rotate: '90deg'}}>
            <ul className="g-line-list" ref={ulRef}>
              <li ref={listRef111}  >   <img ref={listRef1} src={line} className="stranger" /></li>
              <li ref={listRef112}  >    <img ref={listRef2} src={line} className="stranger" /></li>
              <li ref={listRef113}  >    <img ref={listRef3} src={line} className="stranger" /></li>
              <li ref={listRef114} >   <img ref={listRef4} src={line} className="stranger" /></li>
              <li ref={listRef115} >   <img ref={listRef5} src={line} className="stranger" /></li>
              <li ref={listRef116}>   <img ref={listRef6} src={line} className="stranger" /></li>
              <li ref={listRef117} >  <img ref={listRef7} src={line} className="stranger" /></li>
              <li ref={listRef118}  >   <img ref={listRef8} src={line} className="stranger" /></li>
              <li ref={listRef119} >   <img ref={listRef9} src={line} className="stranger" /></li>
              <li ref={listRef120} >   <img ref={listRef10} src={line} className="stranger" /></li>
              <li ref={listRef121}>   <img ref={listRef11} src={line} className="stranger" /></li>
              <li ref={listRef122}>   <img ref={listRef12} src={line} className="stranger" /></li>
              <li ref={listRef123}  >   <img ref={listRef13} src={line} className="stranger" /></li>
              <li ref={listRef124}  >   <img ref={listRef14} src={line} className="stranger" /></li>
              <li ref={listRef125}  >   <img ref={listRef15} src={line} className="stranger" /></li>
              <li ref={listRef126}  >  <img ref={listRef16} src={line} className="stranger" /></li>
              <li ref={listRef127}  >   <img ref={listRef17} src={line} className="stranger" /></li>
            </ul>
          </div> */}
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

              <div className='art' ref={textOne}>
                <p className='art-yazi'>Art Culture</p>
                <p className='art-dubai'>Dubai Culture</p>
              </div>
            </div>


            <div className='culture' id='ikinci'>
              <div className='culture-reqem'>
                <p className='reqem'>02.</p>
              </div>

              <div className='art' id='art' ref={textTwo}>
                <p className='art-yazi'>Art and Culture</p>
                <p className='art-dubai'>Louvre Abu Dhabi</p>
              </div>
            </div>

            <div className='culture' id='ikinci'>
              <div className='culture-reqem'>
                <p className='reqem'>03.</p>
              </div>

              <div className='art' id='art' ref={textThree}>
                <p className='art-yazi'>Finance</p>
                <p className='art-dubai'>AL-ETIHAD CREDIT BUREAU</p>
              </div>
            </div>

            <div className='culture' id='ikinci'>
              <div className='culture-reqem'>
                <p className='reqem'>04.</p>
              </div>

              <div className='art' id='art' ref={textFour}>
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