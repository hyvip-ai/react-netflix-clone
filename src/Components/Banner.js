import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { api_key } from "../request";

function Banner() {
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const [data, setdata] = useState({
    backdrop_path: "",
    name: "",
    overview: "",
  });
  const history  = useHistory()
  function handleTrailer(){
    history.push(`/trailer/${data.title || data.original_name}`)
}
  useEffect(() => {
    console.log("Running")
    var page = getRandomArbitrary(1, 20);
    var pic = getRandomArbitrary(1, 20);
    var url = `/discover/tv?api_key=${api_key}&page=${page}&with_networks=213`;
    axios.get(url).then((res) => {
      var tempdata1 = res.data.results[pic];
      if(data.backdrop_path==="" && data.name==="" && data.overview==="" ){
        setdata(()=> {return { ...data, ...tempdata1 }});
      }
    });
  },[data]);



  return (
    <div className="banner">
      <div className="innerbanner">
        <div className="layer"></div>
        <div className="bannerimage">
          <img
            src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path}
            alt="show"
          />
        </div>
        <div className="description">
          <div className="title">
            <h1>{data.name}</h1>
          </div>
          <div className="buttons">
            <button
              onClick={handleTrailer}
            >
              Play Trailer
            </button>
            <button
              onClick={() => {
                alert("You Are Not In Real Netflix Dumb");
              }}
            >
              Watch Series
            </button>
          </div>
          <div className="subtitle">
            <h3> {data.overview}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
