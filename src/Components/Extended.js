import React,{useEffect,useState} from 'react'
import '../index.css'
import requests from "../request";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner'
import Topmovies from './Topmovies'
import Goback from './Goback'
function Extended({genre,clic}) {
    
   // console.log(genre)

  
   var url = requests.baseUrl +requests[genre]
   const [movies,setmovies] = useState([])
   const [page,setpage] = useState(1)
   const [max,setmax] = useState(0)
   const [hasmore,sethasmore] = useState(true)
   useEffect(()=>{
      console.log("effect")
      fetchdata();
       // eslint-disable-next-line
   },[])
   async function fetchdata(){
      // console.log("dhukche "+page)
    
      if(page===1){
       
       var myurl = url + `&page=${page}`
      console.log(myurl)
       var data =await fetch(url);
      var res = await data.json();
     
      
         
      setmax(res.total_pages);
  
  
      res = res.results;
      
    
      setmovies((prev)=>{
        
         return [...prev,...res]
      })
      setpage((prev)=>{
         return prev+1
      })
      }
   }

   async function fetchmoredata(){

      if(page<=max){ 
      console.log("fetchmoredata")       
      var myurl = url + `&page=${page}`
      var data =await fetch(myurl);
      var res = await data.json();
      console.log(res)
      setmax(res.total_pages);
      res = res.results;
      setmovies((prev)=>{ 
         return [...prev,...res]
      })
      setpage((prev)=>{
         return prev+1
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
          loader={<h4 style={{color:"white",fontFamily:"cursive"}}>Loading Please Wait...</h4>}
           endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          } >
            <Topmovies movielist={movies}/>
        </InfiniteScroll>
         </div>

        :<Spinner/>}
       </div>
    )
}

export default Extended
