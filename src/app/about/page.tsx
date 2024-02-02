import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Team from "@/components/Team";
import WhoWeAre from "@/components/WhoWeAre";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <main>
      <section className="h-[75vh] w-full bg-blue">
        <Nav />

        <div className="grid place-items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl">Services</h1>
            <div className="flex items-center justify-start gap-2">
              <Link href={"/"}>
                <button>Home</button>
              </Link>
              <MdOutlineKeyboardArrowRight />

              <button>About</button>
            </div>
          </div>
        </div>
      </section>
      
      <WhoWeAre/>
      <Team/>
      <Download/>
      <Footer/>


    </main>
  );
};

export default About;
