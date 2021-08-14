import React from 'react'
import Topmovie from './Topmovie'

function Documen({movielist}) {
    return (
        
        movielist.map(item=>{ 
            return <Topmovie movie={item} key={item.id}/>
        })
    )
}

export default Documen
