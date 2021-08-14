import React from 'react'
import Topmovie from './Topmovie'

function Sci({namefun,movielist}) {
    return (
        
        movielist.map(item=>{ 
            return <Topmovie func={namefun} movie={item} key={item.id}/>
        })
    )
}

export default Sci
