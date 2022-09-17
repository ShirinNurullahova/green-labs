import React from "react";
import { useLayoutEffect } from "react";
import { useCallback } from "react";


export default ({ url, active, x, y }) => {

    return (
        <img
            className={`circleImage ${active && "is-active-circle"}`}
            src={url}
            // style={{ transform: `translate(${x - width / 2}px, ${y - height / 2}px)` }}
           
        />


    )
}


