import React from "react";

// import { AiOutlineInstagram } from "react-icons/ai";
import { footerListOne, footerListTwo } from "../../assets/data/footerData";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-amber- mt-14 w-full border-t py-14">
            <div className="mx-auto max-w-7xl px-5">
                <div className="grid-col-1 grid md:grid-cols-4">
                    <>
                        <ul className="lg col-span-2 mb-5 flex w-full justify-center duration-150 md:col-span-1 md:flex-col md:items-start md:justify-start">
                            {footerListOne.map((item, index) => {
                                return (
                                    <li className="my-2 mx-3" key={index}>
                                        <Link
                                            to={item.url}
                                            className="whitespace-nowrap text-sm font-thin text-white duration-150 hover:text-amber-500"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                    <>
                        <ul className="lg col-span-2 mb-5 flex w-full justify-center duration-150 md:col-span-1 md:flex-col md:items-start md:justify-start">
                            {footerListTwo.map((item, index) => {
                                return (
                                    <li className="my-2 mx-3" key={index}>
                                        <Link
                                            to={item.url}
                                            className="whitespace-nowrap text-sm font-thin text-white duration-150 hover:text-amber-500"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                    <>
                        <form className="col-span-2 flex flex-col items-center md:items-start">
                            <label className="mb-5 text-sm text-white">
                                Join our mailing list
                            </label>
                            <p className="mb-5 text-sm text-amber-500">
                                Find out about new drops and exclusive details
                            </p>
                            <div className="flex w-full flex-col items-center justify-center md:flex-row md:justify-start">
                                <input
                                    className="mb-5 w-full max-w-sm py-2 px-3 focus:outline-none md:mb-0"
                                    placeholder="Email Address"
                                />
                                <button className="w-full max-w-sm border border-amber-500 px-5 py-2 text-white duration-150 hover:bg-amber-500 md:max-w-min ">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </form>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Footer;
