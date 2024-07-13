import React, { useContext } from "react";
import { Context } from "../../App";
import { TestRender } from "./TestRender";
import { Route, Routes } from "react-router-dom";

export const Map = () => {
    // const [data, setData] = React.useState(53);
    const data = useContext(Context);

    // const updateSecondElement = () => {
    //     data?.setData((prevData) => {
    //         const newData = prevData.map((item, index) =>
    //             index === 1 ? { ...item, a: 100, b: "updated" } : item
    //         );
    //         return newData;
    //     });
    // };

    return (
        <div>
            {data?.data.map((a, i) => (
                <TestRender key={i} item={a} index={i} />
            ))}
            <button
                onClick={() => {
                    // updateSecondElement();
                    data?.setData([0, 1, 3]);
                }}
            >
                SetState
            </button>
            <Routes>
                <Route path="/test" element={<div>TEST</div>}></Route>
                <Route path="*" element={<div>Error TEST</div>}></Route>
            </Routes>
        </div>
    );
};
