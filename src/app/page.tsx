import React from "react";
import homeSvg from "../../public/pos.svg";
import Image from "next/image";

import NTH from "../../public/images/NTH.png";
import MIU from "../../public/images/MIU.png";
import Mook from "../../public/images/Mook.png";
import Rauu from "../../public/images/Rauu.png";

import Lakopi from "../../public/images/Lakopi.png";
import Gagyi from "../../public/images/Gagyi.png";
import AnyarThu from "../../public/images/AnyarThu.png";
import Sakura from "../../public/images/Sakura.png";
import WhiteCafe from "../../public/images/WhiteCafe.png";

import posIcon from "../../public/posIcon.svg";
import HRMIcon from "../../public/hrmIcon.svg";
import InventoryIcon from "../../public/inventoryIcon.svg";


import benefit from "../../public/images/benefit.png"


import avoidHuman from "../../public/avoidHuman.svg"
import makeLifeEasy from "../../public/makeLifeEasy1.svg"
import manageAllInOne from "../../public/manageAllInOne.svg"

import MLE from "../../public/images/mle.png"
import HE from "../../public/images/failure.png"
import PM from "../../public/images/pm.png"

import posSolution from "../../public/posSolution.svg";


import cs1 from "../../public/images/cs1.jpg"
import cs2 from "../../public/images/cs2.jpg"
import cs3 from "../../public/images/cs3.jpg"
import { FaStar } from "react-icons/fa";
import Download from "@/components/Download";
import Footer from "@/components/Footer";





