import React, { useRef, useState, useEffect } from 'react'
import '../Submit/Submit.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import ag from '../Images/ag.png'
gsap.registerPlugin(ScrollTrigger)

let anna = 0
const Submit = () => {
    const ballRef = useRef();
    const refSmall = useRef()
    const boxRef = useRef();
    const qaraRef = useRef();
    useEffect(() => {

        anna++
        if (anna >= 4) {
            // console.log('cixmag vaxtidi')
            return
        }
        // console.log('girdiyeeee girdi girdi ')

        let tl = gsap.timeline()
        // console.log("salam")

        tl
            .fromTo(boxRef.current, { height: "100vh", duration: 10 }, {
                height: "0vh",
                delay: 0.5,
            }, '>')
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
    return (
        <>
            <div className="ball1" ref={ballRef}></div>
            <div className="ball" ref={refSmall}> </div>
            <div className='submit'>
                <div className="green" ref={boxRef}></div>

                <div className='qaradi' ref={qaraRef}>
                    <div className='clos'>

                        <span className='bl' id='bl' style={{ position: "absolute", transform: "rotate(45deg)", height: "6px" }}></span>
                        <span className='bl' id='bl' style={{ position: "absolute", transform: "rotate(135deg)", height: "6px" }}></span>

                    </div>
                </div>


                <div className='letsCreate'>
                     <h1>LET`S CREATE SOMETHING AWESOME!</h1>
                </div>


            </div>
        </>
    )
}

export default Submit