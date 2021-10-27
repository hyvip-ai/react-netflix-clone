import React from 'react'
import { useHistory } from 'react-router'
import '../index.css'

function Goback() {
    const history = useHistory()
    const handleClick = () =>{
        history.push("/")
    }
    return (
       <div className="goback loadmore">
        <button onClick={handleClick}> &#10140;</button>
       </div>
    )
}

export default Goback
