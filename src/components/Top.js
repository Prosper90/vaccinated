import React, { useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { shortenAddress } from '../utils/shortenAddress';
import { useNavigate } from 'react-router-dom';


export default function Top({nav, setNav}) {

 const navigate = useNavigate();
 const { isConnected, address } = useAccount();
 const { disconnect  } = useDisconnect();

 const discon = () => {
    disconnect();
    navigate("/")
 }


  return (
    <div className='w-[100%] flex justify-between items-center'>
            <h3 className='font-bold text-[20px] hidden md:block'>Dashboard</h3>

        <button className='outline-none border-none py-[7px] px-[21px] bg-blue-500 hover:bg-[#446193] rounded-[12px]' onClick={discon}>
            <div className="flex gap-1 items-center">
              <span>{shortenAddress(address)}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#FFF" d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675h-4.45ZM6 20q-.825 0-1.413-.588T4 18v-.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.588 1.413T18 20H6Z"/></svg>
            </div> 
        </button>
    </div>
  )
}
