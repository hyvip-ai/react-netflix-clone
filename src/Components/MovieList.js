import React from 'react'
import uuid from 'uuid/dist/v4'
import MovieCard from './MovieCard'
function MovieList({movielist,namefun}) {
    return (
        movielist.map((item,index)=>{ 
            return <MovieCard movie={item} func={namefun} key={uuid()}/>
        })
    )
}

export default MovieList
