import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto pt-4">
      <div className="basis-1/2">
        <h6>MkAS</h6>
      </div>

      <ul className="basis-1/2 flex items-center justify-end gap-12">
        <Link href={"/home"}>
          <li>Home</li>
        </Link>
        <Link href={"/home"}>
          <li>Service</li>
        </Link>
        <Link href={"/home"}>
          <li>About us</li>
        </Link>
        <Link href={"/home"}>
          <li>Pricing</li>
        </Link>
        <Link href={"/home"}>
          <li>Contact us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
