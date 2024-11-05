import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="h-[70px] bg-[#A29875] flex items-center">
      {/* <div className="h-[87px] flex items-center"> */}
        <div className="md:w-[242px] w-full flex py-[11] items-center  text-white px-2 md:px-7">
            <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
          <h1 className=" w-full h-[83px] flex items-center font-serif text-[50px]">
            urity
          </h1>
        </div>
        <div className="hidden md:flex items-center h-12 w-full max-w-md rounded-md bg-neutral-100 lg:h-14 lg:max-w-lg lg:ml-16 lg:px-3">
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
            className="flex-1 px-4 text-sm text-gray-600 bg-transparent outline-none"
          />
          <Image
            src={"/images/search.png"}
            alt="search-icon"
            width={20}
            height={20}
          />
        </div>
        <div className="w-full max-w-[177px]  h-[30px] top-13 ml-28">
          <div className="hidden md:flex  gap-[38px]">
            <p>
              <Image
                src={"/images/heart.png"}
                alt="heart-icon"
                width={33}
                height={29}
              />
            </p>
            <p>
              <Image
                src={"/images/user.png"}
                alt="user-icon"
                width={29}
                height={28}
              />
            </p>
            <p>
              <Image
                src={"/images/cart.png"}
                alt="cart-icon"
                width={38}
                height={30}
              />
            </p>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

{/* <div className="h-[70px] bg-[#A29875] flex items-center justify-between px-2 md:px-7">
  <div className="w-full md:w-[242px] flex items-center text-white">
    <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
    <h1 className="flex-1 font-serif text-[24px] md:text-[50px]">urity</h1>
  </div>
  <div className="hidden md:flex items-center w-full max-w-md bg-neutral-100 lg:max-w-lg">
    <input
      type="text"
      placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
      className="flex-1 px-4 text-sm text-gray-600 bg-transparent outline-none"
    />
    <Image src={"/images/search.png"} alt="search-icon" width={20} height={20} />
  </div>
  <div className="flex gap-3 md:gap-[38px]">
    <Image src={"/images/heart.png"} alt="heart-icon" width={25} height={25} />
    <Image src={"/images/user.png"} alt="user-icon" width={25} height={25} />
    <Image src={"/images/cart.png"} alt="cart-icon" width={25} height={25} />
  </div>
</div> */}



