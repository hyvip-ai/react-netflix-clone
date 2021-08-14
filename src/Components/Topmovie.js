import React from 'react'
import '../index.css'



function Topmovie({ movie}) {
var id = movie.id + Math.random()
  function sidebar(){
        // console.log("asche ekahne")

        document.getElementById(`mcard${id}`).style.transform="scale(1.1)"
        document.getElementById(`mcard${id}`).style.boxShadow="0px 0px 12px rgba(255,255,255,0.6)"
       
  


    }
function toogle(){
    document.getElementById(`mcard${id}`).style.transform="scale(1)"
        document.getElementById(`mcard${id}`).style.boxShadow="none"




}

    return ( 

       
           <div id={"mcard"+ id} className="main" onMouseOver={sidebar} onMouseLeave={toogle}>
            <div className="moviecard">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                
                <div className="des" id={"description"+id}>
                    <div className="name">
                        {movie.title?movie.title:movie.original_name}
                    </div>
                    <div className="rating">
                        {movie.vote_average}
                    </div>
                </div>

            </div>
            
        </div>
   



    )
}

export default Topmovie
