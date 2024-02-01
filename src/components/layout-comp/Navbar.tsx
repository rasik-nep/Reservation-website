"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link"
import Button from "../input/Button";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

interface HamburgerMenuProps {
    closeMenu: () => void;
}

function HamburgerMenu({ closeMenu }: HamburgerMenuProps) {
    return (
        <div className="flex flex-col items-center text-black-90 basis-full bg-red-200 hamburgerMenu h-screen z-20 fixed top-0 left-0 w-full">
            <div className="flex justify-between items-center w-full p-4">
                <Link href='/'>
                    <img src='/logo.png' alt="logo" className="w-[70px] h-[50px] md:w-[100px] md:h-[70px]" />
                </Link>
                <IoMdClose className="w-6 h-6 cursor-pointer text-black-90" onClick={closeMenu} />
            </div>
            <NavLinks closeHamburger={closeMenu} />
            <Button type="button" title="Book now" variant="btn_transparent_black" />
            <p className="text-sm text-black-90 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">+1 234 567 890</p>
        </div>
    );
}

type NavLinksProps = {
    closeHamburger?: () => void;
}

function NavLinks({ closeHamburger }: NavLinksProps) {
    function handleLinkClick() {
        if (closeHamburger) {
            closeHamburger();
        }
    }
    return (
        <ul className="list-none p-0 m-0 flex flex-col lg:flex-row lg:gap-12">
            {NAV_LINKS.map((link) => (
                <li key={link.key}>
                    <Link href={link.href} className="text-sm text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold" onClick={handleLinkClick}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log("showMenu", showMenu)
    function handleShowMenu() {
        setShowMenu(!showMenu)
    }

    function closeMenu() {
        setShowMenu(false);
    }

    return (
        <nav className="absolute w-full z-10 py-[1.5rem]">
            <div className="flexBetween flex-wrap max-container md:px-5">
                <Link href='/'>
                    <img src='/logo.png' alt="logo" className="w-[70px] h-[50px] md:w-[100px] md:h-[70px]" />
                </Link>
                <ul className="hidden h-full gap-12 lg:flex">
                    <p className="text-sm text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hidden lg:inline-block">+1 234 567 890</p>
                    <NavLinks />
                </ul>
                <div className="flex flex-row gap-3 md:gap-5">
                    <div className="lg:flexCenter">
                        <Button type="button" title="Book now" variant="btn_transparent" />
                    </div>
                    <p className="text-sm text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold inline-block lg:hidden">+1 234 567 890</p>
                    <MdOutlineMenu className="w-[32px] h-[32px] cursor-pointer lg:hidden" onClick={handleShowMenu} />
                </div>
                {showMenu ? (
                    <HamburgerMenu closeMenu={closeMenu} />
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar;