export const FoodCard = function ({FoodData})
{
    return(
        <div className="w-[120px] h-[100px] mx-auto my-[20px] ">
            <a target = "_blank" href={FoodData?.action?.link}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" +FoodData?.imageId}></img>
            </a>
        </div>

       
    );
}