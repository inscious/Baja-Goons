import React from "react";

import mockT from "../../assets/images/whitePNG.png";

interface ItemProps {
    title: string;
    price: string;
}

const GridItem = (props: ItemProps) => {
    return (
        <div
            className="group h-full w-full overflow-hidden duration-150 hover:bg-gray-100/50 lg:hover:scale-105 backdrop-blur-xl"
            id="grid-item"
        >
            <div className="">
                <img
                    src={mockT}
                    className="w-ful aspect-square"
                    alt="mock tee"
                />
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-md mt-3 px-5 font-medium text-white duration-150 group-hover:text-">
                    {props.title}
                </h1>
                <h2 className="px-5 text-sm font-thin text-white duration-150 group-hover:text-">
                    {props.price}
                </h2>
            </div>
        </div>
    );
};

export default GridItem;
