import React from 'react'
import posSolution from "../../public/posSolution.svg";
import Image from 'next/image';


const Solutions = () => {
  return (
    <section className="my-12 container mx-auto">
        <div className="lg:text-center ">
          <h6>Digital Transformation Solution</h6>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">The Best Solutions for Your Bussiness</h1>
          {/* <p className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente dolorum? Iure, nulla libero.
          </p> */}
        </div>


        <div className="h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen ">

          <div className="h-full relative">
            <Image alt="Image" src={posSolution} objectFit="contain" layout="fill" className="relative block"/>
          </div>

        </div>
      </section>
  )
}

export default Solutions
