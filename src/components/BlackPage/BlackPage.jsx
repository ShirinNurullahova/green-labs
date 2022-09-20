import React, { forwardRef, useEffect, useState } from "react";
import { useRef } from "react";
import CardPart from "../CardPart/CardPart";
import SliderText from "../SliderText/SliderText";
import './BlackPage.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageData from "../utils/imageData";
import '../CardPart/CardPart.css'
import SeminarSlider from "../SeminarSlider/SeminarSlider ";
gsap.registerPlugin(ScrollTrigger)


const BlackPage = forwardRef((props, ref) => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  // const [loading, setLoading] = useState(true);
  // console.log(ref.current);
  const text1 = useRef()
  const text2 = useRef()
  const text3 = useRef()
  const text4 = useRef()
  const text5 = useRef()
  const text6 = useRef()
  const text7 = useRef()
  const text8 = useRef()
  const mainRef = useRef()
  const officeRef = useRef()
  useEffect(() => {
    const tl = gsap.timeline()
    const sl = gsap.timeline()


    // console.log("salam")
    setTimeout(() => {
      // console.log("sagol")
      // setLoading(false);
    }, 3000);
    tl.fromTo(text1.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
      y: "0%",
      autoAlpha: 1,
      rotation: "0deg",
      delay: 0.05,
      stagger: 0.3,
      scrollTrigger: {
        // start: 'top top',
        end: "+=300",
        // markers: true,
        trigger: text1.current,
        scrub: true,
        // pin: true,
      },
    }, '<')
      .fromTo(text2.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05,
        stagger: 0.3,
        scrollTrigger: {
          // start: 'top top',
          end: "+=300",
          // markers: true,
          trigger: text2.current,
          scrub: true,
          // pin: true,
        },
      }, '<')
      .fromTo(text3.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05,
        stagger: 0.3,
        scrollTrigger: {
          // start: 'top top',
          end: "+=300",
          // markers: true,
          trigger: text3.current,
          scrub: true,
          // pin: true,
        },
      }, '<')
      .fromTo(text4.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05,
        stagger: 0.3,
        scrollTrigger: {
          // start: 'top top',
          end: "+=300",
          // markers: true,
          trigger: text4.current,
          scrub: true,
          // pin: true,
        },
      }, '<')
      .fromTo(text5.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05,
        stagger: 0.3,
        scrollTrigger: {
          // start: 'top top',
          end: "+=300",
          // markers: true,
          trigger: text5.current,
          scrub: true,
          // pin: true,
        },
      }, '<')
      .fromTo(text6.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05,
        stagger: 0.3,
        scrollTrigger: {
          // start: 'top top',
          end: "+=300",
          // markers: true,
          trigger: text6.current,
          scrub: true,
          // pin: true,
        },
      }, '<')
      .fromTo(text7.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05,
        stagger: 0.3,
        scrollTrigger: {
          // start: 'top top',
          end: "+=300",
          // markers: true,
          trigger: text7.current,
          scrub: true,
          // pin: true,
        },
      }, '<')
      .fromTo(text8.current, { y: "100%", autoAlpha: 0, rotation: "15deg" }, {
        y: "0%",
        autoAlpha: 1,
        rotation: "0deg",
        delay: 0.05,
        stagger: 0.3,
        scrollTrigger: {
          // start: 'top top',
          end: "+=300",
          // markers: true,
          trigger: text8.current,
          scrub: true,
          // pin: true,
        },
      }, '<')
      .from(officeRef.current, {
        x: 200,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
          // start: 'top top',
          end: "+=300",
          // markers: true,
          trigger: officeRef.current,
          scrub: true,
          // pin: true,
        },
      });

  });



  return (
 
    <div className="blackDiv" id='blackDiv' ref={ref} >

      <div className="whoWe" >
        <h1 className="main-text" ref={mainRef}>
          <span className="who" style={{ display: "flex", overflow: "hidden" }}>
            <div ref={text1}>W</div>
            <div ref={text2}>h</div>
            <div ref={text3}>o</div>
          </span>

          <br />

          <span className="weare" style={{ display: "flex", overflow: "hidden", position:"absolute" , zIndex:1 }}>
            <div ref={text4}>W</div>
            <div ref={text5} style={{ paddingRight: '40px' }}>e</div>

            <div ref={text6}>A</div>
            <div ref={text7}>r</div>
            <div ref={text8}>e!</div>
          </span>
        </h1>

        <div className="middleDiv">
          <SliderText />
          <div className="office" ref={officeRef}>
            <p class="lead">We are the front-office technology arm of The Collective.</p>
            <p className="platform">      We are a platform-agnostic digital consultancy. We work with our clients to solve strategic business
              challenges by creating exceptional experiences through stunning design and deep technology expertise.</p>

          </div>
        </div>
      </div>
      <SeminarSlider/>

      <div className="es">
     
        
        <div className="dragger-text">
          <span className="drag">Drag to see more</span>
          <p>
            <img className="flu"
              src="//images.ctfassets.net/hk1y6qq9eac8/5k5A01wrokgYY3kZqoNMxt/6c943d0b97a7f68096a2715e4680972c/drag-mouse.svg" alt="Drag to see more" />
          </p>
        </div>

      </div>
    </div>
    
  )
}
)
export default BlackPage;