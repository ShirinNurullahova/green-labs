import React, { useState, useRef } from "react";
export default ({ title, setActiveIndex, index, stil }) => {
    const [color, setColor] = useState("");
    const borderRef = useRef()

    const changeStyle = () => {
        borderRef.current.style.color = "rgb(0, 70, 134)";
        borderRef.current.style.webkitTextStroke = "2px white";
        if (stil) {
            borderRef.current.style.webkitTextStroke = "transparent";
        }
    }
    const changeStyleLeave = () => {
        borderRef.current.style.color = "";
        borderRef.current.style.webkitTextStroke = "2px rgb(0,70,134)";
        if (stil) {

            borderRef.current.style.webkitTextStroke = "2px rgb(0, 70, 134)";

        }
    }
    return (
        <div >
            <div onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(-1)} className="span1">

                <span ref={borderRef}
                    onMouseEnter={changeStyle}
                    onMouseLeave={changeStyleLeave}
                >{title}</span>
            </div>

        </div>
    )


}