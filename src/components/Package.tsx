import React from "react";
import { MdCheck } from "react-icons/md";
import { SlLayers } from "react-icons/sl";

const Package = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center">
        <p>Pricing</p>
        <h1>Best pricing for your bussiness</h1>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt
          consequatur voluptatum doloremque nisi excepturi obcaec.
        </p>
      </div>

      <div className="flex items-stretch justify-between gap-4 mt-6">
        <div className="basis-[30%] border border-gray-900 rounded-md px-6 py-4">
          <SlLayers className="text-6xl pb-2" />
          <h2>Basis</h2>
          <p>
            <strong>30000MMK</strong> <sub> /month</sub>
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
          </div>

          <button className="w-full py-3 rounded-full mt-3 bg-sky-700">Select Plan</button>
        </div>

        <div className="basis-[30%] border border-gray-900 rounded-md px-6 py-4">
          <SlLayers className="text-6xl pb-2" />
          <h2>Basis</h2>
          <p>
            <strong>30000MMK</strong> <sub> /month</sub>
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
          </div>
          <button className="w-full py-3 rounded-full mt-3 bg-sky-700">Select Plan</button>

        </div>

        <div className="basis-[30%] border border-gray-900 rounded-md px-6 py-4">
          <SlLayers className="text-6xl pb-2" />
          <h2>Basis</h2>
          <p>
            <strong>30000MMK</strong> <sub> /month</sub>
          </p>

          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
            <div className="flex items-start justify-start gap-2">
              <MdCheck />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </div>
          </div>
          <button className="w-full py-3 rounded-full mt-3 bg-sky-700">Select Plan</button>

        </div>
      </div>
    </section>
  );
};

export default Package;
