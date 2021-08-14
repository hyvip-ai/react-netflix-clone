import React from 'react'
import '../index.css'
function Spinner() {
    return (
       <div className="outer"> <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
       <p>Loading Please Wait</p>
       </div>
    ) 
}

export default Spinner
