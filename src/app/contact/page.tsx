import Nav from "@/components/Nav";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import contactSvg from "../../../public/contactSVG.svg";
import GetInTouch from "@/components/GetInTouch";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

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

      <GetInTouch />

      <section className="container mx-auto my-12">
        <iframe
          className="w-full rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1489.2927205755102!2d96.15822713825241!3d16.82862366333783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c193511ed12e7f%3A0xfb3fdb298f943c0!2s96%20Cafe!5e1!3m2!1sen!2smm!4v1706863218953!5m2!1sen!2smm"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Download/>
      <Footer/>
    </main>
  );
};

export default Contact;
