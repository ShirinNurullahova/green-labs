
import { useRef, useState } from "react";
import imageData from "../utils/imageData";
import '../SeminarSlider/SeminarSlider.css'
const SeminarSlider = () => {
  const [valueData, setValueData] = useState(0);
  const innerContainer = useRef();
  const inputRangeRef = useRef();

  const onChangeHandler = (event) => {
    // console.log("safol")
    setValueData(event.target.value)
    // if value is less equal than 0  equal to 0, set it to 0
    if (event.target.value <= 0) {
      setValueData(0);
      // console.log("salam")
    }
    const container = innerContainer.current;
    container.scrollLeft = Number(event.target.value);
    // console.log(event.target.value)
  };
  // onScrollHandler to change the value of the input range
  const onScrollHandler = (event) => {
    // console.log(event +"salanmm")
    const container = innerContainer.current;
    const input = inputRangeRef.current;
    // console.log(input)
    var b = container.scrollWidth - container.clientWidth;
    input.setAttribute("max", b);
    var a = container.scrollLeft;
    setValueData(a);
  };
  
  return (
    <section className="seminar-slider">
      <div 
        onScroll={onScrollHandler}
        ref={innerContainer}
        className="seminar-slider__image-container" style={{overflowX:"scroll"}}
      >
          <div className="cardPartBorder">
            {
              imageData.map((el, index) => {
                return (<div key={index}>


                  <div className="maybe">
                    <div className="common1">
                      <img className="threee" src={el.image} />
                      <div className="anim">

                        <p className="exp">{el.p} <br />{el.h1}
                          <span className="icon-right-arrow right-arr"></span>
                          <hr />
                        </p>

                        <div className="hoverDiv">
                          <ul>
                            <li className="point">{el.l1}</li>
                            <li className="point">{el.l2}</li>
                            <li className="point">{el.l2}</li>
                          </ul>

                        </div>

                      </div>


                    </div>
                  </div>
                </div>)

              })
            }
          </div>
    
      </div>
      <div className="seminar-slider__control-range">
        <input
          ref={inputRangeRef}
          value={valueData}
          min="0"
          defaultValue={valueData}
          max={100}
          type="range"
          onChange={onChangeHandler}
        />
         {/* <div class="dragger"> 
           <span className="handle"></span> 
          <span className="dragger-progress" ></span> 
        </div>  */}
      </div>
    </section>
  );
};

export default SeminarSlider;
