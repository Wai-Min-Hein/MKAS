import React from 'react'
import posSolution from "../../public/posSolution.svg";
import Image from 'next/image';


const Solutions = () => {
  return (
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
  )
}

export default Solutions
