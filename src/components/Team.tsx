import Image from "next/image";
import React from "react";
import cs1 from "../../public/images/cs1.jpg";

import { FaFacebook, FaViber } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Team = () => {
  return (
    <section className="container mx-auto py-6">
      <div className="text-center">
        <p>Team</p>
        <h1>Meet team behind Myanmar KAS Technology</h1>
        <p className="w-2/5 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          possimus consectetur qui maxime eos architecto.
        </p>
      </div>

      <div className="flex items-center justify-start flex-wrap gap-x-8 gap-y-24 mt-24">
        <div className="basis-[31%] flex items-center flex-col border border-gray-800 rounded-md pb-8 ">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mt-[-5rem] ">
            <Image
              alt="Image"
              src={cs1}
              objectFit="cover"
              layout="fill"
              className="relative block "
            />
          </div>
          <div className="text-center my-8">
            <h1>Mr. Hoi</h1>
            <h6>CEo & Founder</h6>
          </div>

          <div className="flex items-center justify-start gap-4">
            <FaFacebook className="text-2xl" />
            <MdEmail className="text-2xl" />
            <FaViber className="text-2xl" />
          </div>
        </div>
        <div className="basis-[31%] flex items-center flex-col border border-gray-800 rounded-md pb-8 ">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mt-[-5rem] ">
            <Image
              alt="Image"
              src={cs1}
              objectFit="cover"
              layout="fill"
              className="relative block "
            />
          </div>
          <div className="text-center my-8">
            <h1>Mr. Hoi</h1>
            <h6>CEo & Founder</h6>
          </div>

          <div className="flex items-center justify-start gap-4">
            <FaFacebook className="text-2xl" />
            <MdEmail className="text-2xl" />
            <FaViber className="text-2xl" />
          </div>
        </div>
        <div className="basis-[31%] flex items-center flex-col border border-gray-800 rounded-md pb-8 ">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mt-[-5rem] ">
            <Image
              alt="Image"
              src={cs1}
              objectFit="cover"
              layout="fill"
              className="relative block "
            />
          </div>
          <div className="text-center my-8">
            <h1>Mr. Hoi</h1>
            <h6>CEo & Founder</h6>
          </div>

          <div className="flex items-center justify-start gap-4">
            <FaFacebook className="text-2xl" />
            <MdEmail className="text-2xl" />
            <FaViber className="text-2xl" />
          </div>
        </div>
        <div className="basis-[31%] flex items-center flex-col border border-gray-800 rounded-md pb-8 ">
          <div className="relative w-40 h-40 rounded-full overflow-hidden mt-[-5rem] ">
            <Image
              alt="Image"
              src={cs1}
              objectFit="cover"
              layout="fill"
              className="relative block "
            />
          </div>
          <div className="text-center my-8">
            <h1>Mr. Hoi</h1>
            <h6>CEo & Founder</h6>
          </div>

          <div className="flex items-center justify-start gap-4">
            <FaFacebook className="text-2xl" />
            <MdEmail className="text-2xl" />
            <FaViber className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
