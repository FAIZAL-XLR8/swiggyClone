export const InstaCard = function ({Card})
{
    return (
        <div className="w-[140px] mx-auto mr-4 mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer">
            <a target="_blank" href={Card.action.link} className="block">
                 <img 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + Card?.imageId} 
                    className="w-16 h-16 mx-auto object-contain"
                    alt={Card?.accessibility?.altText}
                 /> 
                   <div className="text-sm font-medium text-gray-800 text-center mt-3 whitespace-normal break-words">
                {Card?.action?.text}
           </div>
            </a>
         
        </div>
    );
}