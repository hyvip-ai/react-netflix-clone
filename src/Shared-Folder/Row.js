import React, { useEffect, useState } from "react";
import { requests } from "../request";
import Button from "../Components/Button";
import MovieList from "../Components/MovieList";
import axios from "axios";
import sideScroll from "../functionalities/scroll";
function Row({ genre }) {
  const [movies, setmovies] = useState([]);

  useEffect(() => {

    var url = requests[genre].url;
    getmov(url);
  }, [genre]);

  async function getmov(url) {
    axios.get(url).then((res) => {
      setmovies(res.data.results);
    });
  }
  function handleScrollLeft() {
    console.log("This is Scrolling");
    const container = document.getElementById(genre)
    sideScroll(container,'left',10,600,40)
  }
  function handleScrollRight(){
    console.log("This is Scrolling");
    const container = document.getElementById(genre)
    sideScroll(container,'right',10,600,40)
    
  }
  return (
    <div className="scroll-row">
      <h1>{requests[genre].heading}</h1>

        <div id={genre} className="trendlist">
            <MovieList movielist={movies} />
            <Button data={genre} />
            
        </div>
        <div className="row-buttons">
                <button onClick={handleScrollLeft} className="left">
                &#8701;
                </button>
                <button onClick={handleScrollRight} className="right">
                &#8702;
                </button>
        </div>
    </div>
  );
}




  


export default Row;
