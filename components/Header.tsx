import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-slate-800 px-5 ">
            <div className="flex prose prose-xl mx-auto justify-between">
                        <div className="">
                            <a href="#">
                                <Image src="/images/logo.png" alt="James Drysdale Brand Logo" height={68} width={68}/>
                            </a>
                        </div>
                        <nav className="">
                            <ul className="flex list-none">
                                <li>
                                    <Link href='/'>Home</Link>
                                </li>
                                <li >
                                    <Link href='/about'>About</Link>
                                </li>
                                <li >
                                    <Link href='/articles'>Articles</Link>
                                </li>
                                <li >
                                    <Link href='/services'>Services</Link>
                                </li>
                                <li >
                                    <Link href='/projects'>Projects</Link>
                                </li>
                                <li >
                                    <Link href='/connect'>Connect</Link>
                                </li>
                                <li>
                                    *
                                </li>
                            </ul>
                        </nav>
                    </div>
        </header>
    )
};

export default Header;