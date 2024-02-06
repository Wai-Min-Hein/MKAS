import React from "react";

import Image from "next/image";

import homeSvg from "../../public/pos.svg";

import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import System from "@/components/System";
import Solutions from "@/components/Solutions";
import Benefits from "@/components/Benefits";
import Customers from "@/components/Customers";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main>
      <section className="max-w-screen-2xl lg:h-[110vh] h-screen sm:h-[105vh] bg-blue !text-white ">
        <Nav />
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between w-full h-full mt-12 lg:mt-0 px-8 lg:px-0">
          <div className="lg:mt-[-5rem]">
            <p>Digital Transformation Solution</p>
            <h1 className="text-3xl sm:text-4xl md:text-4xl  xl:text-6xl">
              Your sales is our passion
            </h1>

            <div className="">
              <button className="bg-white px-6 py-2 rounded-full text-black mt-3">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:basis-1/2 relative  w-full sm:w-5/6 lg:w-full h-[65vh] sm:h-[75vh]  lg:h-full">
            <Image
              src={homeSvg}
              alt="SVG Image"
              objectFit="contain"
              layout="fill"
              className="relative block"
            />
          </div>
        </div>
      </section>

      <Customers />

      <System />
      <Benefits />
      <Solutions />
      <Testimonials />

      <Download />

      <Footer />
    </main>
  );
};

export default Home;

// https://preview.themeforest.net/item/paylite-online-payment-gateway-elementor-template-kit/full_screen_preview/37448789?_ga=2.61757100.1496425420.1706602492-734485580.1706602492
