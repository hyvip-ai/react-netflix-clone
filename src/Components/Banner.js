import React,{useState,useEffect} from 'react'
import requests from "../request";

function Banner() {
const api_key = "b988754cffa2df249c974ac7b1d714e5"
    function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
    const [data,setdata] = useState({});
    const [show,setshow] = useState(true);

    useEffect(()=>{
        var page = getRandomArbitrary(1,20)
        console.log(page)
    var url = requests.baseUrl+`/discover/tv?api_key=${api_key}&page=${page}&with_networks=213`
   netor(url,page);
    },[])
    async function netor(url,page){
  console.log("asche")
    var tempdata = await fetch(url);
    var res = await data.json();
    tempdata = res.results[page]
    setdata(tempdata);
    setshow(true)
    console.log(tempdata)

}
    return (
        <div className="banner">
       {show ? 
        <div className="innerbanner">
        <div className="layer"></div>
        <div className="bannerimage"><img src={requests.images+data.backdrop_path} alt="show"/></div>
        <div className="description">
        <div className="title">
            <h1>{data.name}</h1>
        </div>
        <div className="buttons">
        <button>Play Trailer</button>
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
