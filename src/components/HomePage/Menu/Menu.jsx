import React, { useRef, useState, useEffect} from 'react';
import deleteIcon from '../../Images/delete.png'
import '../Menu/Menu.css';
import logoWhite from '../../Images/888.png';
import cancelIco from '../../Images/cancel.png'
import Title from '../../Title';
import sampleData from '../../utils/sampleData';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Menu = (props) => {

  
   
 

    const [activeIndex, setActiveIndex] = React.useState(-1);

    const boxRef = React.useRef()
    const bottomRef = React.useRef()
    const headRef = useRef()
    const menuYazi= useRef()
    const menuYazi1= useRef()
    const menuYazi2= useRef()
    const menuYazi3= useRef()
    const menuYazi4= useRef()

    const asRef= useRef()
    const asRef1= useRef()
    const asRef2= useRef()
    const asRef3= useRef()
    const asRef4= useRef()
   
   const onMHover=()=>{
    // console.log(menuYazi)
    menuYazi.current.style.display="block";
    asRef.current.style.display="none"
   }
   const onMHover1=()=>{
    // console.log(menuYazi)
    menuYazi1.current.style.display="block";
    menuYazi1.current.style.marginTop='-2%'
    asRef1.current.style.display="none"
   }
   const onMHover2=()=>{
    // console.log(menuYazi)
    menuYazi2.current.style.display="block";
    menuYazi2.current.style.marginTop='-4%'
    asRef2.current.style.display="none"
   }
   const onMHover3=()=>{
    // console.log(menuYazi)
    menuYazi3.current.style.display="block";
    menuYazi3.current.style.marginTop='-6%'
    asRef3.current.style.display="none"
   }
   const onMHover4=()=>{
    // console.log(menuYazi)
    menuYazi4.current.style.display="block";
    menuYazi4.current.style.marginTop='-8%'
    asRef4.current.style.display="none"
   }
   const onMLeave=()=>{
    // console.log(menuYazi)
    menuYazi.current.style.display="none";
    asRef.current.style.display="block"
   }
   const onMLeave1=()=>{
    // console.log(menuYazi)
    menuYazi1.current.style.display="none";
    asRef1.current.style.display="block"
   }
   const onMLeave2=()=>{
    // console.log(menuYazi)
    menuYazi2.current.style.display="none";
    asRef2.current.style.display="block"
   }
   const onMLeave3=()=>{
    // console.log(menuYazi)
    menuYazi3.current.style.display="none";
    asRef3.current.style.display="block"
   }
   const onMLeave4=()=>{
    // console.log(menuYazi)
    menuYazi4.current.style.display="none";
    asRef4.current.style.display="block"

   }
    const open = () => {
        boxRef.current.classList.toggle("openM");
        props.setMenu(false)
    }
    // console.log(props)
    const [stil, setStil]=useState(true)
    return (
        <div >

            <div className={`MenuPage ${props.menu && "openM"}`} ref={boxRef}>
                <div className='head'>
                    <img src={logoWhite} className="birinci"/>
                    <img src={cancelIco} onClick={open} />
                </div>

                <div className='middle'>
                    <div className='leftAside' style={{display:"flex", flexDirection:"column", justifyContent:"space-between"}} >
                        <div style={{position:"relative"}} onMouseEnter={onMHover} onMouseLeave={onMLeave}>
                            <span  className='as' ref={asRef} style={{position:"absolute" , marginLeft:"18%"}}>CASE STUDIES</span>

                            <main className='coming1' ref={menuYazi} style={{display:"none", position:"absolute"}}>
                                <div className="coming-heading1 scroll1">
                                    <div className='m-scroll1' >
                                        <div className="list-p">
                                            {sampleData.map((el, index) => {
                                                return (
                                                    <>
                                                        <Title stil={stil} title={el.title} setActiveIndex={setActiveIndex} index={index} />

                                                    </>)
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div style={{position:"relative"}} onMouseEnter={onMHover1} onMouseLeave={onMLeave1}>
                            <span  className='as' ref={asRef1}  style={{position:"absolute", marginLeft:"18%", marginTop:"-2%" }}>Who We Are</span>
                            <main className='coming1' ref={menuYazi1} style={{display:"none", position:"absolute"}}>
                                <div className="coming-heading1 scroll1">
                                    <div className='m-scroll1' >
                                        <div className="list-p">
                                            {sampleData.map((el, index) => {
                                                return (
                                                    <>
                                                        <Title stil={stil} title={el.title} setActiveIndex={setActiveIndex} index={index} />

                                                    </>)
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </main>



                        </div>
                        <div style={{position:"relative"}} onMouseEnter={onMHover2} onMouseLeave={onMLeave2}>
                            <span  className='as' ref={asRef2} style={{position:"absolute" , marginLeft:"18%", marginTop:"-4%"}}>Careers</span>
                            <main className='coming1' ref={menuYazi2} style={{display:"none", position:"absolute"}}>
                                <div className="coming-heading1 scroll1">
                                    <div className='m-scroll1' >
                                        <div className="list-p">
                                            {sampleData.map((el, index) => {
                                                return (
                                                    <>
                                                        <Title stil={stil} title={el.title} setActiveIndex={setActiveIndex} index={index} />

                                                    </>)
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </main>

                        </div>
                        <div style={{position:"relative"}} onMouseEnter={onMHover3} onMouseLeave={onMLeave3}>
                            <span  className='as' ref={asRef3}  style={{position:"absolute" , marginLeft:"18%",marginTop:"-6%"}}>Blogs</span>
                            <main className='coming1' ref={menuYazi3} style={{display:"none", position:"absolute"}}>
                                <div className="coming-heading1 scroll1">
                                    <div className='m-scroll1' >
                                        <div className="list-p">
                                            {sampleData.map((el, index) => {
                                                return (
                                                    <>
                                                        <Title stil={stil} title={el.title} setActiveIndex={setActiveIndex} index={index} />

                                                    </>)
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div style={{position:"relative"}} onMouseEnter={onMHover4} onMouseLeave={onMLeave4}>
                            <span  className='as'  ref={asRef4}  style={{position:"absolute" , marginLeft:"18%", marginTop:"-8%"}}>Work</span>
                            <main className='coming1' ref={menuYazi4} style={{display:"none", position:"absolute"}}>
                                <div className="coming-heading1 scroll1">
                                    <div className='m-scroll1' >
                                        <div className="list-p">
                                            {sampleData.map((el, index) => {
                                                return (
                                                    <>
                                                        <Title stil={stil} title={el.title} setActiveIndex={setActiveIndex} index={index} />

                                                    </>)
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>

                    <div className='rightAside'>
                        <p className='adress'>Adress:</p>
                        <div className='floor' >
                            <img style={{ width: "5%", marginRight: "10%" }} src="//images.ctfassets.net/hk1y6qq9eac8/5XDwFgDbkRbTuiIXkY8S7i/522c30c35f39d8879fff0c07d0c2efa5/dubai-icon.svg" alt="undefined" />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p className='officeO'>
                                    Office 2205, Floor 22, Mazaya Business Avenue, Tower AA1, Jumeirah Lake Towers, Dubai. UAE
                                </p>
                                <p className="fromLeft" style={{ marginTop: "3%", color: "#dbdbdb", fontSize: "1em" }}>
                                    <span>Get Direction</span>
                                </p>
                                {/* <a class="cool-link" style={{ marginTop: "3%", color: "#dbdbdb", fontSize: "1em" }}>Get Direction</a> */}
                            </div>
                        </div>

                        <div className='floor'>
                            <img style={{ width: "7%", marginRight: "10%" }} src="//images.ctfassets.net/hk1y6qq9eac8/1ntpvyIrwlPaiwpZ2jYKCR/1330d15c87c8621a76ffcc78e57cd1fb/karachi-icon.svg" alt="undefined"  />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <p className='officeO'>
                                    Office 2205, Floor 22, Mazaya Business Avenue, Tower AA1, Jumeirah Lake Towers, Dubai. UAE
                                </p>
                                <p className="fromLeft" style={{ marginTop: "3%", color: "#dbdbdb", fontSize: "1em" }}>
                                    <span>Get Direction</span>
                                </p>                                {/* <a class="cool-link" style={{ marginTop: "3%", color: "#dbdbdb", fontSize: "1em" }}>Get Direction</a> */}
                            </div>
                        </div>

                        <div className='call' >
                            <p className='calll'>Call:</p>

                            <p className="fromLeft" style={{ marginTop: "3%", width: "42%", color: "#dbdbdb", fontSize: "1em" }}>
                                <span> +92 (2)1 3722 0227</span>
                            </p>

                            <p className="fromLeft" style={{ marginTop: "3%", width: "42%", color: "#dbdbdb", fontSize: "1em" }}>
                                <span> +92 (2)1 3722 0227</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='endPart'>
                    <div className='endL' style={{ marginRight: "4%" }}>
                        <p >Connect with us</p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginTop: "10%" }}>
                            {/* <i className='icon-link'></i> */}
                            <p className="fromLeft" style={{ width: "100%", color: "#dbdbdb", fontSize: "1em" }}>
                                <span> GreenLight Labs</span>
                            </p>
                        </div>

                    </div>
                    <div className='endL'>
                        <p >Say hi!</p>

                        <p className="fromLeft" style={{ width: "100%", color: "#dbdbdb", fontSize: "1em", marginTop: "8%" }}>
                            <span> sirin.nurullahova@mail.ru</span>
                        </p>

                    </div>
                </div>
            </div>

            <div className={`bottomPage ${props.menu && "openBottom"}`} ref={bottomRef}  >
            </div>
        </div>
    )
}

export default Menu