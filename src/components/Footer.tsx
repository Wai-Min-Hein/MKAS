import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto flex items-start justify-between border-b-[.5px] border-b-gray-700 pb-4">
        <div className="basis-1/2">
          <div className="">
            <h1>Myanmar KAS Technology</h1>
          </div>
          <p className="mt-4">
          Your success is our priority. Our solutions are geared towards elevating your customer experience, ensuring satisfaction at every transaction.
          </p>

          <div className="flex items-start justify-start gap-4 mt-4">
            <FaFacebook className="text-2xl" />
            <FaYoutube className="text-2xl" />
            <MdEmail className="text-2xl" />
          </div>
        </div>
        <div className="basis-1/2  container mx-auto">
          <h1 className="text-center">More Details</h1>

          <div className="flex flex-wrap items-center justify-center gap-16 mt-4">
            <p>About us</p>
            <p>Services</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-2">
        <h6>Develop by Myanmar KAS Technology</h6>
      </div>
    </section>
  );
};

export default Footer;
