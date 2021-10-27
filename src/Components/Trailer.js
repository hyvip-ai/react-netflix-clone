import React,{useState,useEffect} from 'react';

import { useHistory, useParams } from 'react-router';
import movieTrailer from 'movie-trailer'
import Trailerclose from './Trailerclose'
function Trailer(){
  const history = useHistory()
  const {trailerName} = useParams()
  console.log(trailerName)
  const [trailerUrl,settrailerUrl ] = useState('')
  useEffect(()=>{
      movieTrailer(trailerName).then((url)=>{
      console.log(url)
      if(url==null){
        alert("Unfortunately No Trailer Found")
        history.push("/");
      }
      let myurl = new URL(url);
      const urlParser = new URLSearchParams(myurl.search);
      var id = urlParser.get('v')
      var newUrl = new URL(`/embed/${id}`,"https://www.youtube.com/")
      settrailerUrl(newUrl.href)

    }).catch((err)=>{console.log("Error Occured: ",err)});
  })
	return(
		<div className="trailer">
    
    <iframe title="myTrailer" style={{height:"100%",width:"100%"}} src={trailerUrl} frameBorder="0" allowFullScreen/>
    <Trailerclose/>
    </div>
	)
}

export default Trailer