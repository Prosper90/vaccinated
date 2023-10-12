import React, {useState, useEffect} from 'react';
import { shortenAddress } from '../utils/shortenAddress';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useDisconnect } from 'wagmi';
import { Link } from 'react-router-dom';



export default function Navbar() {
 
    const [nav, setNav] = useState(false);
    const { isConnected, address } = useAccount();
    const { disconnect,  } = useDisconnect();
    const { open } = useWeb3Modal();
    const buttonAction = isConnected ? disconnect : open;


    // const buttonAction = () => {
    //   if(isConnected){
    //     navigate('/');
    //     disconnect()
    //   } else {
    //     navigate('/dashboard');
    //     open()
    //   }
    // }
    
    useEffect(() => {

    }, [address, nav])
    

  return (
    <div className='flex justify-between relative z-[9999999] items-center'>
       <div className="logo z-[999]">
         <img src="/dashboardLogo.svg" alt="" className='h-20' />
       </div>

       {/* <button onClick={() => setNav(!nav)} className=" font-serif border p-2 rounded-md md:hidden flex items-end text-xs flex-col gap-1.5 outline-none  ">
         <span className='w-10 bg-white h-[1.5px]'></span>
         <span className='w-8 bg-white h-[1.5px]'></span>
         <span className='w-10 bg-white h-[1.5px]'></span>
       </button> */}

      <input 
         onClick={() => setNav(!nav)} 
         id="checkboxtwo" 
         type="checkboxtwo" 
         className="font-serif border p-2 rounded-md md:hidden flex"
         />
          <label className="toggletwo md:hidden block" for="checkboxtwo">
              <div id="bar1two" class="barstwo"></div>
              <div id="bar2two" class="barstwo"></div>
              <div id="bar3two" class="barstwo"></div>
          </label>
       

       <div className={`fixed md:relative md:flex flex-col md:flex-row bg-[#000] md:bg-transparent md:justify-end md:gap-10 w-[81%] md:items-center items-end top-[23px] md:top-0 rounded-[10px] p-[20px] gap-[10px] ${nav ? 'flex': 'hidden'}`}>
         <Link to="/" className="cursor-pointer">Home</Link>

         <Link to="/token" className="cursor-pointer">Our Tokens</Link>

         <Link to="/how" className="cursor-pointer">How it works</Link>

          <button className='outline-none border-none py-[10px] px-[21px] bg-blue-500 hover:bg-[#446193] rounded-[4px]' 
           onClick={buttonAction}>
            { !isConnected ? 
            <div className="flex gap-1">
              <span>Launch App</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#fff" d="M17 3H7C4.79 3 3 4.79 3 7v10c0 2.21 1.79 4 4 4h12c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2V5a2 2 0 0 0-2-2m0 2v2H7c-.73 0-1.41.2-2 .54V7c0-1.1.9-2 2-2m8.5 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5Z"/></svg>
            </div> : shortenAddress(address) 
            }
          </button>
       </div>
    </div>
  )
}
