import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="h-[70px] bg-[#A29875] flex items-center">
      <div className="h-[87px] flex items-center">
        <div className="md:w-[242px] flex py-[11] items-center text-white px-2 md:px-7">
          <h1>
            <Image src={"/images/logo.png"} alt="logo" width={50} height={50} />
          </h1>
          <h1 className=" w-[174px] h-[83px] flex items-center font-serif text-[50px]">
            urity
          </h1>
        </div>
        <div className="h-14 w-[769px] px-3 top-[39px] left-[431px] rounded-[13px] bg-neutral-100  hidden md:flex justify-between items-center">
          <p className="text-sm ">
            Search for Gold Jewellery, Diamond Jewellery and more…
          </p>
          <p className="w-[21px] h-[21px] ">
            <Image
              src={"/images/search.png"}
              alt="search-icon"
              width={19}
              height={19}
            />
          </p>
        </div>
        <div className="w-[177px] h-[30px] top-13 ml-28">
          <div className="hidden md:flex gap-[38px]">
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
      </div>
    </div>
  );
}



