import React from 'react'
import Topmovie from './Topmovie'

function Netor({namefun,movielist}) {
    return (
        
        movielist.map(item=>{ 
            return <Topmovie func={namefun} movie={item} key={item.id}/>
        })
    )
}

export default Netor
