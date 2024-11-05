// import React from "react";
// import Navbar from "@/components/Navbar/Navbar";

// export default function Home() {
//   return (
//     <div className="h-screen">
//       <Navbar />

//       <div className="flex flex-col gap-y-5 w-full max-w-[1486px] md:flex-row md:justify-between items-center h-[80%]  md:m-14">
      
//         <div
//           className="w-full max-w-[421px] md:h-[573px]  md:hidden justify-center items-center bg-cover bg-center rounded-tl-[128px] rounded-br-[128px]"
//           style={{ backgroundImage: `url('/images/banner.png')`}}
//         >
//           <div className="w-[380px] h-[525px] border-[3px] m-5 border-white rounded-tl-[128px] rounded-br-[128px]"></div>
//         </div>
//         <div className="h-[573px] w-[1217px] flex justify-between">
//         <div className="md:w-1/2  flex gap-y-3 p-4 flex-col md:pt-3 justify-center items-center md:gap-y-5 md:items-start">
//           <h1 className={`text-3xl md:text-[44px] leading-snug md:h-[162px] font-Roboto font-bold`}>
//             IMPECCABLE CRAFTSMANSHIP AND FINESSE
//           </h1>
//           <p className="md:w-[798px] md:h-36 mb-2 font-medium  text-md md:text-[29px] text-[#787054]">
//             An example of intricate workmanship and detail, elegant necklaces
//             and long and short chains form a part of our desirable collection.
//           </p>
//           <button className="md:text-[25px] text-lg font-medium w-md md:w-[274px] md:h-[49px] bg-[#A29875] text-white px-5 py-2 md:p-2 rounded-lg">
//             {" "}
//             Explore Now
//           </button>
//         </div>
//         <div
//           className="hidden md:w-[421px] h-[573px] md:flex justify-center items-center bg-cover bg-center "
//           style={{ backgroundImage: `url('/images/banner.png')` }}
//         >
//           <div className="w-[380px] h-[525px] border-[3px] border-white m-5 rounded-tl-[128px] rounded-br-[128px]"></div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
// import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <div className="h-screen">
      {/* <Navbar /> */}
      <Banner />

      {/* <div className="flex flex-col gap-y-5 w-full md:flex-row md:justify-between h-[80%] m-5 md:m-14">
        <div
          className="w-full max-w-[421px] md:h-[573px]  md:hidden justify-center items-center bg-cover bg-center rounded-tl-[128px] rounded-br-[128px]"
          style={{ backgroundImage: `url('/images/banner.png')`}}
        >
          <div className="w-[380px] h-[525px] border-[3px] m-5 border-white rounded-tl-[128px] rounded-br-[128px]"></div>
        </div>
        <div className="h-[573px] w-[1217px] flex justify-between m-6">
        <div className="md:w-1/2 flex gap-y-3 p-4 flex-col md:pt-3 justify-center items-center md:gap-y-5 md:items-start">
          <h1 className={`text-3xl md:text-[44px] leading-snug md:h-[162px] font-Roboto font-bold`}>
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
          <div className="w-[380px] h-[525px] border-[3px] border-white m-5 rounded-tl-[128px] rounded-br-[128px]"></div>
        </div>
        </div>
      </div> */}
    </div>
  );
}
