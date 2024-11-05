import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Banner() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center h-[825] w-full max-w-[1486px]">
        <div className="h-full max-h-[573px] px-2 pt-3 md:px-7  w-full max-w-[1271px] m-1 md:m-12">
          <div
              className="md:hidden w-full max-w-[421px] h-[500px] flex justify-center items-center bg-cover bg-center "
              style={{ backgroundImage: `url('/images/banner.png')` }}
            >
              <div className="w-full h-[470px] border-[1px] border-white m-5 rounded-tl-[128px] rounded-br-[128px]"></div>
            </div>
          <div className="flex md:justify-between items-center">
            <div className="flex flex-col text-center pt-4 md:pt-0 md:text-left">
              <h1 className="font-bold font-[Roboto] mb-2 leading-loose text-3xl md:text-5xl w-full md:h-40 md:w-[472px]">
                {" "}
                IMPECCABLE CRAFTSMANSHIP AND FINESSE
              </h1>
              <p className="text-lg text-[#787054] w-full md:w-[794px] mb-5">
                {" "}
                An example of intricate workmanship and detail, elegant
                necklaces and long and short chains form a part of our desirable
                collection.
              </p>
              <button className="md:w-[274px] text-xl px-5 py-2 mb-2 text-white font-medium bg-[#A29875]">
                Explore Now
              </button>
            </div>
            <div
              className="hidden w-[421px] h-[573px] md:flex justify-center items-center bg-cover bg-center "
              style={{ backgroundImage: `url('/images/banner.png')` }}
            >
              <div className="w-[380px] h-[525px] border-[3px] border-white m-5 rounded-tl-[128px] rounded-br-[128px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
