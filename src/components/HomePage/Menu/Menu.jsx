import React, { useRef } from 'react';
import deleteIcon from '../../Images/delete.png'
import '../Menu/Menu.css'
const Menu = (props) => {
    const boxRef = React.useRef()
    const bottomRef = React.useRef()
    const headRef = useRef()
   
    const open = () => {
        boxRef.current.classList.toggle("openM");
        props.setMenu(false)
    }
    console.log(props)
    return (
        <div >

            <div className={`MenuPage ${props.menu && "openM"}`} ref={boxRef}>
                <div>
                <img src={deleteIcon} style={{width:"4%" ,position:"absolute", right :"8%", top:"9%"}} onClick={open}/>

                </div>
            </div>
            {/* <div className={`upHeader ${props.menu && "openHeader"}`} >
                <img />
                <div className='menu-btn' onClick={open}>
                    <div className={`circleWhite ${props.menu && "circleW"}`} >
                        <span className='whiteLine' style={{ transform: "rotate(45deg) translate(6px, 28px)" }}></span>
                        <span className='whiteLine' style={{ transform: "rotate(135deg) translate(29px, -6px)" }}></span>
                    </div>
                </div>
            </div> */}
            <div className={`bottomPage ${props.menu && "openBottom"}`} ref={bottomRef}  >
            </div>
        </div>
    )
}

export default Menu