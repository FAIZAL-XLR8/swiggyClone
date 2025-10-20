import { useState } from "react";
import { addItems, IncremenetItems, DecrementItems } from "./stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";
export const RestInfo = function ({ restData }) {
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
    return (
    <div className="flex flex-col justify-between border border-gray-200 rounded-lg p-4 shadow-lg w-[220px] shrink-0 bg-white ">
      <img
        className="w-full h-36 object-cover rounded-md border border-gray-200"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData?.imageId}
        alt={restData?.name}
      />
      <div className="mt-2">
        <p className="font-bold text-sm ">{restData.name}</p>
        <p className="text-sm text-gray-600">{"₹" + restData.price / 100}</p>

        {restData?.ratings?.aggregatedRating?.rating && (
          <p className="text-sm mt-1">
            ⭐ {restData.ratings.aggregatedRating.rating}{" "}
            <span className="text-gray-500">
              ({restData.ratings.aggregatedRating.ratingCountV2})
            </span>
          </p>
        )}

        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {restData.description}
        </p>
      </div>
      {
        count === 0? ( <button onClick={handleAddItems} className="mt-3 text-green-700 text-sm px-4 py-1 border rounded-lg transform duration-200 hover:bg-gray-200 font-bold  border-gray-400  transition">
        Add
      </button>) : (
        <>
        <div className="flex justify-between border border-gray-400 rounded-lg px-2 py-1 mt-3 ">
        <button onClick={handleDecrementItems}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrementItems}>+</button>
        </div>
           
        </>
      )
      }
     
    </div>
  );
};
