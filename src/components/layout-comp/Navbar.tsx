"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image"
import Link from "next/link"
import Button from "../input/Button";


import { useState } from "react";


function NavLinks() {
    return (
        <>
            {NAV_LINKS.map((link) => (
                <li key={link.key}>
                    <Link href={link.href} className="text-sm text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                    </Link>
                </li>
            ))}
        </>
    )
}


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <nav className="absolute w-full z-10 py-[1.5rem]">
            <div className="flexBetween flex-wrap max-container">
                <Link href='/'>
                    <Image src='/logo.jpg' alt="logo" width={65} height={55} />
                </Link>
                <ul className="hidden h-full gap-12 lg:flex">
                    <p className="text-sm text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hidden lg:inline-block">+1 234 567 890</p>
                    <NavLinks />
                </ul>
                <div className="flex flex-row gap-5">
                    <div className="lg:flexCenter">
                        <Button type="button" title="Book now" variant="btn_transparent" />
                    </div>
                    <p className="text-sm text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold inline-block lg:hidden">+1 234 567 890</p>
                    <Image src="menu.svg" alt="menu" width={32} height={32} className=" cursor-pointer lg:hidden" onClick={handleShowMenu} />

                </div>
                {showMenu && <ul className="flex flex-col items-center basis-full">
                    <NavLinks />
                </ul>}
            </div>
        </nav>
    )
}

export default Navbar;