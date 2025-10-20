import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { MenuCard } from '../../utils/MenuCard'
import {rawData} from '../../utils/swiggy-burgerKing.js'
export function ResturantMenu()
{
    const [selected, setSelected] = useState(null);
    const {id} = useParams();
   /* 
    //const [restData, setRestData] = useState([]);
    
    
    async function  FetchData() {
        try{
           
/*const targetUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5643&lng=88.3693&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
const proxyUrl = ""https://corsproxy.io/" + (targetUrl);

const response = await fetch(proxyUrl);
if (!response.ok) {
    throw new Error(`HTTPS Response Error --> Response Status : ${response.status}`);
}
const rawData = await response.json();
const rawData = JSON.parse(tempData.contents); // allorigins wraps the response in a 'contents' field
*/
const data = rawData.data?.cards?.find(
    card => card.groupedCard?.cardGroupMap?.REGULAR?.cards
)?.groupedCard.cardGroupMap.REGULAR.cards ;

const datum = data?.filter(items => 'title' in items.card?.card);
console.log(datum);
/*setRestData(datum);
        }
        catch(error)
        {
            console.log(error.message);
        }
    }
    useEffect(()=>{
        FetchData()
    },[])*/
    return (
        <>
            <div>
              <Link to={`/city/delhi/${id}/search`}>
            <div className="w-[80%] mx-auto mt-20 mb-10 text-2xl bg-gray-300 border border-gray-100 rounded-[50px] p-6 flex justify-center items-center border-rad">
          
                <p className="w-full text-center">Search for dishes</p>
                
            </div>
            </Link>
            <div className="flex justify-between w-[80%] mx-auto">
            <button className={`text-xl px-2 py-4 mr-3 border border-gray-200 rounded-[8px] ${selected === 'veg' ? 'bg-green-600' :'bg-gray-300'  }`} onClick={()=>setSelected(selected === 'veg' ? null : 'veg')}>Veg</button>
            <button className={`text-xl px-2 py-4 border border-gray-200  rounded-[4px]  ${selected === 'nonveg' ? 'bg-red-600' :'bg-gray-300' }`}onClick={()=>setSelected(selected === 'nonveg' ? null : 'nonveg')}>Non-Veg</button>
            </div>
                {datum?.map((value, index) => <MenuCard key= {value.card?.card?.title} Card = {value.card?.card} foodselected={selected}></MenuCard>)}
            </div>
        </>
    );
}