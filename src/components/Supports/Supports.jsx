import React, { forwardRef, useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import { useCallback } from "react";
import '../Supports/Supports.css'
import one from '../Images/1.jpeg';
import { Link } from "react-router-dom";
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

const Supports = forwardRef((props, ref) => {
    const imgRef = useRef();
    const myObj = {
        0: one,
        1: one,
        2: one,
        3: one,
        4: one,
        5: one,
        6: one,
        7: one,
    }

    const onEnter = (e) => {
        e.stopPropagation()
        imgRef.current.src = myObj[e.currentTarget.dataset.index];
        imgRef.current.classList.add('image-active')
        imgRef.current.style.transform = 'scale(3) '
        imgRef.current.style.display = 'block'

    }
    const onLeave = (e) => {
        e.stopPropagation()
        imgRef.current.classList.remove('image-active')
        imgRef.current.style.transform = 'scale(0) '
        // imgRef.current.style.display = undefined

    }


    const { x, y } = useMausePosition();

    return (
        <div>
            <div style={{ position: 'relative' }}><img className="image-inactive" ref={imgRef} style={{ left: x, top: y }}></img></div>
            <div className="support-div" ref={ref}>
                <div className='support-text' >

                    <div className="esas">
                        <div className="shekil" >
                            <img data-index={0} onMouseEnter={onEnter} onMouseLeave={onLeave}
                                src="//images.ctfassets.net/hk1y6qq9eac8/3TDdMehuUkddZqCtZiUXm6/1d6de6e343464dce6d0154550bc4b128/lad-logo.svg" alt="Lad Logo"
                                class="img-fluid" />
                        </div>
                        <p className="client" id="wit">CLients</p>
                        <div className="shekil" >
                            <img
                                data-index={1} onMouseEnter={onEnter} onMouseLeave={onLeave}
                                src="//images.ctfassets.net/hk1y6qq9eac8/3TDdMehuUkddZqCtZiUXm6/1d6de6e343464dce6d0154550bc4b128/lad-logo.svg" alt="//images.ctfassets.net/hk1y6qq9eac8/YcpNMP077qEBfMU09aUFo/49cd2b04cd28efe40aa34dba95dbf776/misk-logo.svg" class="img-fluid normal-logo" />
                        </div>
                    </div>

                    <p className="client">Who</p>

                    <div className="esas-1">
                        <div className="shekil">
                            <img
                                data-index={2} onMouseEnter={onEnter} onMouseLeave={onLeave}
                                src="//images.ctfassets.net/hk1y6qq9eac8/1U3nzq23qZbGymxaAJb2ub/4ba6d1faf6bb80a5b4c0a304a9f2c6b7/sib-logo.svg" alt="//images.ctfassets.net/hk1y6qq9eac8/1U3nzq23qZbGymxaAJb2ub/4ba6d1faf6bb80a5b4c0a304a9f2c6b7/sib-logo.svg" class="img-fluid normal-logo" />
                        </div>

                        <p className="love"><span className="lov"> Love</span></p>
                        <div className="shekil">
                            <img
                                data-index={3} onMouseEnter={onEnter} onMouseLeave={onLeave}
                                src="//images.ctfassets.net/hk1y6qq9eac8/L4PpVGJDacgCofGabf7KQ/25b68b106a5a81b456d87e0ff5639dfb/honda-logo.svg" alt="//images.ctfassets.net/hk1y6qq9eac8/L4PpVGJDacgCofGabf7KQ/25b68b106a5a81b456d87e0ff5639dfb/honda-logo.svg" class="img-fluid normal-logo" />
                        </div>
                    </div>

                    <div className="esas-3">
                        <div className="shekil"  >
                            <img
                                data-index={4} onMouseEnter={onEnter} onMouseLeave={onLeave}
                                src="//images.ctfassets.net/hk1y6qq9eac8/1dDxLCy8PWJiuhHqBU9QKs/ebdb6a5a072dd099c2a3139cb582d499/dc-logo.svg" alt="//images.ctfassets.net/hk1y6qq9eac8/1dDxLCy8PWJiuhHqBU9QKs/ebdb6a5a072dd099c2a3139cb582d499/dc-logo.svg" class="img-fluid normal-logo" />
                        </div>
                        <p className="love"><span className="lov" id="lov"> Working</span></p>

                        <div className="shekil" >
                            <img
                                data-index={5} onMouseEnter={onEnter} onMouseLeave={onLeave}
                                src="//images.ctfassets.net/hk1y6qq9eac8/3RE6pJAKTM9tQ2LSyEonTO/757ebe762cd4b0a98613204bad1c25b3/dubai-airport-logo.svg" alt="//images.ctfassets.net/hk1y6qq9eac8/3RE6pJAKTM9tQ2LSyEonTO/757ebe762cd4b0a98613204bad1c25b3/dubai-airport-logo.svg" class="img-fluid normal-logo" />
                        </div>
                    </div>


                    <div className="esas-4">
                        <div className="shekil" >
                            <img
                                data-index={6} onMouseEnter={onEnter} onMouseLeave={onLeave}
                                src="//images.ctfassets.net/hk1y6qq9eac8/1U3nzq23qZbGymxaAJb2ub/4ba6d1faf6bb80a5b4c0a304a9f2c6b7/sib-logo.svg" alt="//images.ctfassets.net/hk1y6qq9eac8/1U3nzq23qZbGymxaAJb2ub/4ba6d1faf6bb80a5b4c0a304a9f2c6b7/sib-logo.svg" class="img-fluid normal-logo" />
                        </div>
                        <p className="client" id="wit">With Us</p>
                        <div className="shekil" >
                            <img
                                data-index={7} onMouseEnter={onEnter} onMouseLeave={onLeave}
                                src="//images.ctfassets.net/hk1y6qq9eac8/L4PpVGJDacgCofGabf7KQ/25b68b106a5a81b456d87e0ff5639dfb/honda-logo.svg" alt="//images.ctfassets.net/hk1y6qq9eac8/L4PpVGJDacgCofGabf7KQ/25b68b106a5a81b456d87e0ff5639dfb/honda-logo.svg" class="img-fluid normal-logo" />
                        </div>
                    </div>

                    <Link to="/sharp">
                        <button className="case" >VIEW OUR CASE STUDIOS</button>

                    </Link>
                </div>



                <div>












                </div>
            </div>


        </div>
    )

}
)
export default Supports