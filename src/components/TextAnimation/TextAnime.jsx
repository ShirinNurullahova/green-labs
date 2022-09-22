import React, { forwardRef } from "react";
import sampleData from "../utils/sampleData";
import data from "../utils/data";
import "./TextAnime.css"
import Title from "../Title";
import Media from "../Media";
import { useEffect } from "react";
import Title1 from "../Title1";

const useMausePosition = () => {
    const [mausePosition, setMausePosition] = React.useState({ x: 0, y: 0 })
    useEffect(() => {
        const updateMausePosition = e => {
            setMausePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', updateMausePosition)

        return () => window.removeEventListener('mousemove', updateMausePosition)
    }, [])

    return mausePosition
}


const TextAnime = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = React.useState(-1);

    const [activeIndex1, setActiveIndex1] = React.useState(-1);
    const [activeIndex2, setActiveIndex2] = React.useState(-1);
    const [activeIndex3, setActiveIndex3] = React.useState(-1);


    const { x, y } = useMausePosition();

    return (
        <div className="mainDiv" id='mainDiv' ref={ref}>
            <main className='coming1'>
                <div className="coming-heading1 scroll1">
                    <div className='m-scroll1' >
                        <div className="list-p">
                            {sampleData.map((el, index) => {
                                return (
                                    <>
                                        <Title title={el.title} setActiveIndex={setActiveIndex} index={index} />
                                        
                                    </>)
                            }
                            )}
                        </div>
                    </div>
                </div>
                <div className="media-p">
                    {sampleData.map((el, index) => {
                        const isActive = index === activeIndex;
                        const xPos = isActive ? x : 0;
                        const yPos = isActive ? y : 0;
                        return (
                            <>
                              
                                    <Media  url={el.mediaUrl} active={isActive} x={xPos} y={yPos} />

                             
                            </>)
                    }
                    )}
                </div>
            </main>

            <main className='coming'>
                <div className="coming-heading scroll">
                    <div className='m-scroll'>
                        <div className="list-p1">
                            {data.map((el1, index1) => {


                                return (
                                    <>
                                        <Title1 title={el1.title1} setActiveIndex1={setActiveIndex1} index1={index1} />
                                    </>)
                            }
                            )}
                        </div>

                    </div>

                </div>

                <div className="media-p1">
                    {data.map((el1, index1) => {
                        const isActive1 = index1 === activeIndex1;
                        const xPos1 = isActive1 ? x : 0;
                        const yPos1 = isActive1 ? y : 0;
                        return (
                            <>

                                {/* <Media1 url={el1.mediaUrl1} active1={isActive1} x1={xPos1} y1={yPos1} /> */}
                                <Media url={el1.mediaUrl1} active={isActive1} x={xPos1} y={yPos1} />
                            </>)
                    }
                    )}
                </div>
            </main>
            {/* <main className='coming1'>
                <div className="coming-heading1 scroll1">
                    <div className='m-scroll1'><span className="span3">AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE&nbsp;AUTOMATIVE</span>

                    </div>
                </div>


            </main> */}
            <main className='coming1'>
                <div className="coming-heading1 scroll1">
                    <div className='m-scroll1' >
                        <div className="list-p">
                            {sampleData.map((el, index) => {
                                return (
                                    <>
                                        <Title title={el.title} setActiveIndex={setActiveIndex} index={index} />
                                    </>)
                            }
                            )}
                        </div>
                    </div>




                </div>
                <div className="media-p">
                    {sampleData.map((el2, index2) => {
                        const isActive2 = index2 === activeIndex2;
                        const xPos2 = isActive2 ? x : 0;
                        const yPos2 = isActive2 ? y : 0;
                        return (
                            <>

                                <Media url={el2.mediaUrl} active={isActive2} x={xPos2} y={yPos2} /></>)
                    }
                    )}
                </div>
            </main>
            <main className='coming'>
                <div className="coming-heading scroll">
                    <div className='m-scroll'>
                        <div className="list-p1">
                            {data.map((el1, index1) => {


                                return (
                                    <>
                                        <Title1 title={el1.title1} setActiveIndex1={setActiveIndex1} index1={index1} />
                                    </>)
                            }
                            )}
                        </div>

                    </div>

                </div>

                <div className="media-p1">
                    {data.map((el3, index3) => {
                        const isActive3 = index3 === activeIndex3;
                        const xPos3 = isActive3 ? x : 0;
                        const yPos3 = isActive3 ? y : 0;
                        return (
                            <>

                                {/* <Media1 url={el1.mediaUrl1} active1={isActive1} x1={xPos1} y1={yPos1} /> */}
                                <Media url={el3.mediaUrl1} active={isActive3} x={xPos3/2} y={yPos3/2} />
                            </>)
                    }
                    )}
                </div>
            </main>
        </div>
    )
}
)
export default TextAnime;