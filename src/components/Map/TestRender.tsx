import React from "react";

type PropsType = {
    item: number;
    index: number;
};

export const TestRender = React.memo(({ ...props }: PropsType) => {
    console.log("render", props.index);
    return <div>{props.item}</div>;
});
