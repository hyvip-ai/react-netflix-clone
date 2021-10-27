import React from 'react'
import '../index.css'
import {Link} from "react-router-dom"
function Button({data}) {

    return (
        <Link to={`/pages/${data}`}> 
            <div className="loadmore">
                <button>&#10140;</button>
            </div>
       </Link>
    )
}

export default Button
