import React from "react";
import "../SliderText/SliderText.css"
const textPart = [{ pg:"10+",span: "Years in Mena"},{ pg:"22+", span: "Live Projects"},{ pg:"30+",span: "Staff in 5 Countries"}];
const delay = 2500;
const SliderText = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === textPart.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}

            >
                {textPart.map((textt, index) => {


                    return (
                    
                    <div
                        className="slide"
                        key={index}
                    >
                        <div className="twoText"> 
                        <h1 className="teen">{textt.pg}</h1>
                        <p className="teen1">{textt.span}</p>
                        </div>
                       

                    </div>

                    )
                }

                )}
                
            </div>

            <div className="slideshowDots">
                {textPart.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
            <p className="lastText">Our Services</p>
        </div>
    )

}
export default SliderText