import { useEffect , useState} from "react";
import {Link} from "react-router"
import { Shimmer } from "./Shimmer";

export function Resturant ()
{
    const [restaurants, setResturants] = useState([]);
     async function FetchData() {
              try{
                 const proxyURL = "https://corsproxy.io/" 
                 const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5643&lng=88.3693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
;
                 const response = await fetch(proxyURL + swiggyAPI);
                 if(!response.ok)
                     throw new Error (`HTTPS Response Error --> Response Status : ${response.status}`);
                 const data = await response.json();
                 setResturants(data.data?.cards.find(card => card.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card.card.gridElements.infoWithStyle.restaurants);
                 }
                 catch(error)
                 {
                     console.log(error.message);
                 }
             }
    
    useEffect(
           ()=>{
             FetchData();
     }, [])
    
    if(restaurants.length === 0)
        return <Shimmer></Shimmer>
  return (
    <>
    
        <div className="flex flex-wrap container mx-auto max-w-[80%] gap-6 mt-20 ">
            {
               
                (restaurants||[]).map((value) => {
                    {/* border border-gray-200 rounded-xl shadow-lg transform transition duration-200 hover:scale-95 hover:shadow-xl bg-white  */}
                    return <Link to={"/city/delhi/" + value.info.id} key={value.info.id}   ><div className="p-4 w-64 border border-gray-200 rounded-xl shadow-lg transform transition duration-200 hover:scale-95 hover:shadow-lg bg-white"> 
                        <img 
                            className="w-full h-48 rounded-xl mt-4" 
                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value.info.cloudinaryImageId}
                            alt={value.info.name}
                        />
                        <div className="mt-3">
                            <div className="font-bold text-lg mb-1">{value?.info.name}</div>
                            <div className="flex gap-3 items-center mb-2">
                               <svg 
                                    className="w-5 h-5 text-green-700" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <span className="text-sm font-medium">{value.info.avgRating}</span>
                                <span className="text-sm text-gray-500">•</span>
                                <span className="text-sm text-gray-500">{value.info.sla?.slaString}</span>
                            </div>
                            
                         
                            <div className="text-gray-500 text-sm leading-relaxed">
                                {value.info?.cuisines.join(", ")}
                            </div>
                        </div>
                    </div>
                    </Link>
                })
            }
        </div>
    </>
)}