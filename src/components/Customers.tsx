import React from 'react'

import Image from 'next/image';



import NTH from "../../public/images/NTH.png";
import MIU from "../../public/images/MIU.png";
import Mook from "../../public/images/Mook.png";
import Rauu from "../../public/images/Rauu.png";

import Lakopi from "../../public/images/Lakopi.png";
import Gagyi from "../../public/images/Gagyi.png";
import AnyarThu from "../../public/images/AnyarThu.png";
import Sakura from "../../public/images/Sakura.png";
import WhiteCafe from "../../public/images/WhiteCafe.png";

const Customers = () => {
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
    <section className="py-6 container mx-auto">
    <h1 className="text-4xl text-center mb-12">Our Customers</h1>

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
  )
}

export default Customers
