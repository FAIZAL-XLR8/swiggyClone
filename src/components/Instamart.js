import { imageInstamartGridCards } from "../../utils/InstamartData";
import { InstaCard } from "../../utils/InstamartCard";
export const Instamart = function ()
{
    return (
        <div>
            <div className="max-w-[80%] container mx-auto ml-[165px] mt-[80px]">
                <h1 className="font-bold font-stretch-50%">Shop groceries on Instamart</h1>
            </div>
            <div className="flex container mx-auto flex-wrap max-w-[80%]">
                {
                    imageInstamartGridCards.map((value) => 
                    <InstaCard key={value.id} Card = {value}></InstaCard>
                    )
                }
            </div>
        </div>
    );
} 