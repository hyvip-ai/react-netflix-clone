import React from 'react'
import { useHistory } from 'react-router'
import '../index.css'

function Trailerclose() {
   const history = useHistory()
   function hidethis(){
         history.push("/")
   }
    return (
        
       <div className="close">
        <button onClick={hidethis}>X</button>
       </div>
    )
}

export default Trailerclose
