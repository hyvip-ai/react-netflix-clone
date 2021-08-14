import React from 'react'
import '../index.css'

function Button({data,func}) {
    return (
        
       <div className="loadmore">
        <button onClick={()=>{func(data)}}> &#10140;</button>
       </div>
    )
}

export default Button
