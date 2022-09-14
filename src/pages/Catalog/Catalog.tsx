import React from "react";

import CatalogGrid from "./CatalogGrid";

// import Hero from "../../components/Hero";

const title = "Collections";

const Catalog = () => {
    return (
        <div
            className="mx-auto flex h-full w-screen flex-col items-center pt-14"
            id="catalog-page"
        >
            {/* <Hero /> */}
            <div
                className="mt- flex flex-col items-center"
                id="catalog-wrapper"
            >
                <div
                    className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center"
                    id="wrapper"
                >
                    <h1 className="mb-14 flex w-full items-center justify-center text-3xl font-thin text-white">
                        {title}
                    </h1>
                    <CatalogGrid />
                </div>
            </div>
        </div>
    );
};

export default Catalog;
