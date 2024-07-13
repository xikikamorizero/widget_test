import React from "react";
import "./App.css";
import { Test } from "./components/Test/Test";
import { Map } from "./components/Map/Map";
import { Route, Routes } from "react-router-dom";
import { Bem } from "./components/BEM/Bem";

type StateType = { a: number; b: string };

export const Context = React.createContext<{
    data: number[];
    setData: React.Dispatch<React.SetStateAction<number[]>>;
} | null>(null);

function App() {
    const [data, setData] = React.useState<number[]>([0, 1, 2]);
    return (
        <Context.Provider value={{ data, setData }}>
            <div className="wrapper">
                {/* <Test /> */}
                {/* <Routes> */}
                {/* <Route path="/*" element={<Map />}></Route> */}
                {/* <Route path="/test*" element={<div>ETSTDSD</div>}></Route> */}
                {/* <Route path="*" element={<div>Error</div>}></Route> */}
                {/* </Routes> */}
                {/* <Bem /> */}
                <Test />
            </div>
        </Context.Provider>
    );
}

export default App;
