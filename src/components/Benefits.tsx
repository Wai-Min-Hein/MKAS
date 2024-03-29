import React from "react";

import Image from "next/image";

import MLE from "../../public/images/mle.png";
import HE from "../../public/images/failure.png";
import PM from "../../public/images/pm.png";
import benefit from "../../public/images/benefit.png";

const Benefits = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-start justify-start gap-6 h-[200vh] lg:h-[120vh] my-12">
      <div className="basis-1/2">
        <p>Benefit</p>
        <h1 className="text-4xl w-4/6">Benefit using ERP system for You</h1>
        <p className="w-4/6">
        Data accuracy and consistency with  a centralized database. This reduces the chances of Human errors that can occur when data is scattered across various systems and departments.
        </p>

        <div className="flex items-center justify-start flex-wrap gap-y-12 gap-x-6 mt-8 ">
          <div className="basis-full  sm:basis-[47%]">
            <div className="w-32 h-32 relative">
              <Image
                alt="Image"
                src={HE}
                objectFit="cover"
                layout="fill"
                className="relative block"
              />
            </div>
            <h1>Aviod Human Errors</h1>
            <p>
            Eliminate the manual data entry, reduce duplication of efforts, and enable employees to focus on more value-added activities.
            </p>
          </div>

          <div className="basis-full  sm:basis-[47%]">
            <div className="w-32 h-32 relative">
              <Image
                alt="Image"
                src={MLE}
                objectFit="cover"
                layout="fill"
                className="relative block"
              />
            </div>
            <h1>Make your life easier</h1>
            <p>
            Eliminate the manual data entry, reduce duplication of efforts, and enable employees to focus on more value-added activities.
            </p>
          </div>

          <div className="basis-full  sm:basis-[65%]">
            <div className="w-32 h-32 relative">
              <Image
                alt="Image"
                src={PM}
                objectFit="cover"
                layout="fill"
                className="relative block"
              />
            </div>
            <h1>Manage all bussiness in one place</h1>
            <p>
            Know your business data such as finance, human resources, supply chain, manufacturing, and customer relationship management. 
            </p>
          </div>
        </div>
      </div>

      <div className="lg:h-3/4 h-3/5 w-full relative basis-1/2">
        <Image
          alt="Image"
          src={benefit}
          objectFit="contain"
          layout="fill"
          className="relative block"
        />
      </div>
    </section>
  );
};

export default Benefits;
