import { useState } from "react"
import { RestInfo } from "./resinfo"
import { RestInformation } from "./resinfoPart2";
export const MenuCard = function ({Card, foodselected})
{
    const [isOpen, setOpen] = useState(true);
    
    if ("carousel" in Card) {
  return (
    <>
      <p className="font-bold text-xl mb-3 ml-20 mt-10">Top Picks</p>
      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 py-3 px-4">
        {Card.carousel.map((items) => (
          <RestInfo
            key={items.dish?.info.id}
            restData={items?.dish?.info}
          />
        ))}
      </div>
    </>
  );
}

    if (isOpen === false)
    {
        return (
                <div className="flex justify-between max-w-[90%] container mx-auto ml-[165px] mt-[30px] border-b-2 pb-2">
                                {Card.title !== 'Top Picks' ? <p className="font-bold text-xl mb-2">{Card.title}</p> : null}
                              <button onClick={()=>setOpen(!isOpen)}>{isOpen ? "^" : "|"}</button>
                              </div>
        );
    }
    if(foodselected === 'veg')
    {
        return(<>
             <div>
            
            <div className="flex justify-between max-w-[90%] container mx-auto ml-[165px] mt-[30px] border-b-2 pb-2">
                  {Card.title !== 'Top Picks' ? <p className="font-bold text-xl mb-2">{Card.title}</p> : null}
                  <button onClick={()=>setOpen(!isOpen)}>{isOpen ? "^" : "|"}</button>
            </div>
              
                <div>
                    {
                        Card?.itemCards?.filter((food) => "isVeg" in food?.card?.info).map((items) => <RestInformation key={items.card?.info.id} restData={items?.card?.info} />)
                    }
                </div>
            </div>
        </>
        );
    }
     if(foodselected === 'nonveg')
    {
        return(<>
             <div>
            
            <div className="flex justify-between max-w-[90%] container mx-auto ml-[165px] mt-[30px] border-b-2 pb-2">
                  {Card.title !== 'Top Picks' ? <p className="font-bold text-xl mb-2">{Card.title}</p> : null}
                  <button onClick={()=>setOpen(!isOpen)}>{isOpen ? "^" : "|"}</button>
            </div>
              
                <div>
                    {
                        Card?.itemCards?.filter((food) => !("isVeg" in food?.card?.info)).map((items) => <RestInformation key={items.card?.info.id} restData={items?.card?.info} />)
                    }
                </div>
            </div>
        </>
        );
    }
    
    return(
        <>
            <div>
            <div className="flex justify-between max-w-[90%] container mx-auto ml-[165px] mt-[30px] border-b-2 pb-2">
                  {Card.title !== 'Top Picks' ? <p className="font-bold text-xl mb-2">{Card.title}</p> : null}
                  <button onClick={()=>setOpen(!isOpen)}>{isOpen ? "^" : "|"}</button>
            </div>
              
                <div>
                    {
                        Card?.itemCards?.map((items) => <RestInformation key={items.card?.info.id} restData={items?.card?.info} />)
                    }
                </div>
            </div>
        </>
    )
}