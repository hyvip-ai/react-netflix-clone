import React,{useEffect, useState} from 'react'
import {requests} from '../request'
import Button from '../Components/Button';
import MovieList from '../Components/MovieList';
import axios from 'axios';
import ScrollContainer from 'react-indiana-drag-scroll';
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
    function handleScroll(){
        console.log("This is Scrolling")
    }
    return (
        <ScrollContainer className="trending scroll-container" horizontal={true} activationDistance={10} onScroll={handleScroll}>
            <h1>{requests[genre].heading}</h1>
            <div className="trendlist">
            <MovieList movielist={movies}/>
            <Button data={genre}/>
        
            </div>
     
      </ScrollContainer>
    )
}

export default Row
