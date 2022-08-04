import React from "react";

export default ({ url, active }) => {
    console.log(active)
    return (
        <img className={`into ${active && "is-active"}`} src={url} />


    )
}


