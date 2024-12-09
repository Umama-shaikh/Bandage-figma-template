"use client";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoMenuOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdOutlinePerson } from "react-icons/md";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"

const NavBar = () => {
    return(
        <header>
            <div className="flex justify-around lg:justify-around lg:my-6 mt-8">
                {/* website Logo */}
                <div>
                    <h1 className="font-bold text-2xl">Bandage</h1>
                </div>
                {/* menu */}
                <div className="hidden lg:block">
                    <ul className="text-zinc-500 font-bold text-sm flex gap-7 mt-2">
                        <li><Link  href="/">Home</Link></li>
                        <li><Link  href='/shop'>Shop </Link></li>
                        <li><Link  href="#">About</Link></li>
                        <li><Link  href="#">Blog</Link></li>
                        <li><Link  href="#">Contact</Link></li>
                        <li><Link  href="#">Pages</Link></li>

                    </ul>
                </div>
                {/* login/register side  */}
                <div className="flex gap-2 mt-2">
                    <div className="text-myblue flex font-bold text-sm">
                        <MdOutlinePerson size={18} className="hidden lg:block"/>
                        <p className="hidden lg:block">Login / Register</p>
                    </div>
                    {/* more icons */}
                    <div className="text-myblue flex gap-3">
                        <CiSearch size={22} className="hidden lg:block"/>
                        <IoCartOutline size={22} className="hidden lg:block"/>
                        <IoIosHeartEmpty size={22} className="hidden lg:block"/>
                    </div>
                </div>

               
                {/* navigation bar for smaller screen */}
                <Sheet >
                    <SheetTrigger className="lg:hidden ml-7 mt-1 "><IoMenuOutline size={30} /></SheetTrigger>
                   
                    <SheetContent side={'top'}>
                        <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription className="flex flex-col">
                            <Link  href="/" className="text-gray-400 font-semibold text-2xl space-y-8 mt-2">Home</Link>
                            <Link  href="#" className="text-gray-400 font-semibold text-2xl space-y-8 mt-2">Product </Link>
                            <Link  href="#" className="text-gray-400 font-semibold text-2xl space-y-8 mt-2">Pricing</Link>
                            <Link  href="#" className="text-gray-400 font-semibold text-2xl space-y-8 mt-2">Contact</Link>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
export default NavBar;