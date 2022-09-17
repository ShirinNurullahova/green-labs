import React, { useState, useEffect, useRef, forwardRef } from "react"
import loader from "../Images/loader.svg";
import random from "../Images/randomm.svg";
import partlogo from "../Images/tc-top-logo.svg";
import line from "../Images/line-1.svg"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../HomePage/HomePage.css"
import { gsap } from "gsap";
import BlackPage from "../BlackPage/BlackPage";
import TextAnime from "../TextAnimation/TextAnime"
import Supports from "../Supports/Supports";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import Menu from '../HomePage/Menu/Menu'

gsap.registerPlugin(ScrollTrigger)

let anna = 0

const HomePage = () => {
  const [menu , setMenu] = useState(false);
    
  const toggleMenu= (e) =>{
    e.preventDefault()
      if(menu){
        setMenu(false)
          console.log("salam")
      }else{
       setMenu(true)
        console.log("sagol")
      }
   }

  const [loading, setLoading] = useState(true);
  const boxRef = useRef();
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  // text
  const ballRef = useRef();
  const refSmall = useRef()
  const logoRef = useRef()
  const greenRef = useRef()
  const tRef = useRef()
  const rRef = useRef()
  const aRef = useRef()
  const nRef = useRef()
  const sRef = useRef()
  const fRef = useRef()
  const RRef = useRef()
  const mRef = useRef()
  const iRef = useRef()
  const NRef = useRef()
  const gRef = useRef()
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
  const e= useRef()
  const f = useRef()
  const g = useRef()
  const h = useRef()
  const j = useRef()
  // image stranger
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
  // footer
  const footRef = useRef()
  // header
  const touchRef = useRef()
  const blackRef = useRef()
  const supportRef = useRef()
  const partnerRef = useRef();
  const footerRef=useRef();
  // animation 3d 
  const digitRef = useRef()
  const ulRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    
    anna++
    if(anna >= 4){
      console.log('cixmag vaxtidi')
      return
    }
    console.log('girdiyeeee girdi girdi ')

    let tl = gsap.timeline()
    // console.log("salam")
    setTimeout(() => {
      // console.log("sagol")
      setLoading(false);

    }, 3000);
    tl.to(boxRef.current, { height: "100vh ", duration: 1.5 }, ">")
      .to(boxRef1.current, { height: "100vh ", duration: 1.5 }, ">")
      .to(boxRef2.current, { display: "block", duration: 1.5 }, ">")
      .to(blackRef.current, { display: "block", duration: 1.5 }, "<")
      .to(textRef.current, { display: "block", duration: 1.5 }, "<")
      .to(supportRef.current, { display: "block", duration: 1.5 }, "<")
      .to(partnerRef.current, { display: "block", duration: 1.5 }, "<")
      .to(footerRef.current, { display: "block", duration: 1.5 }, "<")
      .fromTo(greenRef.current, { scale: 20, duration: 2 }, { scale: 1 }, "<")


      .fromTo(tRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(rRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(aRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(nRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(sRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(fRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(RRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(mRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(iRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(NRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
      .fromTo(gRef.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05
      }, '<')
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
      .from(touchRef.current, { duration: 1, opacity: 0, y: -200 }, "<")
      .from(logoRef.current, { duration: 1, opacity: 0, x: -200 }, "<")
      .from(footRef.current, { duration: 1, opacity: 0, y: 200 }, "<")
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

      .to(listRef2.current, { transform: "translate(0px, 4.1176%)" }, "<")
      .to(listRef3.current, { transform: "translate(0px, 8.2353%)" }, "<")
      .to(listRef4.current, { transform: "translate(0px,  12.3529%)" }, "<")
      .to(listRef5.current, { transform: "translate(0px,  16.4706%)" }, "<")
      .to(listRef6.current, { transform: "translate(0px,  20.5882%)" }, "<")
      .to(listRef7.current, { transform: "translate(0px,  24.7059%)" }, "<")
      .to(listRef8.current, { transform: "translate(0px,  28.8235%)" }, "<")
      .to(listRef9.current, { transform: "translate(0px,  32.9412%)" }, "<")
      .to(listRef10.current, { transform: "translate(0px,  37.0588%)" }, "<")
      .to(listRef11.current, { transform: "translate(0px,  41.1765%)" }, "<")
      .to(listRef12.current, { transform: "translate(0px,  45.2941%)" }, "<")
      .to(listRef13.current, { transform: "translate(0px,  49.4118%)" }, "<")
      .to(listRef14.current, { transform: "translate(0px,  53.5294%)" }, "<")
      .to(listRef15.current, { transform: "translate(0px,  57.6471%)" }, "<")
      .to(listRef16.current, { transform: "translate(0px,  61.7647%)" }, "<")
      .to(listRef17.current, { transform: "translate(0px,  65.8824%)" }, "<")
      // .to(digitRef.current, {
      //   transform: "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -140, 1, 1)", scrollTrigger: {
      //     trigger: digitRef.current,
      //     // markers :true,
      //     scrub: true
      //   }
      // }, "<")
      .to(ulRef.current, {
        scrollTrigger: {
          trigger: ulRef.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef111.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef111.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef112.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef112.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef113.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef113.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef114.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef114.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef115.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef115.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef116.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef116.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef117.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef117.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef118.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef118.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef119.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef119.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef120.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef120.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef121.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef121.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef122.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef122.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef123.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef123.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef124.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef124.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef125.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef125.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef126.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef126.current,
          // markers :true,
          scrub: true
        }
      }, "<")
      .to(listRef127.current, {
        rotateY: "3.142rad", scrollTrigger: {
          trigger: listRef127.current,
          // markers :true,
          scrub: true
        }
      }, "<")


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

  // var header = document.getElementsByClassName(".header")

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

  // scroll trigger

  if (loading) {
    return <>

      <img className="loadload" src={loader} />
    </>
  }
 
  
  return (
    <>
       <Menu menu={menu} setMenu={setMenu}/>

      <div>
        <div className={`green ${menu && 'hi'}`} ref={boxRef}></div>

        <div className={`white ${menu && 'hii'}`} ref={boxRef1}></div>

        <div className="ball1" ref={ballRef}></div>
        <div className="ball" ref={refSmall}> </div>

        <div className={`mainPage ${menu && "sjsj"}`}  ref={boxRef2} >

          <div className="header">

            <div className="logoContainer" ref={logoRef} onMouseEnter={handler} onMouseLeave={nonHandler}>
              <img className="random" src={random} />
              <div className="two">

                <img className="logo1" src={partlogo} />

              </div>

            </div>
            <div className="flexTouch" ref={touchRef}>
              <a aria-label="Get in Touch " className="rolling-text getInTouch" onMouseEnter={handler} onMouseLeave={nonHandler}>
                <div className="spans">
                  <span className="block" >
                    <span className="letter">G</span>
                    <span className="letter">e</span>
                    <span className="letter">t</span>
                    <span className="letter">&nbsp;</span>
                    <span className="letter">i</span>
                    <span className="letter">n</span>
                    <span className="letter ">&nbsp;</span>

                    <span className="letter">T</span>
                    <span className="letter">o</span>
                    <span className="letter">u</span>
                    <span className="letter">c</span>
                    <span className="letter">h</span>


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



              <div className="circle" onClick={toggleMenu}>
                <span className="bl"></span>
                <span className="bl"></span>
                <span className="bl"></span>
              </div>

            </div>

          </div>
          <h1 className="text">
            <span className="transform">
              <div style={{ overflow: "hidden" , display:"flex" }}>
                <div ref={tRef} className="textt">T</div>
                <div className="textt" ref={rRef} >R</div>
                <div ref={aRef}>A</div>
                <div ref={nRef}>N</div>
                <div ref={sRef}>S</div>
                <div ref={fRef}>F</div>
              </div>
              <div style={{ position: "relative " }}><span className="greeno" ref={greenRef}></span></div>
              <div style={{ overflow: "hidden" , display:"flex" }}>
                <div ref={RRef}>R</div>
                <div ref={mRef}>M</div>
                <div ref={iRef}>I</div>
                <div ref={NRef}>N</div>
                <div ref={gRef}>G</div>
              </div>
            </span>


            <h1 className="business" ><span className="busin" style={{display:"flex" , overflow:"hidden"}}>
                <div ref={one}>B</div>
                <div ref={two}>U</div>
                <div ref={three}>S</div>
                <div ref={four}>I</div>
                <div ref={five}>N</div>
                <div ref={six}>E</div>
                <div ref={seven}>S</div>
                <div ref={eight}>S</div>
                <div ref={nine}>E</div>
                <div ref={ten}>S</div>
               </span>
            </h1>
            <p className="digit" style={{display:"flex", overflow:"hidden"}}>
              <div ref={a}>D</div>
              <div ref={b}>I</div>
              <div ref={c}>G</div>
              <div ref={d}>I</div>
              <div ref={e}>T</div>
              <div ref={f}>A</div>
              <div ref={g}>L</div>
              <div ref={h}>L</div>
              <div ref={j}>Y</div>
             
              
              </p>

          </h1>
        </div>

        <div className="footer" ref={footRef} >
          <a 
          onMouseEnter={handler} onMouseLeave={nonHandler}
          
          aria-label="Scroll<br> to Explore" href="#blackDiv" data-page-scroll-link-offset="350" data-page-scroll-link="#about-section" className="scroll-to-explore" >
            <div class="mouse-wheel">
              <div class="mouse"></div>
            </div>
            <span>Scroll <br />
              to Explore</span>
          </a>
        </div>

        <div className="digital-lines" ref={digitRef}>
          <ul className="g-line-list" ref={ulRef}>
            <li ref={listRef111}>   <img ref={listRef1} src={line} className="stranger" /></li>
            <li ref={listRef112}>    <img ref={listRef2} src={line} className="stranger" /></li>
            <li ref={listRef113}>    <img ref={listRef3} src={line} className="stranger" /></li>
            <li ref={listRef114}>   <img ref={listRef4} src={line} className="stranger" /></li>
            <li ref={listRef115}>   <img ref={listRef5} src={line} className="stranger" /></li>
            <li ref={listRef116}>   <img ref={listRef6} src={line} className="stranger" /></li>
            <li ref={listRef117}>  <img ref={listRef7} src={line} className="stranger" /></li>
            <li ref={listRef118}>   <img ref={listRef8} src={line} className="stranger" /></li>
            <li ref={listRef119}>   <img ref={listRef9} src={line} className="stranger" /></li>
            <li ref={listRef120}>   <img ref={listRef10} src={line} className="stranger" /></li>
            <li ref={listRef121}>   <img ref={listRef11} src={line} className="stranger" /></li>
            <li ref={listRef122}>   <img ref={listRef12} src={line} className="stranger" /></li>
            <li ref={listRef123}>   <img ref={listRef13} src={line} className="stranger" /></li>
            <li ref={listRef124}>   <img ref={listRef14} src={line} className="stranger" /></li>
            <li ref={listRef125}>   <img ref={listRef15} src={line} className="stranger" /></li>
            <li ref={listRef126}>  <img ref={listRef16} src={line} className="stranger" /></li>
            <li ref={listRef127}>   <img ref={listRef17} src={line} className="stranger" /></li>
          </ul>
        </div>


      </div>
      <BlackPage ref={blackRef} />
      <TextAnime ref={textRef} />
      <Supports ref={supportRef} />
      <Partners ref={partnerRef} />
      <Footer ref={footerRef}/>
    </>
  )

}
export default HomePage