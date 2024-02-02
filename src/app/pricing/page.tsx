import Download from "@/components/Download";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Package from "@/components/Package";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Pricing = () => {
  return (
    <main>
      <section className="h-[75vh] w-full bg-blue  !text-white">
        <Nav />

        <div className="grid place-items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl">Pricing</h1>
            <div className="flex items-center justify-start gap-2">
              <Link href={"/"}>
                <button>Home</button>
              </Link>
              <MdOutlineKeyboardArrowRight />

              <button>Pricing</button>
            </div>
          </div>
        </div>
      </section>

      <Package/>
      <FAQ/>

      <Download/>
      <Footer/>
    </main>
  );
};

export default Pricing;
