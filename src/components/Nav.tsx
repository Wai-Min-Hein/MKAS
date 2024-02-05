"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LogoWhite from "../../public/mkasLogoWhite.png";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [active, setActive] = useState(false);

  console.log(active)
  return (
    <nav className="flex items-center justify-between container mx-auto pt-4 relative">
      <div className="w-24 h-10 relative">
        <Image
          alt="Image"
          src={LogoWhite}
          className="relative block"
          objectFit="contain"
          layout="fill"
        />
      </div>

      <ul className=" md:flex items-center justify-end gap-12 hidden">
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

      <div className="hidden md:block">
        <button className="bg-white px-4 py-2 rounded-full text-black">
          Try Demo
        </button>
      </div>
      <div className="md:hidden relative z-40">
        <button onClick={() => setActive(true)}>

        <MdOutlineMenu className="text-2xl" />
        </button>
      </div>

      <ul className={`absolute flex flex-col items-center justify-end gap-12 bg-white top-0 left-0 w-full h-auto text-black py-8 z-50 ${active? "block": "hidden"}`}>

        <button  onClick={() => setActive(false)}>

        <RxCross2 className="absolute top-4 right-4" />
        </button>

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
    </nav>
  );
};

export default Nav;
