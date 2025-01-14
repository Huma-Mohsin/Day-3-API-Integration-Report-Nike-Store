import Image from "next/image";
import React from "react";

const DoNotMissSection = () => {
  return (
    <div className="w-full mt-[60px]">
      {/* Heading outside the image, aligned to the top-left */}
      <h2 className="text-3xl font-bold font-sans text-left mb-4 pl-[40px]">
        Do Not Miss
      </h2>

      {/* Centered Image Container */}
      <div className="w-full max-w-[1200px] mx-auto h-auto overflow-hidden relative">
        <Image
          src="/Donotmiss.png"
          alt="Do Not Miss"
          className="w-full h-auto object-contain"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default DoNotMissSection;
