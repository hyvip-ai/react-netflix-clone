import React,{useState,useEffect} from 'react'
import requests from "../request";

function Banner({func}) {
const api_key = "b988754cffa2df249c974ac7b1d714e5"
    function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
    const [data,setdata] = useState({});
    const [show,setshow] = useState(true);

    useEffect(()=>{
        var page = getRandomArbitrary(1,20)
        var pic = getRandomArbitrary(1,20)
        console.log(page)
    var url = requests.baseUrl+`/discover/tv?api_key=${api_key}&page=${page}&with_networks=213`;
     netor(url,page,pic);
    },[])
    async function netor(url,page,pic){
  console.log("asche")
    var tempdata = await fetch(url);
    var res = await tempdata.json();
    var tempdata1 = res.results[pic]
    setdata(tempdata1);
    setshow(true)
    console.log(tempdata1)

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
