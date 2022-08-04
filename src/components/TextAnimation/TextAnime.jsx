import React, { forwardRef } from "react";
import sampleData from "../utils/sampleData";
import "./TextAnime.css"
import Title from "../Title";
import Media from "../Media";
const TextAnime = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = React.useState(-1)
    return (
        <div className="mainDiv" id='mainDiv' ref={ref}>
            <main className='coming1'>
                <div className="coming-heading1 scroll1">
                    <div className='m-scroll1' >
                        {sampleData.map((el, index) => {const isActive = index === activeIndex; return (<><Title title={el.title} setActiveIndex={setActiveIndex} index={index} /> <Media url={el.mediaUrl} active={isActive} /></>) }
                        )}



                    </div>

                    {/* <div className="project-media">
                        {sampleData.map(({ mediaUrl }, index) => {
              

                            return <Media url={mediaUrl} active={isActive} />

                        })}

                    </div> */}
                </div>

            </main>
            {/* <main className='coming'>
                <div className="coming-heading scroll">
                    <div className='m-scroll'><span className="span2">AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE</span>

                    </div>

                </div>


            </main>
            <main className='coming1'>
                <div className="coming-heading1 scroll1">
                    <div className='m-scroll1'><span className="span3">AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE</span>

                    </div>
                </div>


            </main>


            <main className='coming'>
                <div className="coming-heading scroll">
                    <div className='m-scroll'><span>AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE</span></div>
                </div>


            </main>
 */}

        </div>
    )
}
)
export default TextAnime;