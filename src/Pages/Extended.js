import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../index.css";
import { requests } from "../request";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Components/Spinner";
import Goback from "../Components/Goback";
import MovieList from "../Components/MovieList";
import axios from "axios";
function Extended() {
  const {genre} = useParams();
  var {url} = requests[genre];
  const [movies, setmovies] = useState([]);
  const [page, setpage] = useState(1);
  const [max, setmax] = useState(0);
  const [hasmore, sethasmore] = useState(true);
  useEffect(() => {
  
    if(!movies.length){
      
     
        axios.get(url).then((res) => {
          setmax(res.data.total_pages);
          res = res.data.results;
          setmovies((prev) => {
            return [...prev, ...res];
          });
          setpage((prev) => {
            return prev + 1;
          });
        });
      
    
    }
   
  },[movies,genre,page,url]);

  async function fetchmoredata() {
    if (page <= max) {
      var myurl = url + `&page=${page}`;
      axios.get(myurl).then((res) => {
        setmax(res.data.total_pages);
        res = res.data.results;
        setmovies((prev) => {
          return [...prev, ...res];
        });
        setpage((prev) => {
          return prev + 1;
        });
      });
    } else {
      sethasmore(false);
    }
  }
  return (
    <div>
      <Goback />
      {movies.length > 0 ? (
        <div className="expandscroll">
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchmoredata}
            hasMore={hasmore}
            loader={
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <div className="expnadedtrendlist">
              <MovieList movielist={movies} />
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Extended;
