import React from 'react'

export default function Banner() {
  return (
      <div className='h-[80%] bg-white'>
        <div className='flex   h-[573px] w-[1271px]  items-center md:m-10'>
          <div className='flex flex-col gap-y-9 ml-3'>
            <h1 className='w-[472px] h-[162px] font-bold text-[37px]'>
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className='w-[798px] h-36 font-medium text-[29px] text-[#787054]'>
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className='text-[25px] font-medium w-[274px] h-[49px] bg-[#A29875] text-white p-2 rounded-lg'>
              Explore Now
            </button>
          </div>
          <div 
            className='w-[421px] h-[573px] bg-cover bg-center rounded-tl-[128px] rounded-br-[128px]'
            style={{ backgroundImage: `url('/images/banner.png')` }}
          >
            <div className='w-[380px] h-[525px] border border-1 m-auto mt-5 border-white rounded-tl-[128px] rounded-br-[128px]'></div>
          </div>
        </div>
      </div>
  )
}
