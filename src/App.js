import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import React, {useState, useEffect} from "react"
import SelectPet from "./pages/tamagotchiapp/SelectPet";
import Pet from "./pages/tamagotchiapp/Pet";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SelectPet/>}/>
                    <Route path="/petapp" element={<Pet/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default App;

