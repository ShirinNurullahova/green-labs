import React,{useState, useRef} from "react";
export default ({ title, setActiveIndex1, index1 }) => {
    const [color, setColor] = useState("");
    const borderRef=useRef()
  const changeStyle=()=>{
      borderRef.current.style.color="#0bd46e";
      borderRef.current.style.webkitTextStroke="2px white";

  }
  const changeStyleLeave=()=>{
    borderRef.current.style.color="";
    borderRef.current.style.webkitTextStroke="2px #222";

}
    return (
        <div >
            <div onMouseEnter={() => setActiveIndex1(index1)} onMouseLeave={() => setActiveIndex1(-1)} className="span2">


                <span ref={borderRef} onMouseEnter={changeStyle}
                                                                      
                    onMouseLeave={changeStyleLeave}>{title}</span>

            </div>

        </div>
    )


}