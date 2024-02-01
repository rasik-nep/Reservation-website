import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '@/constants'
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flexCenter bg-white pt-5 text-black-90">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <img src="/logo.png" alt="logo" className='w-[100px] h-[50px]' />
                    </Link>

                    <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                        {FOOTER_LINKS.map((columns, index) => (
                            <FooterColumn title={columns.title} key={index}>
                                <ul className="regular-14 flex flex-col gap-4 text-gray-50">
                                    {columns.links.map((link, linkIndex) => (
                                        <Link href="/" key={linkIndex}>
                                            {link}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link
                                        href="/"
                                        key={link.label}
                                        className="flex gap-4 md:flex-col lg:flex-row"
                                    >
                                        <p className="whitespace-nowrap">
                                            {link.label}:
                                        </p>
                                        <p className="medium-14 whitespace-nowrap text-red-400">
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={"Socials"}>
                                <ul className="regular-14 flex gap-4">
                                    <a href="https://www.facebook.com" target='__blank'>
                                        <FaFacebookF className='text-black-90 hover:text-red-400 cursor-pointer text-2xl' />
                                    </a>
                                    <a href="https://www.instagram.com" target='__blank'>
                                        <FaInstagram className='text-black-90 hover:text-red-400 cursor-pointer text-2xl' />
                                    </a>
                                    <a href="https://www.twitter.com" target='__blank'>
                                        <FaTwitter className='text-black-90 hover:text-red-400 cursor-pointer text-2xl' />
                                    </a>
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5" key={title}>
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}

export default Footer