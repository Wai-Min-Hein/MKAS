import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto pt-4">
      <div className="">
        <h6>MkAS</h6>
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
