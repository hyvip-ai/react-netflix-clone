import React,{useState,useEffect} from 'react';

import { useHistory, useParams } from 'react-router';
import movieTrailer from 'movie-trailer'
import Trailerclose from '../Components/Trailerclose'
function Trailer(){
  const history = useHistory()
  const {trailerName} = useParams()
  console.log(trailerName)
  const [trailerUrl,settrailerUrl ] = useState('')
  useEffect(()=>{
    console.log("useEffect a Asche")
      movieTrailer(trailerName).then((url)=>{
      
      console.log(url)
      if(!url){
        alert("Unfortunately No Trailer Found")
        history.push("/");
        return
      }

      let myurl = new URL(url);
      const urlParser = new URLSearchParams(myurl.search);
      var id = urlParser.get('v')
      var newUrl = new URL(`/embed/${id}`,"https://www.youtube.com/")
      settrailerUrl(newUrl.href)
     

    });
  },[history,trailerName])
	return(
		<div className="trailer">
    
    <iframe title="myTrailer" style={{height:"100%",width:"100%"}} src={trailerUrl} frameBorder="0" allowFullScreen/>
    <Trailerclose/>
    </div>
	)
}

export default Trailer