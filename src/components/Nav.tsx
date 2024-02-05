import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoWhite from "../../public/mkasLogoWhite.png"

const Nav = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto pt-4">
      <div className="w-24 h-10 relative">
        <Image alt="Image" src={LogoWhite} className="relative block" objectFit="contain" layout="fill"/>
      </div>

      <ul className=" flex items-center justify-end gap-12">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/services"}>
          <li>Services</li>
        </Link>
        <Link href={"/about"}>
          <li>About us</li>
        </Link>
        <Link href={"/pricing"}>
          <li>Pricing</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact us</li>
        </Link>
      </ul>

      <div className="">
        <button className="bg-white px-4 py-2 rounded-full text-black">Try Demo</button>
      </div>
    </nav>
  );
};

export default Nav;
