"use client"

import Link from "next/link"
// import Button from "../input/Button";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

interface HamburgerMenuProps {
    closeMenu: () => void;
}

export const NAV_LINKS = [
    { href: '/about', key: 'about', label: 'About' },
    { href: '/menu', key: 'menu', label: 'Menu' },
    { href: '/contact_us', key: 'contact_us', label: 'Contact' },
];

function HamburgerMenu({ closeMenu }: HamburgerMenuProps) {
    return (
        <div className="flex flex-col items-center text-black-90 basis-full bg-red-200 hamburgerMenu h-screen z-30 fixed top-0 left-0 w-full">
            <div className="flex justify-between items-center w-full p-4">
                <Link href='/'>
                    <p className="text-bold text-3xl">Maya Brows</p>
                </Link>
                <IoMdClose className="w-6 h-6 cursor-pointer text-black-90" onClick={closeMenu} />
            </div>
            <NavLinks closeHamburger={closeMenu} />
            {/* <Button type="button" title="Book now" variant="btn_transparent_black" /> */}
            <p className="p-3 text-4xl text-black-90 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">+1 234 567 890</p>
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
                    <Link href={link.href} className="text-4xl lg:text-base p-2 flex justify-between cursor-pointer pb-1.5 transition-all hover:font-bold" onClick={handleLinkClick}>
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
        <nav className="w-full z-10 py-[1.5rem] bg-primary-10">
            <div className="flexBetween flex-wrap md:px-5 ">
                <div className="hidden h-full gap-12 lg:flex w-[33%]">
                    <NavLinks />
                </div>
                <div className="w-[50%] lg:w-[33%] text-center ">
                    <Link href='/'>
                        <p className="text-bold text-3xl">Maya Brows</p>
                    </Link>
                </div>
                <div className=" w-[50%] lg:w-[33%]">
                    <div className="flex justify-between flex-row gap-3 md:gap-5 ">
                        <div className="hidden md:block lg:flexCenter ml-auto">
                            <p className="text-base relative">
                                Book an appointment
                                <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-400"></span>
                            </p>
                        </div>
                        <MdOutlineMenu className="w-[32px] h-[32px] cursor-pointer lg:hidden  ml-auto" onClick={handleShowMenu} />
                    </div>
                </div>
                {showMenu ? (
                    <HamburgerMenu closeMenu={closeMenu} />
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar;