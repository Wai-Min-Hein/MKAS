import Image from "next/image";
import React from "react";
import { FaBuildingColumns } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import ContactSvg from "../../public/contactSVG.svg"

const GetInTouch = () => {
  return (
    <section className="container mx-auto ">
      <div className="flex items-center justify-start gap-12">
        <div className="basis-1/2">
          <div className="">
            <p>Contact</p>
            <h1>Get In Touch With Us</h1>
            <p>
              Lorem ipum dolor sit amet consectetur adipisicing elit.
              Praesentium veritatis excepturi, dicta expedita corrupti.
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-start justify-start gap-6  basis-1/2">
                <MdEmail className="text-5xl" />
                <div className="">
                  <h6>Email</h6>
                  <p>mkasmyanmar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-6  basis-1/2">
                <FiPhone className="text-5xl" />
                <div className="">
                  <h6>Phone</h6>
                  <p>09898999838</p>
                </div>
              </div>
            </div>


            <div className="flex items-center justify-between gap-6 mt-8">
              <div className="flex items-start justify-start gap-6 basis-1/2">
                <FaBuildingColumns  className="text-5xl" />
                <div className="">
                  <h6>Address</h6>
                  <p>
                    39/22, 2d Floor, Yan Shin Road, Yankin Township, Yangon, Myanmar
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-6 basis-1/2">
                <IoTimeOutline className="text-5xl" />
                <div className="">
                  <h6>Open Office</h6>
                  <p>Sun - Sat : 09:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 relative h-[90vh]">
          <Image alt="image" src={ContactSvg} objectFit="cover" layout="fill" className="relative block"/>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
