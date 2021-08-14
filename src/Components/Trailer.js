import React,{useState,useEffect} from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import Trailerclose from './Trailerclose'
function Trailer({moviename,close}){
  
	const opts = {
      height: '390',
      width: '640',
      playerVars: {
        
        autoplay: 1,
      },
    };
      const opts1 = {
      height: '210',
      width: '320',
      playerVars: {
        
        autoplay: 1,
      },
    };
const [trailerid,settrailerid ] = useState('')
   useEffect(()=>{

     movieTrailer(moviename).then((url)=>{
      console.log(url)
      if(url==null){
      close(false)

        alert("Unfortunately No Trailer Found")
        
      }
      const urlParser = new URLSearchParams(new URL(url).search);
      var id = urlParser.get('v')
      console.log(id)
      settrailerid(id)
    }).catch((err)=>{console.log("Error Occured: ",err)});
      // eslint-disable-next-line
   },[])
	return(
		<div className="trailer">
    
    <YouTube videoId={trailerid} opts={window.innerWidth>650?opts:opts1} />
    <Trailerclose clk={close}/>
    </div>
	)
}

export default Trailer