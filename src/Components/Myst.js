import React from 'react'
import Topmovie from './Topmovie'

function Myst({movielist}) {
    return (
        
        movielist.map(item=>{ 
            return <Topmovie movie={item} key={item.id}/>
        })
    )
}

export default Myst
