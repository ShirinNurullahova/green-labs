import React, { forwardRef, useEffect, useRef } from "react";
import '../Partners/Partners.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)






const Partners = forwardRef((props, ref) => {
    const client1 = useRef()
    const client2 = useRef()
    const client3 = useRef()
    const client4 = useRef()
    const client5 = useRef()
    const client6 = useRef()
    const client7 = useRef()
    const client8 = useRef()
    useEffect(() => {
        const tl = gsap.timeline()
        tl
            .from(client1.current, {
                x: 200,
                // opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    // start: 'top top',
                    end: "+=200",
                    // markers: true,
                    trigger: client1.current,
                    scrub: true,
                    // pin: true,
                },
            })
            .from(client2.current, {
                x: 200,
                // opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    // start: 'top top',
                    end: "+=200",
                    // markers: true,
                    trigger: client2.current,
                    scrub: true,
                    // pin: true,
                },
            })
            .from(client3.current, {
                x: 200,
                // opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    // start: 'top top',
                    end: "+=200",
                    // markers: true,
                    trigger: client3.current,
                    scrub: true,
                    // pin: true,
                },
            })
            .from(client4.current, {
                x: 200,
                // opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    // start: 'top top',
                    end: "+=200",
                    // markers: true,
                    trigger: client4.current,
                    scrub: true,
                    // pin: true,
                },
            })
            .from(client5.current, {
                x: 200,
                // opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    // start: 'top top',
                    end: "+=200",
                    // markers: true,
                    trigger: client4.current,
                    scrub: true,
                    // pin: true,
                },
            })
            .from(client6.current, {
                x: 200,
                // opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    // start: 'top top',
                    end: "+=200",
                    // markers: true,
                    trigger: client4.current,
                    scrub: true,
                    // pin: true,
                },
            })
            .from(client7.current, {
                x: 200,
                // opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    // start: 'top top',
                    end: "+=200",
                    // markers: true,
                    trigger: client4.current,
                    scrub: true,
                    // pin: true,
                },
            })
            .from(client8.current, {
                x: 200,
                // opacity: 0,
                stagger: 0.3,
                scrollTrigger: {
                    // start: 'top top',
                    end: "+=200",
                    // markers: true,
                    trigger: client4.current,
                    scrub: true,
                    // pin: true,
                },
            })
    });

    return (
        <div className="xett">
            <div className='esas-partner' ref={ref}>
                <div>
                    <h1 className='our'>OUR PARTNERS</h1>
                    <p className='set'>We have built out an impressive set of partnership, alliances and go to market collaboration to drive our market activity</p>
                </div>

                <div className='marka'>
                    <img ref={client1} className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/1pOy41ilyXhV1zGhCKR3Ig/8797ae337cb3042b52f6b108aa7c734b/ms.svg" alt="Microsoft" />
                    <img ref={client2} className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/fe3FNRtIeTqrF87PNMF8z/7fe74ffc208f95c6537ad3467392bb63/azure.svg" alt="Microsoft Azure" />
                    <img ref={client3} className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/7iYv1I5NccmoDKMMv90agq/790ae26e2db5bf92e9491a1742d2393d/liferay.svg" alt="Liferay" />
                    <img ref={client4} className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/1udsZqrHqAr6TYFg8TxdZI/2ce6444776992a370ccbd2a55267bead/progress-stiefinity.svg" alt="Progress Sitefinity" />


                    <img ref={client5} className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/61UkH0yLn9ogbv6qrnHgUt/f0282fa00308510220bfe4459cd2b181/sitecore.svg" alt="Sitecore" />
                    <img ref={client6} className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/3E0AMaaGIDznM9YeCYVgUW/9af1d3ea4eb0f057b2ef01a30f39f959/shopify.svg" alt="Shopify" />
                    <img ref={client7} className='marka-img' id='apple' src="//images.ctfassets.net/hk1y6qq9eac8/6nMKZF9PO86Y2Z5jdvygy4/8edf2ff5d7a1140bc4f6b7711f8329f5/apple.svg" alt="Apple" />
                    <img ref={client8} className='marka-img' id='adam' src="//images.ctfassets.net/hk1y6qq9eac8/2P6bQNPSZGIcFJxBWqlMQc/55533b1ddba45100daf2677c92871074/android.svg" alt="Android" />
                </div>

            </div>
        </div>
    )
}
)

export default Partners