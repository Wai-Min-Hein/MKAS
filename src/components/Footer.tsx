import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="  py-8">
      <div className="border-b-[.5px] border-b-gray-700 pb-4 ">
        <div className="container mx-auto flex items-start justify-between">
          <div className="basis-1/2">
            <div className="">
              <h1>Myanmar KAS Technology</h1>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatu incidunt
              itaque vitae corporis fugiat est quae dolore eum, lib.
            </p>

            <div className="flex items-start justify-start gap-4 mt-4">
              <FaFacebook className="text-2xl" />
              <FaYoutube className="text-2xl" />
              <MdEmail className="text-2xl" />
            </div>
          </div>
          <div className="basis-1/2  container mx-auto">
            <h1 className="text-center">More Details</h1>

            <div className="flex items-center justify-center gap-16 mt-4">
              <p>About us</p>
              <p>Services</p>
              <p>Contact us</p>
            </div>
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
