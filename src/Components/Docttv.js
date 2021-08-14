import React from 'react'
import Topmovie from './Topmovie'

function Docttv({movielist}) {
    return (
        
        movielist.map(item=>{ 
            return <Topmovie movie={item} key={item.id}/>
        })
    )
}

export default Docttv
