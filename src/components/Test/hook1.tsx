import React from "react";
import { useTest2 } from "./hook2";

export const useTest1 = () => {
    const [state, setState] = React.useState(false);
    console.log(1);
    const data = useTest2();
    return { state: data.state, setState: data.setState };
};
