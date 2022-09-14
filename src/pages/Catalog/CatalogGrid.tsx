import React from "react";

import GridItem from "./GridItem";

import mockCollectionData from "../../assets/data/mockCollectionData";

const CatalogGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {mockCollectionData.map((data) => {
                return <GridItem price={data.price} title={data.title} />;
            })}
        </div>
    );
};

export default CatalogGrid;
