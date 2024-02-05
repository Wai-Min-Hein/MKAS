import React from "react";

import ErpIcon from "../../public/erp.svg";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const ERP = () => {
  return (
    <section className="container mx-auto h-[120vh] lg:h-screen flex flex-col-reverse lg:flex-row items-center justify-start lg:justify-between gap-12 lg:gap-24">
      <div className="basis-1/2 w-3/5 sm:w-4/5 h-full relative">
        <Image
          alt="images"
          src={ErpIcon}
          objectFit="cover"
          layout="fill"
          className="relative block"
        />
      </div>

      <div className="basis-1/2">
        <div className="">
          <p>ERP</p>
          <h1 className="text-4xl">Manage all your bussiness in one place</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            provident culpa nihil vitae libero sed saepe nesciunt ducimus enim,
            asperiores modi perferendis aspernatur harum maxime.
          </p>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center gap-2 justify-start basis-1/2">
              <FaCircleCheck className="text-[#3d5af1]" />
              <p>Lorem ipsum dolor sit amet consectetur adipisis.</p>
            </div>

            <div className="flex items-center gap-2 justify-start basis-1/2">
              <FaCircleCheck className="text-[#3d5af1]" />
              <p>Lorem ipsum dolor sit amet consectetur adipisis.</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 my-2">
            <div className="flex items-center gap-2 justify-start basis-1/2">
              <FaCircleCheck className="text-[#3d5af1]" />
              <p>Lorem ipsum dolor sit amet consectetur adipisis.</p>
            </div>

            <div className="flex items-center gap-2 justify-start basis-1/2">
              <FaCircleCheck className="text-[#3d5af1]" />
              <p>Lorem ipsum dolor sit amet consectetur adipisis.</p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center gap-2 justify-start basis-1/2">
              <FaCircleCheck className="text-[#3d5af1]" />
              <p>Lorem ipsum dolor sit amet consectetur adipisis.</p>
            </div>

            <div className="flex items-center gap-2 justify-start basis-1/2">
              <FaCircleCheck className="text-[#3d5af1]" />
              <p>Lorem ipsum dolor sit amet consectetur adipisis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERP;
