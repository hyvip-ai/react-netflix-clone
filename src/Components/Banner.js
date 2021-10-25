import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {api_key} from "../request";

function Banner({func}) {

    function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
    const [data,setdata] = useState({});
    const [show,setshow] = useState(true);

    useEffect(()=>{
        var page = getRandomArbitrary(1,20)
        var pic = getRandomArbitrary(1,20)
        // console.log(page)
    var url = `/discover/tv?api_key=${api_key}&page=${page}&with_networks=213`;
     netor(url,pic);
    },[])
    async function netor(url,pic){
//   console.log("asche")
  axios.defaults.baseURL="https://api.themoviedb.org/3"

    axios.get(url).then(res=>{
        // console.log(res.data.results)
        var tempdata1 = res.data.results[pic]
        console.log(tempdata1)
        setdata(tempdata1);
        setshow(true)
        console.log(tempdata1)
    })
 

}
    return (
        <div className="banner">
       {show ? 
        <div className="innerbanner">
        <div className="layer"></div>
        <div className="bannerimage"><img src={'https://image.tmdb.org/t/p/w500/'+data.backdrop_path} alt="show"/></div>
        <div className="description">
        <div className="title">
            <h1>{data.name}</h1>
        </div>
        <div className="buttons">
        <button onClick={()=>{func(data.name)}}>Play Trailer</button>
        <button>Watch Series</button>
        </div>
        <div className="subtitle"><h3> {data.overview}</h3>
        </div>
        </div>
        </div> : null}
        </div>
      
    )
}

export default Banner
