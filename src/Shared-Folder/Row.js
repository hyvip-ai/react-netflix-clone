import React,{useEffect, useState} from 'react'
import {requests} from '../request'
import Button from '../Components/Button';
import MovieList from '../Components/MovieList';
import axios from 'axios';
function Row({nameFun,showData,mainUrl,genre}) {
    const [movies, setmovies] = useState([]) 
    useEffect(()=>{
        var url = requests[mainUrl].url
        getmov(url)
    },[mainUrl])
    async function getmov(url){
    //    axios.defaults.baseURL="https://api.themoviedb.org/3"
        axios.get(url).then(res=>{
            setmovies(res.data.results);
        })
        
      
    }
    return (
        <div className="trending">
            <h1>{requests[mainUrl].heading}</h1>
            <div className="trendlist">
            <MovieList namefun={nameFun} movielist={movies}/>
            <Button func={showData} data={genre}/>
            </div>
     
      </div>
    )
}

export default Row
