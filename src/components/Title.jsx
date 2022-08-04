import React from "react";
export default ({ title, setActiveIndex, index }) => {


    return (
        <div >
            <div  onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(-1)}     className="span1"><span>{title}</span></div>

        </div>
    )


}