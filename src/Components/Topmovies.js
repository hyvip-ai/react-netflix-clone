import React from 'react'
import Topmovie from './Topmovie'
import uuid from 'uuid/dist/v4'
function Topmovies({movielist}) {
    return (
        
        movielist.map((item,index)=>{ 
            return <Topmovie movie={item} key={uuid()}/>
        })
    )
}

export default Topmovies
