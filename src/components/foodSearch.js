import { useEffect , useState} from "react";
import {useParams} from "react-router-dom"
import {rawData} from '../../utils/swiggy-burgerKing'
const SearchFood = function ()
{
    const {id} = useParams();  
    const [food, setFood] = useState("");
    const data = rawData.data?.cards?.find(
        card => card.groupedCard?.cardGroupMap?.REGULAR?.cards
    )?.groupedCard.cardGroupMap.REGULAR.cards ;
    
    const datum = data?.filter(items => 'title' in items.card?.card);
   
    
    return (<>
        <div className="w-[80%] mx-auto container ">
        <input type="text"  value={food} onChange={(event) => setFood(event.target.value)} className="w-full border-2 border-gray-300 p-2 rounded-lg mt-4" placeholder="Search for food items..." />
        </div>
       
    </>)
}
export default SearchFood;import React, {useState} from "react";
import ReactDOM from "react-dom/client" 