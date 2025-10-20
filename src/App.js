import React, {useState} from "react";
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { FoodOptions } from "./components/FoodOptions";
import { Instamart } from "./components/Instamart";
import { DineoutOptions } from "./components/dineout";
import { Resturant } from "./components/Resturants"
import { Home } from "./Home";
import { ResturantMenu } from "./components/ResturantMenu";
import SearchFood  from "./components/foodSearch";
import { SecondaryHome } from "./components/secondaryHome";
import { store } from "../utils/stored/store";
import { Provider } from "react-redux";
import {Checkout} from "./components/checkout";
function App()
{
    return(
        <>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {<Home></Home>}></Route>
                    <Route element={<SecondaryHome></SecondaryHome>}>


                    <Route path="/resturants" element={<Resturant></Resturant>}></Route>
                    <Route path="/city/delhi/:id" element={<ResturantMenu></ResturantMenu>}></Route>
                    <Route path = "/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
                    <Route path="/checkout" element = {<Checkout></Checkout>}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>)