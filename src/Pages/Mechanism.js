import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Mechanism() {
  return (
    <div className='px-7 pt-3 md:px-[100px] text-white h-[100%]'>
     <Navbar  />

   
      {/* Main container */}
      <div className="w-full flex justify-center items-center flex-col z-[99999999]">
        <div className='z-[999999]'>
            <img src="/mechanism.svg" alt="" className='h-24' />
        </div>

       <div className="w-[100%] flex flex-col md:flex-row items-center">
        <div className="w-[100%] md:w-[40%]">
          <img src="/illus2.png" alt="" />
        </div>


          <div className="text-[14px] text-start mt-3 leading-[25px] w-[100%] md:w-[70%] md:pl-10">
              Quick Intro 
              BasedVirus is a gamified community network that uses VaccinateToEarn model to motivate its members to vaccinate infected wallets. <br />

              {'==>'} By infected wallet, it means the wallet is trapped, holding the liquid disease token.<br />
              {'==>'} By vaccinating a wallets, it means a member is ‘whitelisting’ that infected wallet.<br />
              <br />
              VaccinateToEarn
              Rewarding people to vaccinate infected wallets is facilitated by our innovative #VaccinateToEarn tokenomics. The #VaccinateToEarn tokenomics are designed to reward participants for vaccinating infected wallets. 

              For every wallet that is vaccinated, the Vaccinatoor earns 4% of all future transactions from that wallet. This provides a strong motivation for other vaccinators to find and vaccinate as many wallets as possible.
            </div>
       </div>

          <a href='https://basedvirus.gitbook.io' className='outline-none border-none py-[10px] px-[25px] bg-[#446193] rounded-[4px] flex gap-1 mt-6 z-[99]' >
            <span>Read on</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#fff" d="M368 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64ZM256 304h-80a16 16 0 0 1 0-32h80a16 16 0 0 1 0 32Zm80-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Z"/></svg>
          </a>

      </div>
      {/* Main container */}

          
      <Footer />
    </div>
  )
}
