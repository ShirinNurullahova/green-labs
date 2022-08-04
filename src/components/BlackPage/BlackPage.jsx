import React, { forwardRef } from "react";
import CardPart from "../CardPart/CardPart";
import SliderText from "../SliderText/SliderText";
import './BlackPage.css';


const BlackPage = forwardRef((props, ref) => {
  // const blackRef = useRef()
  console.log(ref.current)
  return (
    <div className="blackDiv" id='blackDiv' ref={ref}>

      <div className="whoWe">
        <h1 ><span className="who">Who</span><br /><span className="weare">We Are!</span></h1>


        <div className="middleDiv">

          <SliderText />
          <div className="office">
            <p class="lead">We are the front-office technology arm of The Collective.</p>
            <p className="platform">      We are a platform-agnostic digital consultancy. We work with our clients to solve strategic business
              challenges by creating exceptional experiences through stunning design and deep technology expertise.</p>

          </div>
        </div>
      </div>
        <div className="cardPartBorder">
          <CardPart />
          <CardPart />
          <CardPart />
          <CardPart />
          <CardPart />
          <CardPart />
          <CardPart />
        </div>


    </div>
  )
}
)
export default BlackPage;