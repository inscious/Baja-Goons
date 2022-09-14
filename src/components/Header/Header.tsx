import React, { useState } from "react";

// import logo from "../../assets/images/logo.png";
import MonkeFill from "../../assets/images/MonkeFill";
import navData from "../../assets/data/navData";
import { Link } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPosition";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Header = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const scrollPosition = useScrollPosition();
    return (
        <nav
            className={classNames(
                scrollPosition > 25
                    ? "border-transparent bg-black/75 backdrop-blur-lg"
                    : "border-b border-white bg-black",
                "fixed top-0 z-50 h-32 w-full border-b duration-150 lg:h-20 "
            )}
        >
            <div className="relative mx-auto flex h-full w-full max-w-7xl items-center">
                {/* Logo */}
                <>
                    <div className="absolute left-5 right-0 mx-auto flex h-full flex-col items-center justify-center duration-150">
                        <Link to="/">
                            {/* <img
                                src={logo}
                                className="h-24 duration-150 lg:h-16"
                            /> */}
                            <MonkeFill />
                        </Link>
                    </div>
                </>
                {/* Header Links */}
                <>
                    <ul className="absolute right-0 hidden h-full items-center duration-150 lg:flex">
                        {navData.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex h-full items-center px-5 "
                                >
                                    <Link
                                        className="flex items-center text-sm font-thin text-white hover:text-amber-500"
                                        to={link.url}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </>
                {/* Mobile Menu Icons */}
                <>
                    <div
                        className="absolute right-5 flex cursor-pointer items-center justify-center opacity-100 duration-150 lg:hidden lg:opacity-0"
                        onClick={handleNav}
                        id="mobile-controls"
                    >
                        {!nav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-8 w-8 stroke-white stroke-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-8 w-8 stroke-white stroke-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        )}
                    </div>
                </>
                {/* Mobile Menu */}
                <>
                    <div
                        className={
                            nav
                                ? "duration-30 fixed top-32 right-0 z-10 flex h-96 w-full bg-black duration-500 lg:hidden"
                                : "fixed top-32 right-[-100%] z-10 h-96 w-0 bg-black duration-500"
                        }
                    >
                        <ul className="absolute right-0 flex h-full w-full flex-col items-center">
                            {navData.map((link, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex h-full w-full items-center justify-center"
                                    >
                                        <Link
                                            className="flex w-full items-center justify-center border-y border-black/10 py-2 text-xl font-thin text-white duration-150 hover:border-y hover:border-amber-500 hover:text-amber-500"
                                            to={link.url}
                                            onClick={handleNav}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </>
                {/* Shopping Bag */}
                <>
                    <div className="group absolute left-5 flex items-center justify-center">
                        <Link to="/cart">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6 stroke-white stroke-1 group-hover:stroke-amber-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                            </svg>
                        </Link>
                    </div>
                </>
            </div>
        </nav>
    );
};
export default Header;
