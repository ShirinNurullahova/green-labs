import React, { forwardRef, useEffect,useRef } from "react";

import '../Partners/Partners.css'
const Partners = forwardRef((props, ref) => {
    return (
        <div className="xett"> 
        <div className='esas-partner' ref={ref}>
            <div>
                <h1 className='our'>OUR PARTNERS</h1>
                <p className='set'>We have built out an impressive set of partnership, alliances and go to market collaboration to drive our market activity</p>
            </div>

            <div className='marka'>
                <img className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/1pOy41ilyXhV1zGhCKR3Ig/8797ae337cb3042b52f6b108aa7c734b/ms.svg" alt="Microsoft" />
                <img className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/fe3FNRtIeTqrF87PNMF8z/7fe74ffc208f95c6537ad3467392bb63/azure.svg" alt="Microsoft Azure" />
                <img className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/7iYv1I5NccmoDKMMv90agq/790ae26e2db5bf92e9491a1742d2393d/liferay.svg" alt="Liferay" />
                <img className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/1udsZqrHqAr6TYFg8TxdZI/2ce6444776992a370ccbd2a55267bead/progress-stiefinity.svg" alt="Progress Sitefinity" />


                <img className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/61UkH0yLn9ogbv6qrnHgUt/f0282fa00308510220bfe4459cd2b181/sitecore.svg" alt="Sitecore" />
                <img className='marka-img' src="//images.ctfassets.net/hk1y6qq9eac8/3E0AMaaGIDznM9YeCYVgUW/9af1d3ea4eb0f057b2ef01a30f39f959/shopify.svg" alt="Shopify" />
                <img className='marka-img' id='apple' src="//images.ctfassets.net/hk1y6qq9eac8/6nMKZF9PO86Y2Z5jdvygy4/8edf2ff5d7a1140bc4f6b7711f8329f5/apple.svg" alt="Apple" />
                <img className='marka-img' id='adam' src="//images.ctfassets.net/hk1y6qq9eac8/2P6bQNPSZGIcFJxBWqlMQc/55533b1ddba45100daf2677c92871074/android.svg" alt="Android" />
            </div>

        </div>
        </div>
    )
}
)

export default Partners