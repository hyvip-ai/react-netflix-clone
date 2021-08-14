import React from 'react'
import '../index.css'

function Trailerclose({clk}) {
   function hidethis(){
         clk(false)
      }
    return (
        
       <div className="close">
        <button onClick={hidethis}>X</button>
       </div>
    )
}

export default Trailerclose
