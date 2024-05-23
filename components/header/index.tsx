"use client";
import Headerdata from "@/datas/data.json";
import Link from "next/link";
import React, { FC, useCallback, useEffect, useState } from "react";


const Header = () => {
    const [showeMenu, setShoweMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false)
    return (
        <header
            className={`flex justify-between items-center px-6 fixed z-10 w-full bg-transparent${scrolled ? "bg-black" : ""
                }`}>
            <div className="flex justify-between w-full items-center  py-3 ">
                <Link href="/" className="font-bebas text-white text-xl tracking-wide">
                    MACAN TUTUL
                </Link>
                <ul
                    className={`flex flex-col duration-300 sm:flex-row absolute right-0
           w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative
          sm:bg-transparent gap-6 justify-center items-center bg-black ${showeMenu ? "top-0" : "-top-[100vh]"
                        }`}>
                    {Headerdata.header.map((head, I) => (
                        <React.Fragment key={I}>
                            <li className="text-white text-sm uppercase ">
                                <Link href={head.href} className="text-white">
                                    <p>{head.label}</p>
                                </Link>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
                <div className="flex flex-row-reverse gap-8">
                    <button
                        className="text-white sm:hidden z-20 relative bg-black"

                    >
                        {showeMenu ? "Close" : "Menu"}
                    </button>
                    <div className="flex flex-row gap-8 ">
                        <button
                            className="block text-md tracking-widest font-bebas pt-1  border-2 border-white 
              px-4 text-white hover:bg-white hover:text-black"
                        >
                            Create
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;