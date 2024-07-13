import React from "react";

export const useTest2 = () => {
    const [state, setState] = React.useState(false);
    console.log(2);
    return { state, setState };
};
