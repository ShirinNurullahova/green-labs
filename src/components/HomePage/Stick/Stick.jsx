import React, { useState, useEffect } from "react"
// import '../Stick/Stick.css'


// const Stick = () => {
//     const [show, setShow] = useState(true)
//     const controlNavbar = () => {
//         if (window.scrollY > 250) {
//             setShow(false)
//         } else {
//             setShow(true)
//         }
//     }

//     useEffect(() => {
//         window.addEventListener('scroll', controlNavbar)
//         return () => {
//             window.removeEventListener('scroll', controlNavbar)
//         }
//     }, [])

//     return (
//         <>
//             <header className={`act ${show && 'hidden'}`}>

//                 <div className="header">

//                     <div className="logoContainer" ref={logoRef} onMouseEnter={handler} onMouseLeave={nonHandler}>
//                         <img className="random" src={random} />
//                         <div className="two">

//                             <img className="logo1" src={partlogo} />

//                         </div>

//                     </div>
//                     <div className="flexTouch" ref={touchRef}>
//                         <a aria-label="Get in Touch " className="rolling-text getInTouch" onMouseEnter={handler} onMouseLeave={nonHandler}>
//                             <div className="spans">
//                                 <span className="block" >
//                                     <span className="letter">G</span>
//                                     <span className="letter">e</span>
//                                     <span className="letter">t</span>
//                                     <span className="letter">&nbsp;</span>
//                                     <span className="letter">i</span>
//                                     <span className="letter">n</span>
//                                     <span className="letter ">&nbsp;</span>

//                                     <span className="letter">T</span>
//                                     <span className="letter">o</span>
//                                     <span className="letter">u</span>
//                                     <span className="letter">c</span>
//                                     <span className="letter">h</span>


//                                 </span>
//                                 <span className="block" >
//                                     <span className="letter">G</span>
//                                     <span className="letter">e</span>
//                                     <span className="letter">t</span>
//                                     <span className="letter">&nbsp;</span>
//                                     <span className="letter">i</span>
//                                     <span className="letter">n</span>
//                                     <span className="letter">&nbsp;</span>
//                                     <span className="letter">T</span>
//                                     <span className="letter">o</span>
//                                     <span className="letter">u</span>
//                                     <span className="letter">c</span>
//                                     <span className="letter">h</span>






//                                 </span>
//                             </div>

//                         </a>



//                         <div className="circle" onClick={toggleMenu}>
//                             <span className="bl"></span>
//                             <span className="bl"></span>
//                             <span className="bl"></span>
//                         </div>

//                     </div>

//                 </div>

//             </header>
//         </>
//     );

// }
// export default Stick