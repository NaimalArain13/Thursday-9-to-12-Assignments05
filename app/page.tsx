// import React from "react";

// export default function Banner() {
//   return (
//     <div className="h-screen">
//       <Navbar />
//       <div className="flex h-[80%] bg-white">
//         <div className="w-1/2 flex  justify-center m-12">
//           {/* <div className='flex flex-col gap-y-9 ml-3'> */}
//           <h1 className="text-[44px] font-bold">
//             IMPECCABLE CRAFTSMANSHIP AND FINESSE
//           </h1>
//           <p className="w-[798px] h-36 font-medium text-[29px] text-[#787054]">
//             An example of intricate workmanship and detail, elegant necklaces
//             and long and short chains form a part of our desirable collection.
//           </p>
//           <button className="text-[25px] font-medium w-[274px] h-[49px] bg-[#A29875] text-white p-2 rounded-lg">
//             Explore Now
//           </button>
//           {/* </div> */}
//         <div
//           className="w-1/2 flex justify-center items-center bg-cover bg-center rounded-tl-[128px] rounded-br-[128px]"
//           style={{ backgroundImage: `url('/images/banner.png')` }}
//         >
//           <div className="w-[380px] h-[525px] border border-1 m-auto mt-5 border-white rounded-tl-[128px] rounded-br-[128px]"></div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />

      <div className="flex flex-col gap-y-5  md:flex-row md:justify-between h-[80%] m-5 md:m-14">
        <div
          className="w-[421px] h-[573px] md:hidden justify-center items-center bg-cover bg-center rounded-tl-[128px] rounded-br-[128px]"
          style={{ backgroundImage: `url('/images/banner.png')`}}
        >
          <div className="w-[380px] h-[525px] border-[3px] m-5 border-white rounded-tl-[128px] rounded-br-[128px]"></div>
        </div>
        <div className="md:w-1/2 flex gap-y-3 p-4 flex-col md:pt-3 justify-center items-center md:gap-y-5 md:items-start">
          <h1 className="text-3xl md:text-[44px] leading-snug md:h-[162px] font-bold">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="md:w-[798px] md:h-36 mb-2 font-medium  text-md md:text-[29px] text-[#787054]">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="md:text-[25px] text-lg font-medium w-md md:w-[274px] md:h-[49px] bg-[#A29875] text-white px-5 py-2 md:p-2 rounded-lg">
            {" "}
            Explore Now
          </button>
        </div>
        <div
          className="hidden w-[421px] h-[573px] md:flex justify-center items-center bg-cover bg-center "
          style={{ backgroundImage: `url('/images/banner.png')` }}
        >
          <div className="w-[380px] h-[525px] border-[3px] border-white m-5   rounded-tl-[128px] rounded-br-[128px]"></div>
        </div>
      </div>
    </div>
  );
}
