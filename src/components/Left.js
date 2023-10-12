import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAccount, useDisconnect } from 'wagmi';




export default function Left({nav, setNav}) {

  const navigate = useNavigate();
  const { isConnected, address } = useAccount();
  const { disconnect  } = useDisconnect();
 
  const discon = () => {
     disconnect();
     navigate("/")
  }
 


  return ( 
    <div className={` fixed ${nav ? "translate-x-0 w-[300px] ease-in duration-300 " : "-translate-x-[300px] ease-out duration-300" } md:w-[250px]  xl:w-[320px] md:translate-x-0 md:relative bg-[#1E1E1E] h-[100dvh]  flex-col items-start gap-7 px-[13px] flex rounded-tr-lg rounded-tr-[3.5rem] z-[999999]`}>

        <h1 className='text-[#328AF1] font-extrabold text-[25px] pt-4 flex items-center gap-1 border-1 border-[#328AF1]'>
          <img src="/dashboardLogo.svg" alt="" className='h-24' />
          </h1>

         <div className="relative flex flex-col justify-center items-start gap-[20px] mt-[10px]  w-[100%]">

            <Link to="/dashboard" className="flex items-center gap-3 cursor-pointer hover:bg-[#000] hover:w-[100%] rounded px-3 py-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#888888" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6v18H5Zm8 0v-9h8v7q0 .825-.588 1.413T19 21h-6Zm0-11V3h6q.825 0 1.413.588T21 5v5h-8Z"/></svg>
                </span>
                <span>Dashboard</span>
            </Link>

            <Link to="/Refferals" className="flex items-center gap-3 cursor-pointer hover:bg-[#000] hover:w-[100%] rounded px-3 py-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#888888" d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5zM6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9l-.6-.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4zm0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5zm5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2zM6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3z"/></svg>
                </span>
                <span>Referrals</span>
            </Link>

            <Link to="/vaBVDRecieved" className="relative flex items-center gap-3 cursor-pointer hover:bg-[#000] hover:w-[100%] rounded px-3 py-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#888888" d="m10.95 18l5.65-5.65l-1.45-1.45l-4.225 4.225l-2.1-2.1L7.4 14.45L10.95 18ZM4 22V2h10l6 6v14H4Zm9-13h5l-5-5v5Z"/></svg>
                </span>
                <span>vaBVD Recieved</span>
            </Link>

            <div className="flex items-center gap-3 cursor-pointer hover:bg-[#000] hover:w-[100%] rounded px-3 py-2" onClick={discon}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512"><path fill="#888888" d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16Zm299.31-11.31l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62Z"/></svg>
                </span>
                <span>Logout</span>
            </div>

         </div>

    </div>
  )
}
