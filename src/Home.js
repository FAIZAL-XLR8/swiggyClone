import { Instamart } from "./components/Instamart";
import { FoodOptions } from "./components/FoodOptions";
import { DineoutOptions } from "./components/dineout";
import { Header } from "./components/Header";
export function Home ()
{
    return (
        <>
                <Header></Header>
                <FoodOptions></FoodOptions>
                <Instamart></Instamart>
                <DineoutOptions></DineoutOptions>
        </>
    );
}