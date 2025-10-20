import { useState } from "react";
import { addItems, IncremenetItems, DecrementItems } from "./stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";
export const RestInformation = function ({restData})
{
   
    const element = useSelector(globalState => globalState.cartSlicer.items);
    const foundItem = element.find(item => item.id === restData.id);
const count = foundItem ? foundItem.quantity : 0;

    const dispatch = useDispatch();
      function handleAddItems()
        {
          
          dispatch(addItems(restData));
        }
        function handleIncrementItems()
        {
        
          dispatch(IncremenetItems(restData));
        }
        function handleDecrementItems()
        {
          
          dispatch(DecrementItems(restData));
        }
    return(
        <div className="flex  justify-between w-[90%] border border-gray-200 rounded-lg p-4 m-4 shadow-lg ml-20">
            <div className="w-[70%] "> 
            <p className="font-bold text-lg">{restData.name}</p>
           
            <p className="text-sm text-gray-600"> {"₹"+restData.price/100}</p>
            {restData?.ratings?.aggregatedRating?.rating !== undefined ? <span className="mr-4">{restData?.ratings?.aggregatedRating?.rating}</span> : null}
            {restData?.ratings?.aggregatedRating?.rating !== undefined ?   <span>{"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 +")"}</span> : null}
            
             <p className="text-sm text-gray-600">{restData.description}</p>
            </div>
            <div className="w-[20%] relative "> 
            <img className="w-50 object cover h-40 rounded-lg border border-gray-200" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData?.imageId}></img>
            {count === 0? (  <button onClick ={handleAddItems} className="absolute bottom-[0px] left-[50px] text-green-500 font-bold   border-gray-400 px-4 py-2 bg-white transform transition hover:shadow-lg w-[100px] hover:bg-gray-200 rounded-[10px] h-auto duration-200 border">Add</button>) : (
                <>
                <div className="flex justify-between item-center border border-gray-100 rounded-lg px-2 py-1 mt-3 h-auto w-[100px] absolute bottom-[0px] left-[50px] bg-white">
                <button onClick={handleDecrementItems}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrementItems}>+</button>
                </div>
                </>
            )}
          
            </div>
            
        </div>
    );
}