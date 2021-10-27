import React,{useEffect, useState} from 'react'
import {requests} from '../request'
import Button from '../Components/Button';
import MovieList from '../Components/MovieList';
import axios from 'axios';
function Row({genre}) {
    const [movies, setmovies] = useState([]) 
    useEffect(()=>{
        var url = requests[genre].url
        getmov(url)
    },[genre])
    async function getmov(url){
        axios.get(url).then(res=>{
            setmovies(res.data.results);
            
        })
        
      
    }
    return (
        <div className="trending">
            <h1>{requests[genre].heading}</h1>
            <div className="trendlist">
            <MovieList movielist={movies}/>
            <Button data={genre}/>
            </div>
     
      </div>
    )
}

export default Row
