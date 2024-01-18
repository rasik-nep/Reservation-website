"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image"
import Link from "next/link"
import Button from "./Button";


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
        <nav className=" top-0 z-[20] mx-auto w-full padding-container py-5 bg-black-90">
            <div className="flexBetween flex-wrap max-container">
                <Link href='/'>
                    <Image src='/logo.png' alt="logo" width={30} height={29} />
                </Link>
                <ul className="hidden h-full gap-12 lg:flex">
                    <NavLinks />
                </ul>
                <div className="lg:flexCenter hidden">
                    <Button type="button" title="Reserve" variant="btn_dark_green" icon="/user.svg" />
                </div>

                <Image src="menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" onClick={handleShowMenu} />

                {showMenu && <ul className="flex flex-col items-center basis-full">
                    <NavLinks />
                </ul>}

            </div>
        </nav>
    )
}

export default Navbar;