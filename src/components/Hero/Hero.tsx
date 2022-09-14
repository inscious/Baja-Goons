import React from "react";

const Hero = () => {
    return (
        <div className="flex w-full" id="hero">
            <div
                className=" relative h-60 w-screen bg-amber-500 bg-cover bg-center lg:h-[30rem]"
                // style={{ backgroundImage: `url(${headerIMG})` }}
            >
                <img
                    // src={rstImg}
                    alt="restaurant image"
                    className="opacity- absolute h-full w-full object-cover"
                />
                <div className="relative top-1/2 flex justify-center">
                    <h1 className="text-xl font-bold text-white drop-shadow-lg duration-200 md:text-3xl lg:text-5xl">
                        title
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
