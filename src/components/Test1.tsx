import React from "react";
import { Test2 } from "./Test2";
import { Context } from "../App";

export const Test1 = () => {
    const data = React.useContext(Context);
    return (
        <div>
            {/* 1{data?.data} */}
            <Test2 />
        </div>
    );
};
