import { Outlet } from "react-router-dom";
import { RestHeader } from "./restHeader";

export const SecondaryHome = function ()
{
    return(<>
        <RestHeader></RestHeader>
        <Outlet></Outlet>
    </>);
}