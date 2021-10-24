import { useState } from "react";
import requests from "./request";
// import Spinner from "./Components/Spinner";
import Banner from "./Components/Banner"
import Extended from "./Components/Extended"
import Trailer from "./Components/Trailer"
import Row from "./Shared-Folder/Row";

function App() {
// const [show, setshow] = useState(false)
const [showtrailer, setshowtrailer] = useState(false)
const [name, setname] = useState("")
const [showmore, setshowmore] = useState(false)
const [showmoreurl, setshowmoreurl] = useState(false)
function showmoredata(data){
    console.log(data)
  setshowmoreurl(data);
  // setshow(false);
  setshowmore(true);
}

function hidemoredara(){
  //  setshow(true);
setshowmore(false);
}
function getmoviename(data){
  setname(data)
    console.log(data)
    setshowtrailer(true)
}
  return ( 
    <div className="App">
      
      {/* {!show && !showmore? <Spinner/> : null} */}
     
     
    {!showmore?  <Banner func={getmoviename}/>:null}
    

    {!showmore?   Object.keys(requests).map((item,i)=>{
        console.log(item)
       return item === "baseUrl" || item === "images"?null:<Row genre={item} mainUrl={item} nameFun={getmoviename} showData={showmoredata}/>
      }):null}
            
     
       { showmore? <Extended name={getmoviename} clic={hidemoredara} genre={showmoreurl}/> : null}
      {showtrailer?<Trailer moviename={name} close={setshowtrailer}/>:null}
    </div>
  );
}

export default App;
