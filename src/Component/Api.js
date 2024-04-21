import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

const Api = () => {
    const [state,setState]=useState("")
    
const API ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

const fetchData = async (url)=>{
    try{
        const res = await fetch(url);
        const data= await res.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
};

useEffect(()=>{
    fetchData (API);
},[]);

return (
    <div>
      
    </div>
  )
}

export default Api