const Home = () => {
  const customersInfo = [
    {
      id: 1,
      name: "NTH",
      image: NTH,
    },
    {
      id: 2,
      name: "MIU",
      image: MIU,
    },
    {
      id: 3,
      name: "Mook",
      image: Mook,
    },
    {
      id: 4,
      name: "Rauu",
      image: Rauu,
    },
    {
      id: 5,
      name: "Lakopi",
      image: Lakopi,
    },
    {
      id: 6,
      name: "Gagyi",
      image: Gagyi,
    },
    {
      id: 7,
      name: "AnyarThu",
      image: AnyarThu,
    },
    {
      id: 8,
      name: "Sakura",
      image: Sakura,
    },
    {
      id: 9,
      name: "WhiteCafe",
      image: WhiteCafe,
    },
  ];

  return (
    <main>
      <section className="max-w-screen-2xl h-[125vh] bg-blue">
        <div className="container mx-auto flex items-center justify-between w-full h-full">
          <div className="mt-[-5rem]">
            <p>Digital Transformation Solution</p>
            <h1 className="text-6xl">Your sales is our passion</h1>

            <div className="">
              <button className="bg-white px-6 py-2 rounded-full text-black mt-3">
                Learn More
              </button>
            </div>
          </div>
          <div className="basis-3/5 relative  h-full">
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

      <section className="py-6 container mx-auto">
        <h1 className="text-4xl text-center mb-12">Our Customer</h1>

        <div className="flex items-center justify-between flex-wrap gap-y-8 gap-x-1">
          {customersInfo?.map((customer) => (
            <div
              className="basis-[19%] flex items-center justify-start gap-2"
              key={customer?.id}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  alt="Image"
                  objectFit="cover"
                  layout="fill"
                  src={customer?.image}
                  className="relative"
                />
              </div>
              <h6>{customer?.name}</h6>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-6">
        <div className="text-center">
          <p>System</p>
          <h1 className="text-4xl">Our System</h1>
          <p className="w-2/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sunt
            modi tempore natus placeat impedit maiores, et recusandae!
          </p>
        </div>

        <div className="flex items-center justify-start gap-3 mt-20">

          <div className="basis-1/3 grid place-items-center px-10 py-12 border-2 border-blue rounded-md">
            <div className="mt-[-7rem] ">
              <div className="w-32 h-32 rounded-full overflow-hidden  grid place-items-center bg-red-500">
                <div className="w-24 h-24 relative">
                  <Image
                    alt="Image "
                    src={posIcon}
                    objectFit="contain"
                    layout="fill"
                    className="relative block"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-center">Point of sales</h1>

              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                nam soluta animi cupiditate voluptas nesciunt.
              </p>
            </div>
          </div>
          <div className="basis-1/3 grid place-items-center px-10 py-12 border-2 border-blue rounded-md">
            <div className="mt-[-7rem]">
              <div className="w-32 h-32 rounded-full overflow-hidden  grid place-items-center">
                <div className="w-24 h-24 relative">
                  <Image
                    alt="Image "
                    src={HRMIcon}
                    objectFit="contain"
                    layout="fill"
                    className="relative block"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-center">Human Resource Management</h1>

              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                nam soluta animi cupiditate voluptas nesciunt.
              </p>
            </div>
          </div>
          <div className="basis-1/3 grid place-items-center px-10 py-12 border-2 border-blue rounded-md">
            <div className="mt-[-7rem]">
              <div className="w-32 h-32 rounded-full overflow-hidden  grid place-items-center">
                <div className="w-24 h-24 relative">
                  <Image
                    alt="Image "
                    src={InventoryIcon}
                    objectFit="contain"
                    layout="fill"
                    className="relative block"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-center">Inventory Control</h1>

              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                nam soluta animi cupiditate voluptas nesciunt.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto flex items-start justify-start gap-6 h-[120vh] my-12">
        <div className="basis-1/2">
          <p>
            Benefit
          </p>
          <h1 className="text-4xl w-4/6">
            Benefit using ERP system for You
          </h1>
          <p className="w-4/6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore consectetur quisquam perferendis veniam praesentium minus.
          </p>

          <div className="flex items-center justify-start flex-wrap gap-y-12 gap-x-6 mt-8 ">
            <div className="basis-[48%]">
              <div className="w-32 h-32 relative">
                <Image alt="Image" src={HE} objectFit="cover" layout="fill" className="relative block"/>
              </div>
              <h1>Aviod Human Errors</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam saepe.
              </p>
            </div>

            <div className="basis-[48%]">
            <div className="w-32 h-32 relative">
                <Image alt="Image" src={MLE} objectFit="cover" layout="fill" className="relative block"/>
              </div>
              <h1>Make your life easier</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam saepe.
              </p>
            </div>

            <div className="basis-[48%]">

            <div className="w-32 h-32 relative">
                <Image alt="Image" src={PM} objectFit="cover" layout="fill" className="relative block"/>
              </div>
              <h1>Manage all bussiness in one place</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam saepe.
              </p>
            </div>

            
          </div>
        </div>

          <div className="h-screen relative basis-1/2">
            <Image alt="Image" src={benefit} objectFit="contain" layout="fill" className="relative block"/>
          </div>
      </section>


      <section className="my-12 container mx-auto">
        <div className="text-center ">
          <h6>Digital Transformation Solution</h6>
          <h1 className="text-4xl">The Best Solutions for Your Bussiness</h1>
          <p className="w-2/5 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente dolorum? Iure, nulla libero.
          </p>
        </div>


        <div className="h-[110vh] ">

          <div className="h-full relative">
            <Image alt="Image" src={posSolution} objectFit="contain" layout="fill" className="relative block"/>
          </div>

        </div>
      </section>



      <section className="container mx-auto my-12">

        <div className="flex items-center justify-between">

            <div className="basis-1/2">
              <h6>Testimonials</h6>
              <h1>What they say about Mkas Software</h1>
            </div>

            <div className="basis-1/2">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis quod ad excepturi eum, praesentium architecto. Id, porro. Voluptas sequi dolore.</p>
            </div>


        </div>


        <div className="flex items-center justify-between mt-16">

          <div className="basis-[30%]">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image alt="Image" src={cs1} objectFit="cover" layout="fill" objectPosition="center" className="relative block"/>
            </div>
            <div className="flex items-center justify-start gap-2 my-6">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, libero! Obcaecati iusto deleniti ipsa quas totam sit. Minus aperiam quaerat aliquid.
            </p>

            <h1>Mark William</h1>
            <p>CEO of Pizza oro</p>

          </div>
          <div className="basis-[30%]">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image alt="Image" src={cs1} objectFit="cover" layout="fill" objectPosition="center" className="relative block"/>
            </div>
            <div className="flex items-center justify-start gap-2 my-6">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, libero! Obcaecati iusto deleniti ipsa quas totam sit. Minus aperiam quaerat aliquid.
            </p>

            <h1>Mark William</h1>
            <p>CEO of Pizza oro</p>

          </div>
          <div className="basis-[30%]">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image alt="Image" src={cs1} objectFit="cover" layout="fill" objectPosition="center" className="relative block"/>
            </div>
            <div className="flex items-center justify-start gap-2 my-6">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, libero! Obcaecati iusto deleniti ipsa quas totam sit. Minus aperiam quaerat aliquid.
            </p>

            <h1>Mark William</h1>
            <p>CEO of Pizza oro</p>

          </div>
        </div>

      </section>

      <Download/>

      <Footer/>



    </main>
  );
};

export default Home;

// https://preview.themeforest.net/item/paylite-online-payment-gateway-elementor-template-kit/full_screen_preview/37448789?_ga=2.61757100.1496425420.1706602492-734485580.1706602492




