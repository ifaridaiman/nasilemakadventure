import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-white h-20 text-black mb-16 shadow border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center gap-8">
          <Link href={'/'} title="home">
            <Image src="/assets/logo/nasilemak.png" width={50} height={50} alt="logo-nasilemak" />
          </Link>
          <div className="">
            <ul className="flex justify-center items-centers gap-8">
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Adventurer Dashboard</Link>
                </li>
                <li>
                    <Link href="/">State</Link>
                </li>
            </ul>
          </div>
        </div>
        <div>
            <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
