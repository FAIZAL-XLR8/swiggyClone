import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export function RestHeader ()
{
    const count = useSelector (globalState => globalState.cartSlicer.count);
   
    return(
        <>
        <div className="w-[80%] container mx-auto py-4 px-4 bg-gray-200 text-xl flex justify-between items-center mt-10 rounded-[20px]">
        <Link to={"/"}>
        <div><p className="text-orange-400 font-bold ml-20">Swiggy</p></div>
        </Link>
        <Link to={"/checkout"}>
            <div><p className="mr-2">Cart {`(${count})`}</p></div>
        </Link>
        
        </div>
        </>
    );
}