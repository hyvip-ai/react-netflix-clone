import React,{useState} from 'react'
import Banner from '../Components/Banner'
import {requests} from "../request";
import Row from './Row';
import uuid from "uuid/dist/v4"
import Spinner from '../Components/Spinner';
function Home() {
    const [showData, setshowData] = useState(false)
    setTimeout(()=>{
        setshowData(true)
    },1500)
    return (
 
        <>
        {
            !showData?<Spinner/>:<>
                                    <Banner/>
                                    { Object.keys(requests).map((item,i)=>{
                                    return <Row key={uuid()} genre={item}/>
                                    })}
                                </>
        }

        </>
    )
}

export default Home
