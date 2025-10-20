import { imageGridCards } from "../../utils/Data";
import { FoodCard } from "../../utils/FoodCard";
export const FoodOptions = function ()
{
    return (
        <>
        <div className="max-w-[80%] container mx-auto ml-[165px] mt-[80px]">
                <h1 className="font-bold font-stretch-50%">Order our best food options</h1>
            </div>
            <div className="max-w-[80%] container mx-auto flex flex-wrap">
            
            
                {imageGridCards.map((FoodItem) =>{
                   return <FoodCard key={FoodItem.id} FoodData={FoodItem}></FoodCard>
                })}
            </div>
        </>
    );
}