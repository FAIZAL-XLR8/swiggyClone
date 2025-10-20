export const Shimmer = function ()
{
    return (
        <div className="flex flex-wrap container mx-auto max-w-[80%]">
            {Array(20).fill("").map((e,index) => 
                <div key={index} className="w-[120px] h-[100px] bg-gray-300 mx-auto my-[20px] animate-pulse"></div>
            )}
            {/* Two extra empty shimmer boxes */}
            <div className="w-[120px] h-[100px] bg-gray-300 mx-auto my-[20px] animate-pulse"></div>
            <div className="w-[120px] h-[100px] bg-gray-300 mx-auto my-[20px] animate-pulse"></div>
        </div>
    );
}