import React from 'react'
import Topmovie from './Topmovie'

function Topmovies({movielist}) {
    return (
        
        movielist.map((item,index)=>{ 
            return <Topmovie movie={item} key={item.id}/>
        })
    )
}

export default Topmovies
