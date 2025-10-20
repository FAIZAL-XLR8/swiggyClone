import { dineoutRestaurants } from "../../utils/Dineout";
import { DineoutCard } from "../../utils/ResturantCard";
export const DineoutOptions = function ()
{
    return (
        <>
      <div className="max-w-[80%] container mx-auto ml-[165px] mt-[80px]">
                <h1 className="font-bold font-stretch-50%">Discover best resturants on Dineout</h1>
            </div>
            <div className=" max-w-[80%] container mx-auto flex flex-wrap overflow-x-auto mt-5 gap-4">
            {
                dineoutRestaurants.map((value) =>
                <DineoutCard key={value.info.id} Card = {value}></DineoutCard>
                 )
            }
            </div>
        </>
    );
}