import React from 'react'
import '../index.css'



function Topmovie({ movie,func}) {
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

            
           <div onClick={()=>func(movie.title?movie.title:movie.original_name)} id={"mcard"+ id} className="main" onMouseOver={sidebar} onMouseLeave={toogle}>
            <div className="moviecard">
                <img src={movie.poster_path?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:`https://th.bing.com/th/id/OIP.1eLP0aOUDUOgiBv7z17HCQHaE8?pid=ImgDet&rs=1`} alt="" />
                
                <div className="des" id={"description"+id}>
                    <div className="name">
                       
                        {movie.title?movie.title:movie.original_name}
                    </div>
                    <div className="rating">
                     <div className="imdb">
                            <img src="https://th.bing.com/th/id/R.7067a58a97602912b36c89d4236edb9a?rik=7IctI%2bJjFdcZsQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdanleech%2fsimple%2f1024%2fimdb-icon.png&ehk=BAeXlhGXYhKl0j0yV%2fOr3lsHXZzE%2fHUxIqBf%2fNX4UAo%3d&risl=&pid=ImgRaw&r=0" alt="imdb"/>
                        </div>
                        {movie.vote_average}
                    </div>
                </div>

            </div>
            
        </div>
   



    )
}

export default Topmovie
