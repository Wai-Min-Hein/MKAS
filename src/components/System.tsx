import React from "react";

import InventoryIcon from "../../public/inventoryIcon.svg";
import posIcon from "../../public/posIcon.svg";
import HRMIcon from "../../public/hrmIcon.svg";
import Image from "next/image";

const System = () => {
  return (
    <section className="container mx-auto py-6">
      <div className="lg:text-center">
        <p>System</p>
        <h1 className="text-4xl">Our System</h1>
        <p className="w-full md:w-4/5 lg:w-2/5 lg:mx-auto">
          One-stop solution for all commerce needs, giving businesses the
          confidence to start and scale their business anywhere, anytime.
        </p>
      </div>

      <div className="flex items-center justify-start flex-wrap lg:flex-nowrap gap-3  mt-20">
        <div className="basis-full md:basis-[48%] lg:basis-1/3 grid place-items-center px-10 py-12 border-2 border-blue rounded-md">
          <div className="mt-[-7rem] ">
            <div className="w-32 h-32 rounded-full overflow-hidden  grid place-items-center">
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
              A Software where you can manage sales data such as Sales, Goods
              Return, Discount, Voucher, Service charges and Tax.
            </p>
          </div>
        </div>
        <div className="basis-full md:basis-[48%] lg:basis-1/3  grid place-items-center px-10 py-12 my-12 border-2 border-blue rounded-md">
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
              The HR Management app will keep you at the forefront of today’s
              people management strategies; including best practices, industry
              news and information about key HR sectors.
            </p>
          </div>
        </div>
        <div className="basis-full md:basis-[48%] lg:basis-1/3  grid place-items-center px-10 py-12 border-2 border-blue rounded-md">
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
              Easily upload your existing inventory list into Sortly. Organize
              inventory folders by location, type, and more. Add critical item
              details with custom fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default System;
