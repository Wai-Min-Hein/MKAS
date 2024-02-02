import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";




import System from "@/components/System";
import Solutions from "@/components/Solutions";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import ERP from "@/components/ERP";



const Services = () => {
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

              <button>Services</button>
            </div>
          </div>
        </div>
      </section>


      <System/>
      <Solutions/>
      <Benefits/>
      <ERP/>
      <Testimonials/>
      <Download/>
      <Footer/>


      

      
    </main>
  );
};

export default Services;
