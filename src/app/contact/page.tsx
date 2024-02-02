import Nav from '@/components/Nav'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import contactSvg from "../../../public/contactSVG.svg"
import GetInTouch from '@/components/GetInTouch'

const Contact = () => {
  return (
    <main>
         <section className="h-[75vh] w-full bg-blue">
        <Nav />

        <div className="grid place-items-center h-full">
          <div className="text-center">
            <h1 className="text-4xl">Contact Us</h1>
            <div className="flex items-center justify-start gap-2">
              <Link href={"/"}>
                <button>Home</button>
              </Link>
              <MdOutlineKeyboardArrowRight />

              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <GetInTouch/>
    </main>
  )
}

export default Contact
