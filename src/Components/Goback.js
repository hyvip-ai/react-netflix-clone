import React from 'react'
import '../index.css'

function Goback({back}) {
    return (
        
       <div className="goback loadmore">
        <button onClick={back}> &#10140;</button>
       </div>
    )
}

export default Goback
