import React from "react";

import team from "../../public/images/team.jpg";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="container mx-auto py-6">
      <div className="text-center">
        <p>About us</p>
        <h1>Who We Are?</h1>
        <p className="w-2/5 mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          natus praesentium nemo, quaerat repellendus sunt.
        </p>
      </div>

      <div className="w-full h-[90vh] relative rounded-lg overflow-hidden mt-8">
        <Image alt="Image" src={team} objectFit="cover" layout="fill" className="relative block"/>
      </div>
    </section>
  );
};

export default WhoWeAre;
