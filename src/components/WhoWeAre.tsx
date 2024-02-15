import React from "react";

import team from "../../public/images/team.jpg";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="container mx-auto py-6">
      <div className="text-center">
        <p>About us</p>
        <h1>Who We Are?</h1>
        <p className="w-full sm:w-4/5 md:w-35 lg:w-2/5 mx-auto">
        We are the passionated technical professions who have the wiliness to solve the customer problems efficiently.
        </p>
      </div>

      <div className="w-full h-[90vh] relative rounded-lg overflow-hidden mt-8">
        <Image alt="Image" src={team} objectFit="cover" layout="fill" className="relative block"/>
      </div>
    </section>
  );
};

export default WhoWeAre;
