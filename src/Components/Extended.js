import React,{useEffect,useState} from 'react'
import '../index.css'
import {requests} from "../request";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner'
import Goback from './Goback'
import MovieList from './MovieList';
import axios from 'axios';
function Extended({genre,clic,name}) {
    
   // console.log(genre)

  
   var url =requests[genre].url
   const [movies,setmovies] = useState([])
   const [page,setpage] = useState(1)
   const [max,setmax] = useState(0)
   const [hasmore,sethasmore] = useState(true)
   useEffect(()=>{
      console.log("effect")
    
      if(page===1){
       
         var myurl = url + `&page=${page}`
        console.log(myurl)
      //    var data =await fetch(url);
      //   var res = await data.json();
         axios.get(url).then(res=>{
            console.log(res)
       
        setmax(res.data.total_pages);
    
    
        res = res.data.results;
        
      
        setmovies((prev)=>{
          
           return [...prev,...res]
        })
        setpage((prev)=>{
           return prev+1
        })
         })
        

        }
   },[page,url])


   async function fetchmoredata(){

      if(page<=max){ 
      var myurl = url + `&page=${page}`
     axios.get(myurl).then(res=>{
      console.log(res)
      setmax(res.data.total_pages);
      res = res.data.results;
      setmovies((prev)=>{ 
         return [...prev,...res]
      })
      setpage((prev)=>{
         return prev+1
      })
     })
 
      }

      else{
      sethasmore(false)
      }
   }
    return (
        
       <div>
       <Goback back={clic}/>
          {movies.length>0?
         <div className="expandscroll">
            <InfiniteScroll
          dataLength={movies.length}
          next={fetchmoredata}
          hasMore={hasmore}
          loader={<div class="lds-ring"><div></div><div></div><div></div><div></div></div>}
           endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          } >
            <div className="expnadedtrendlist">
            <MovieList namefun={name} movielist={movies}/>
            </div>
        </InfiniteScroll>
         </div>

        :<Spinner/>}
       </div>
    )
}

export default Extended
