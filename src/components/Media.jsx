import React from "react";
import { useLayoutEffect } from "react";
import { useCallback } from "react";


const getDimensionObject = node => {
    const rect = node.getBoundingClientRect()

    return {
        width: rect.width,
        height: rect.height
    }
}



const useSize = () => {
    const [dimensions, setDimensions] = React.useState({});
    const [node, setNode] = React.useState(null);

    const ref = useCallback(node => {
        setNode(node)
    }, [])


    useLayoutEffect(() => {
        if (node) {
            const measure = () => setDimensions(getDimensionObject(node))
            measure()
        }
    }, [node])

    return [ref, dimensions]
}
export default ({ url, active, x, y }) => {

    const [ref, { width, height }] = useSize()
    return (
        <img
            className={`into ${active && "is-active"}`}
            src={url}
            style={{ transform: `translate(${x-width/2}px, ${y-height/2}px)` }}
            ref={ref}
        />


    )
}


