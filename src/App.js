import { useEffect,useState } from "react";
import requests from "./request";
import Spinner from "./Components/Spinner";
import Topmovies from "./Components/Topmovies";
import Action from "./Components/Action";
import Thriller from "./Components/Thriller";
import Trendwe from "./Components/Trendwe";
import Trendday from "./Components/Trenda";
import Roman from "./Components/Roman";
import Netor from "./Components/Netor";
import Documen from "./Components/Documentries";
import Myst from "./Components/Myst";
import Sci from "./Components/Sci";
import Amaz from "./Components/Amzon";
import Scitv from "./Components/Scitv";
import Mysttv from "./Components/Mysttv";
import Docttv from "./Components/Docttv";
import Romtv from "./Components/Romtv";
import Banner from "./Components/Banner"
function App() {
const [show, setshow] = useState(false)
const [toprate, settoprate] = useState([]) 
const [actionrate, setactionrate] = useState([]) 
const [thrillrate, setthrillrate] = useState([]) 
const [trendwerate, settrendwerate] = useState([]) 
const [trenddarate, settrenddarate] = useState([]) 
const [romanrate, setromanrate] = useState([]) 
const [netorrate, setnetorrate] = useState([]) 
const [docurate, setdocurate] = useState([]) 
const [mystrate, setmystrate] = useState([]) 
const [scirate, setscirate] = useState([]) 
const [amzrate, setamzrate] = useState([]) 
const [scifitvrate, setscifitvrate] = useState([]) 
const [mysttvrate, setmysttvrate] = useState([]) 
const [doctvrate, setdoctvrate] = useState([]) 
const [romtvrate, setromtvrate] = useState([]) 
useEffect(() => {
  var url = requests.baseUrl+requests.top_rated
  getmov(url)
  url = requests.baseUrl+requests.action_movies
  getaction(url)
  url = requests.baseUrl+requests.thriller_movies
  getthriller(url)
  url = requests.baseUrl+requests.trending_week
  trendwe(url);
   url = requests.baseUrl+requests.trending_day
  trendda(url);
   url = requests.baseUrl+requests.romantic_movies
  roman(url);
   url = requests.baseUrl+requests.netflix_series
  netor(url);
   url = requests.baseUrl+requests.documentries_movies
  documne(url)
  url = requests.baseUrl+requests.mystery_movies
  mystery(url)
  url = requests.baseUrl+requests.scifi_movies
  scifi(url)
  url = requests.baseUrl+requests.amazon_series
  amazon(url)
  url = requests.baseUrl+requests.thriller_tv
  scifitv(url)
  url = requests.baseUrl+requests.mystery_tv
  mysttv(url)
  url = requests.baseUrl+requests.documentries_tv
  doctv(url)
  url = requests.baseUrl+requests.romantic_tv
  romantv(url)
   
  
  
}, [])

async function getmov(url){
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    settoprate(res.results);
    

}
async function getaction(url){
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setactionrate(res.results);

}

async function getthriller(url){
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setthrillrate(res.results);

}
async function trendwe(url){
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    settrendwerate(res.results);

}
async function trendda(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    settrenddarate(res.results);

}
async function roman(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setromanrate(res.results);

}
async function netor(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setnetorrate(res.results);

}
async function documne(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setdocurate(res.results);

}
async function mystery(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setmystrate(res.results);

}
async function scifi(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setscirate(res.results);

}
async function amazon(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setamzrate(res.results);

}
async function scifitv(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setscifitvrate(res.results);

}

async function mysttv(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setmysttvrate(res.results);

}
async function doctv(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setdoctvrate(res.results);

}
async function romantv(url){
  console.log("asche")
    var data = await fetch(url);
    var res = await data.json();
    // console.log(res)
    setromtvrate(res.results);
    setTimeout(()=>{
      console.log("settimeout")
    setshow(true);

  },1200)
}



  return (
    <div className="App">
      
      {!show? <Spinner/> : null}
     
      {show?
      <Banner/>
     :null}

      {show?
      <div className="trending">
        <h1>Top Rated Movies</h1>
      <div className="trendlist">
      <Topmovies movielist={toprate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Action Movies</h1>
      <div className="trendlist">
      <Action movielist={actionrate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Thriller Movies</h1>
      <div className="trendlist">
      <Thriller movielist={thrillrate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Trending This Week</h1>
      <div className="trendlist">
      <Trendwe movielist={trendwerate}/>
      </div>
     
      </div>:null}

       {show?
      <div className="trending">
        <h1>Trending Now</h1>
      <div className="trendlist">
      <Trendday movielist={trenddarate}/>
      </div>
     
      </div>:null}
       {show?
      <div className="trending">
        <h1>Romantic Movies</h1>
      <div className="trendlist">
      <Roman movielist={romanrate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Netflix Originals Shows</h1>
      <div className="trendlist">
      <Netor movielist={netorrate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Amazon Prime Originals Shows</h1>
      <div className="trendlist">
      <Amaz movielist={amzrate}/>
      </div>
     
      </div>:null}
        {show?
      <div className="trending">
        <h1>Documentries</h1>
      <div className="trendlist">
      <Documen movielist={docurate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Mysteries</h1>
      <div className="trendlist">
      <Myst movielist={mystrate}/>
      </div>
     
      </div>:null}
       {show?
      <div className="trending">
        <h1>Science Fiction Movies</h1>
      <div className="trendlist">
      <Sci movielist={scirate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Thriller Tv Shows</h1>
      <div className="trendlist">
      <Scitv movielist={scifitvrate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Mystery Tv Shows</h1>
      <div className="trendlist">
      <Mysttv movielist={mysttvrate}/>
      </div>
     
      </div>:null}
      {show?
      <div className="trending">
        <h1>Documentry Tv Shows</h1>
      <div className="trendlist">
      <Docttv movielist={doctvrate}/>
      </div>
     
      </div>:null}

       {show?
      <div className="trending">
        <h1>Romantic Tv Shows</h1>
      <div className="trendlist">
      <Romtv movielist={romtvrate}/>
      </div>
     
      </div>:null}

       
     
    </div>
  );
}

export default App;
