import React, { useRef} from 'react';
import deleteIcon from '../../Images/delete.png'
import '../Menu/Menu.css';
import logoWhite from '../../Images/888.png';
import cancelIco from '../../Images/cancel.png'
import Title from '../../Title';
import sampleData from '../../utils/sampleData';

import { SocialIcon } from 'react-social-icons';
const Menu = (props) => {
    const [activeIndex, setActiveIndex] = React.useState(-1);

    const boxRef = React.useRef()
    const bottomRef = React.useRef()
    const headRef = useRef()
    const menuYazi= useRef()
    const asRef= useRef()
   const onMHover=()=>{
    console.log(menuYazi)
    menuYazi.current.style.display="block";
    asRef.current.style.display="none"
   }
   const onMLeave=()=>{
    console.log(menuYazi)
    menuYazi.current.style.display="none";
    asRef.current.style.display="block"

   }
    const open = () => {
        boxRef.current.classList.toggle("openM");
        props.setMenu(false)
    }
    // console.log(props)
    return (
        <div >

            <div className={`MenuPage ${props.menu && "openM"}`} ref={boxRef}>
                <div className='head'>
                    <img src={logoWhite} />
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
                                                        <Title title={el.title} setActiveIndex={setActiveIndex} index={index} />

                                                    </>)
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div style={{position:"relative"}} >
                            <span  className='as'  style={{position:"absolute", marginLeft:"18%", marginTop:"-2%" }}>Who We Are</span>
                        </div>
                        <div style={{position:"relative"}} >
                            <span  className='as'  style={{position:"absolute" , marginLeft:"18%", marginTop:"-4%"}}>Careers</span>
                        </div>
                        <div style={{position:"relative"}} >
                            <span  className='as'  style={{position:"absolute" , marginLeft:"18%",marginTop:"-6%"}}>Blogs</span>
                        </div>
                        <div style={{position:"relative"}} >
                            <span  className='as'  style={{position:"absolute" , marginLeft:"18%", marginTop:"-8%"}}>Work</span>
                        </div>
                    </div>

                    <div className='rightAside'>
                        <p className='adress'>Adress:</p>
                        <div className='floor' >
                            <img style={{ width: "5%", marginRight: "10%" }} src="//images.ctfassets.net/hk1y6qq9eac8/5XDwFgDbkRbTuiIXkY8S7i/522c30c35f39d8879fff0c07d0c2efa5/dubai-icon.svg" alt="undefined" class="img-fluid" />
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
                            <img style={{ width: "7%", marginRight: "10%" }} src="//images.ctfassets.net/hk1y6qq9eac8/1ntpvyIrwlPaiwpZ2jYKCR/1330d15c87c8621a76ffcc78e57cd1fb/karachi-icon.svg" alt="undefined" class="img-fluid" />
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
                        <p stye={{ borderBottom: "1px solid #dbdbdb" }}>Connect with us</p>
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