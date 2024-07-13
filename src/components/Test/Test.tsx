import React from "react";
import { useTest1 } from "./hook1";
import { Switcher } from "./Switcher/Switcher";

export const Test = () => {
    const data1 = useTest1();

    return (
        <div>
            {/* {data1.state ? "true" : "false"}
            <button
                onClick={() => {
                    data1.setState(!data1.state);
                }}
            >
                OK
            </button> */}
            <Switcher />
        </div>
    );
};
