import React,{useEffect, useState} from 'react';
import { json } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';


const Body=()=>{
   const [result,setResult] = useState([]);

   useEffect(()=>{
    fecth();
   },[])


  
   const fecth=(async()=>{
    const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    
    const output=await fetch(url);
    const json=await output.json();
    console.log(json,"output");
    setResult(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   })
   return(
    <>
     <div className="rest-container">
          {result.map((res)=>(
            // <h1 style={{color:'red'}}>{res.info.name}</h1> 
            <RestaurantCard resData={res}>

            </RestaurantCard>
          ))}
      </div>
    </>
   )
}
export default Body;