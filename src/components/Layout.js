import React, {useEffect, useState, useContext} from 'react';
import Preloader from '../components/Preloader';
import Left from '../components/Left';
import Congratulate from '../components/Congratulate';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../utils/contextShop';



export default function Layout({children}) {

  const { nav, setNav, isBalancesLoading, isRefLoading, isSuccessVaccinate, clickout } = useContext(ShopContext);
  const navigate = useNavigate();
  const { isConnected, address } = useAccount();



  useEffect(() => {
    if(!isConnected && !address ){
      navigate('/');
    }
  }, [address]);

  
  return (
    <>
    
    {
        isBalancesLoading || isRefLoading &&
        <Preloader />
    }
   

    <div className="w-[100%] h-auto relative z-[9999] grid grid-cols-4 text-[#FFF]">
       {/* Left */}
       <div className="col-span-0 md:col-span-1 ">
           <div className={`block absolute top-[28px] left-[-22px] md:hidden ${
            nav
              ? "translate-x-[320px] ease-in duration-300"
              : "translate-x-[41px] ease-out duration-300"
            }`
            }>
              <input onClick={() => setNav(!nav)} type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1" />
                <div className="bars" id="bar2" />
                <div className="bars" id="bar3" />
              </label>
            </div>
           <Left nav={nav} setNav={setNav} />
       </div>

       {/* Right */}
       <div className="col-span-full md:col-span-3">
            {children}
       </div>
    </div>


    {isSuccessVaccinate && !clickout &&
     <Congratulate />
    }
    
  
        {/* <div className="absolute w-[100%] h-[100%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-[99]">
             <img src="/walletedited.png" alt="" />
         </div> */}

    </>
  )
}
