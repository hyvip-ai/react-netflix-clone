import React,{useEffect, useState} from 'react'
import requests from '../request'
import Button from '../Components/Button';
import MovieList from '../Components/MovieList';
function Row({nameFun,showData,mainUrl,genre}) {
    const [movies, setmovies] = useState([]) 
    useEffect(()=>{
        var url = requests.baseUrl+requests[mainUrl].url
        getmov(url)
    },[mainUrl])
    async function getmov(url){
        var data = await fetch(url);
        var res = await data.json();
        setmovies(res.results);
        console.log(res.results)
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
