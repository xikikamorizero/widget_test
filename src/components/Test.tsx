import React from "react";
import { Test1 } from "./Test1";
import { Context } from "../App";

export const Test = () => {
    const [data, setData] = React.useState(53);
    return (
        // <Context.Provider value={{ data, setData }}>
        <div>
            0
            <Test1 />
        </div>
        // </ Context.Provider>
    );
};
