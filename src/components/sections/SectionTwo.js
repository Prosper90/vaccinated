import React from 'react'

export default function SectionTwo() {
  return (
    <div className=" bg-[#1E1E1E]  flex flex-col jutify-center items-center rounded-[10px] h-100 mt-14 relative z-[999] border border-[#334462] pt-[28px]" style={{background: 'rgba(30, 30, 30, 0.60)'}}>

    <div className="border-t border-solid border-[#334462] h-full flex flex-col justify-center items-center p-8">
       <h1 className='font-extrabold text-[35px] '>Token</h1>

       <div className="text-[15px] text-center mt-3">
               BasedVirus Network operates as a community-driven platform employing a dual token framework to establish a progressive ecosystem.
               The initial token, BVD, holds no intrinsic value and is open to trading* on the market. When we refer to "trading*", we imply that it's purchasable, but selling may require possession of the vaccine token (vaBVD).
               On the other hand, vaBVD serves as an illiquid and non-transferrable vaccination token, granting holders the ability to exchange their $BVD tokens.
               This dual token system initiates a favorable feedback loop, ensuring the infectious and continuous growth of the ecosystem.
       </div>
    </div>


  </div>
  )
}
