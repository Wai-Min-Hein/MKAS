import React from 'react'
import Image from 'next/image'


import cs1 from "../../public/images/cs1.jpg";
import { FaStar } from 'react-icons/fa';


const Testimonials = () => {
  return (
    <section className="container mx-auto my-12">
        <div className="flex items-center justify-between">
          <div className="basis-1/2">
            <h6 className='text-2xl sm:text-3xl lg:text-4xl'>Testimonials</h6>
            <h1>What they say about Mkas Software</h1>
          </div>

          <div className="basis-1/2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis veritatis quod ad excepturi eum, praesentium
              architecto. Id, porro. Voluptas sequi dolore.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap mt-16">
          <div className="basis-full sm:basis-[48%] lg:basis-[30%]">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image
                alt="Image"
                src={cs1}
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                className="relative block"
              />
            </div>
            <div className="flex items-center justify-start gap-2 my-6">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, libero! Obcaecati iusto deleniti ipsa quas totam sit.
              Minus aperiam quaerat aliquid.
            </p>

            <h1>Mark William</h1>
            <p>CEO of Pizza oro</p>
          </div>
          <div className="basis-full sm:basis-[48%] lg:basis-[30%]">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image
                alt="Image"
                src={cs1}
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                className="relative block"
              />
            </div>
            <div className="flex items-center justify-start gap-2 my-6">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, libero! Obcaecati iusto deleniti ipsa quas totam sit.
              Minus aperiam quaerat aliquid.
            </p>

            <h1>Mark William</h1>
            <p>CEO of Pizza oro</p>
          </div>
          <div className="basis-full sm:basis-[48%] lg:basis-[30%]">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image
                alt="Image"
                src={cs1}
                objectFit="cover"
                layout="fill"
                objectPosition="center"
                className="relative block"
              />
            </div>
            <div className="flex items-center justify-start gap-2 my-6">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Officiis, libero! Obcaecati iusto deleniti ipsa quas totam sit.
              Minus aperiam quaerat aliquid.
            </p>

            <h1>Mark William</h1>
            <p>CEO of Pizza oro</p>
          </div>
        </div>
      </section>
  )
}

export default Testimonials
