export const DineoutCard = function ({Card})
{   
    return (
        <div className=" bg-white border border-gray-200 rounded-lg  hover:shadow-md transition-shadow gap-[10px] w-[200px] hover:scale-130">
        <a target="_blank" href={Card.cta?.link}>
              <img className="w-[250px] h-[120px]"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + Card?.info?.mediaFiles?.[0]?.url} 
             
            />
            <div className="p-3">
                <h3 className="font-semibold text-gray-800 ">
                    {Card?.info?.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        ⭐ {Card?.info?.rating?.value}
                    </span>
                    <span className="text-gray-600 text-sm">
                        {Card?.info?.costForTwo}
                    </span>
                </div>
            </div>
        </a>
          
        </div>
    );
}