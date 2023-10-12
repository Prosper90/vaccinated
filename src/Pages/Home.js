import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../lotties/datatwo.json';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useDisconnect } from 'wagmi';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import SectionTwo from '../components/sections/SectionTwo';
import Footer from '../components/Footer';



export default function Home() {

  const navigate = useNavigate();

  const { isConnected, address } = useAccount();
  const { disconnect  } = useDisconnect();
  const { open } = useWeb3Modal();
  const buttonAction = isConnected ? disconnect : open;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  // const buttonAction = () => {
  //   if(isConnected){
  //     disconnect();
  //     navigate('/');
  //   } else {
  //     open();
  //     navigate('/dashboard');
  //   }
  // } 


    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      useEffect(() => {
        //Handles navigation, which is a bit unique
        if(isConnected && address ){
          navigate('/dashboard');
        } else {
          navigate('/');
        }

        // Update the windowWidth state when the window is resized
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [address, isConnected]);


  return (
       <div className='px-7 pt-1 md:px-[100px] text-white h-[100%]'>
         <Navbar  />
         
         {/* SectionOne */}
         <div className="flex flex-col-reverse md:flex-row gap-0 lg:gap-[0.5rem] justify-center items-center w-100 ">
            
            {/* Left beginning */}
            {/* <div className="hidden md:flex gap-[5px] relative pb-[118px] z-[99999] ">
              
                  <div className="bg-[#D9D9D9] w-[80px] h-[71px]"></div>
                  <small className='absolute w-[280px] left-[87px] text-[15px]'>The platform is constructed upon base network and employs a dual-token framework to propel its groundbreaking innovation. Both tokens complement each other to foster the network's expansion.</small>
            </div> */}

                 <div className="flex flex-col justify-center items-center gap-0 md:gap-1 md:items-start z-[99]">
                    <div className="">
                      <img src="/textHeader.svg" alt="" className='h-24 lg:w-[100%] lg:h-auto' />
                    </div>
                    <div className="w-full md:w-[70%] text-[12px] md:text-[15px] text-center md:text-start ml-0 md:ml-14 mt-2">
                      <span> A gamified network experienment that uses a VaccinateToEarn model to reward members for vaccinate infected wallets
                        <a href='https://basedvirus.gitbook.io' className="hidden md:flex md:items-center md:gap-2 md:mt-2 text-blue-500">
                            <div className="text-[15px]">Read more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M16.2 6a1 1 0 0 1 1-1c.637 0 1.262.128 1.871.372c.663.265 1.173.658 1.636 1.12c.463.464.856.974 1.121 1.637c.244.609.372 1.234.372 1.871s-.128 1.262-.372 1.871c-.261.655-.648 1.16-1.104 1.619l-.984 1.083a.967.967 0 0 1-.033.034l-3.2 3.2c-.463.463-.973.856-1.636 1.122A5.012 5.012 0 0 1 13 19.3a5.012 5.012 0 0 1-1.871-.372c-.663-.265-1.173-.658-1.636-1.12c-.463-.464-.856-.974-1.121-1.637A5.145 5.145 0 0 1 8 14.2c0-.637.128-1.262.372-1.871c.265-.663.658-1.173 1.12-1.636l1.1-1.1a1 1 0 1 1 1.415 1.414l-1.1 1.1c-.337.337-.544.627-.678.964A3.014 3.014 0 0 0 10 14.2c0 .476.077.85.229 1.229c.134.337.341.627.678.964c.337.337.627.544.964.678c.391.157.766.229 1.129.229s.738-.072 1.129-.229c.337-.134.627-.341.964-.678l3.183-3.183l.984-1.083a.967.967 0 0 1 .033-.034c.337-.337.544-.627.678-.964c.157-.391.229-.766.229-1.129s-.072-.738-.229-1.129c-.134-.337-.341-.627-.678-.964c-.337-.337-.627-.544-.964-.679A3.014 3.014 0 0 0 17.2 7a1 1 0 0 1-1-1zm-4.9 1.5c-.363 0-.738.072-1.129.228c-.337.135-.627.342-.964.68L5.924 11.69l-.984 1.083l-.033.034c-.337.337-.544.627-.679.964A3.014 3.014 0 0 0 4 14.9c0 .363.072.738.228 1.129c.135.337.342.627.68.964c.336.337.626.544.963.679c.391.156.766.228 1.129.228a1 1 0 1 1 0 2a5.011 5.011 0 0 1-1.871-.371c-.663-.266-1.173-.659-1.636-1.122c-.463-.463-.856-.973-1.121-1.636A5.012 5.012 0 0 1 2 14.9c0-.637.128-1.262.372-1.871c.261-.655.648-1.16 1.104-1.619l.984-1.083l.033-.034l3.3-3.3c.463-.463.973-.856 1.636-1.121A5.012 5.012 0 0 1 11.3 5.5c.637 0 1.262.128 1.871.372c.663.265 1.173.658 1.636 1.12c.463.464.856.974 1.121 1.637c.244.609.372 1.234.372 1.871s-.128 1.262-.372 1.871c-.262.655-.649 1.162-1.105 1.62l-1.086 1.185a1 1 0 0 1-1.474-1.352l1.1-1.2l.03-.031c.337-.337.544-.627.678-.964c.157-.391.229-.766.229-1.129s-.072-.738-.229-1.129c-.134-.337-.341-.627-.678-.964c-.337-.337-.627-.544-.964-.679A3.014 3.014 0 0 0 11.3 7.5z"/></svg>
                          </a>
                        </span>
                    </div>
                    
                        <button className='ml-0 md:ml-14 outline-none border-none py-[10px] px-[25px] bg-blue-500 hover:bg-[#446193] rounded-[4px] flex gap-1 mt-4 z-[99]' onClick={buttonAction}>
                          <span>Connect Wallet</span>
                        </button>

                  </div>
            {/* Left Ending */}

            {/* Center beginning */}
            <div className="flex justify-start items-center h-auto md:h-[72dvh] pb-[0px] w-[100%]">

                <div 
                   className="w-[100%] flex justify-center items-center z-[99] lottie_container"
                   >
                    <Lottie 
                      options={defaultOptions}
                      height={windowWidth >= 768 ? "70%" : "100%"}
                      width={windowWidth >= 768 ? "100%" : "100%"}
                      className="custom-lottie"
                    />
                  </div>
                  
                  
                  {/* <div className=" absolute top-[78%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] flex flex-col justify-center items-center md:mt-14 z-[99]">
                    <div className="">
                      <img src="/textHeader.svg" alt="" className='h-24' />
                    </div>
                    <div className="w-full text-[13px] md:text-[17px] text-center">
                       A gamified network experienment that uses a VaccinateToEarn model to reward members for vaccinate infected wallets
                    </div>

                    <button className='outline-none border-none py-[10px] px-[25px] bg-blue-500 hover:bg-[#446193] rounded-[4px] flex gap-1 mt-4 z-[99]' onClick={buttonAction}>
                      <span>Connect Wallet</span>
                    </button>
                  </div> */}
            </div>
            {/* center end */}


              {/* Right beginning */}
            {/* <div className="flex flex-row md:flex-col gap-10 pb-[12px] lg:pb-[118px] md:pr-[40px] z-[99]">


                 <a href="https://twitter.com/basedvirus">
                   <svg xmlns="http://www.w3.org/2000/svg" className='w-[35px] h-[35px] cursor-pointer' viewBox="0 0 66 66" fill="none">
                      <path d="M61.765 16.5C59.6475 17.4625 57.365 18.095 55 18.3975C57.42 16.94 59.29 14.63 60.17 11.8525C57.8875 13.2275 55.3575 14.19 52.69 14.74C50.5175 12.375 47.465 11 44 11C37.5375 11 32.2575 16.28 32.2575 22.7975C32.2575 23.7325 32.3675 24.64 32.56 25.4925C22.77 24.9975 14.0525 20.295 8.24999 13.1725C7.23249 14.905 6.65499 16.94 6.65499 19.085C6.65499 23.1825 8.71749 26.8125 11.9075 28.875C9.95499 28.875 8.13999 28.325 6.54499 27.5V27.5825C6.54499 33.3025 10.615 38.0875 16.005 39.16C14.2745 39.6336 12.4577 39.6995 10.6975 39.3525C11.4444 41.6968 12.9072 43.7481 14.8803 45.2181C16.8534 46.688 19.2375 47.5027 21.6975 47.5475C17.5275 50.8487 12.3585 52.6331 7.03999 52.6075C6.10499 52.6075 5.16999 52.5525 4.23499 52.4425C9.45999 55.7975 15.675 57.75 22.33 57.75C44 57.75 55.9075 39.765 55.9075 24.1725C55.9075 23.65 55.9075 23.155 55.88 22.6325C58.19 20.9825 60.17 18.8925 61.765 16.5Z" fill="#446193"/>
                   </svg>
                 </a>

                  <a href="https://t.me/basedvirus">
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[35px] h-[35px] cursor-pointer' viewBox="0 0 60 60" fill="none">
                        <g clip-path="url(#clip0_117_10)">
                        <path d="M60 30C60 37.9565 56.8393 45.5871 51.2132 51.2132C45.5871 56.8393 37.9565 60 30 60C22.0435 60 14.4129 56.8393 8.7868 51.2132C3.16071 45.5871 0 37.9565 0 30C0 22.0435 3.16071 14.4129 8.7868 8.7868C14.4129 3.16071 22.0435 0 30 0C37.9565 0 45.5871 3.16071 51.2132 8.7868C56.8393 14.4129 60 22.0435 60 30ZM31.0762 22.1475C28.1587 23.3625 22.3237 25.875 13.5788 29.685C12.1613 30.2475 11.415 30.8025 11.3475 31.3425C11.235 32.2537 12.3788 32.6138 13.935 33.105L14.5913 33.3113C16.1213 33.81 18.1838 34.3913 19.2525 34.4137C20.2275 34.4362 21.3112 34.0387 22.5075 33.2138C30.6787 27.6975 34.8975 24.9112 35.16 24.8512C35.3475 24.8062 35.61 24.7537 35.7825 24.9113C35.9587 25.065 35.94 25.3612 35.9213 25.44C35.8088 25.9237 31.32 30.0938 28.9987 32.2537C28.275 32.9287 27.7612 33.405 27.6562 33.5138C27.425 33.75 27.19 33.9826 26.9513 34.2113C25.5262 35.5838 24.4613 36.6113 27.0075 38.2913C28.2338 39.1013 29.2162 39.765 30.195 40.4325C31.26 41.16 32.325 41.8838 33.705 42.7913C34.0537 43.0163 34.3913 43.26 34.7175 43.4925C35.9588 44.3775 37.08 45.1725 38.4562 45.045C39.2588 44.97 40.0875 44.22 40.5075 41.97C41.5013 36.6562 43.455 25.1475 43.905 20.4037C43.9325 20.0094 43.9161 19.6132 43.8562 19.2225C43.8209 18.9072 43.6683 18.6167 43.4288 18.4088C43.0875 18.1732 42.6808 18.0512 42.2663 18.06C41.1413 18.0788 39.405 18.6825 31.0762 22.1475Z" fill="#446193"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_117_10">
                        <rect width="60" height="60" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                  </a>


                  <a href="https://basedvirus.xyz">
                      <svg xmlns="http://www.w3.org/2000/svg" className='w-[35px] h-[35px] cursor-pointer' viewBox="0 0 60 60" fill="none">
                          <g clip-path="url(#clip0_117_12)">
                          <path d="M50.7937 10.9012C46.9031 9.11575 42.7978 7.84141 38.58 7.11C38.5418 7.10356 38.5025 7.10912 38.4676 7.12591C38.4327 7.14269 38.4038 7.16989 38.385 7.20375C37.8562 8.14125 37.2712 9.3675 36.8625 10.3275C32.316 9.63753 27.6914 9.63753 23.145 10.3275C22.689 9.25807 22.1732 8.21517 21.6 7.20375C21.5807 7.17026 21.5518 7.14338 21.517 7.12664C21.4822 7.10991 21.4431 7.10411 21.405 7.11C17.1862 7.8375 13.08 9.1125 9.19121 10.9012C9.15794 10.9139 9.1301 10.9378 9.11246 10.9687C1.33496 22.59 -0.798788 33.9263 0.247462 45.12C0.251212 45.1725 0.284962 45.225 0.326212 45.2588C4.85518 48.6136 9.92093 51.175 15.3075 52.8338C15.3455 52.8458 15.3864 52.8453 15.4241 52.8325C15.4619 52.8197 15.4946 52.7952 15.5175 52.7625C16.6725 51.1875 17.7 49.5263 18.585 47.7788C18.6034 47.7428 18.6097 47.7018 18.603 47.6619C18.5962 47.622 18.5767 47.5854 18.5475 47.5575C18.5281 47.5392 18.5051 47.5252 18.48 47.5163C16.8643 46.8953 15.2996 46.1493 13.8 45.285C13.7581 45.2613 13.7269 45.2223 13.713 45.1763C13.699 45.1302 13.7033 45.0805 13.725 45.0375C13.7377 45.0096 13.757 44.9851 13.7812 44.9663C14.0962 44.73 14.4112 44.4825 14.7112 44.235C14.7377 44.2137 14.7695 44.2 14.8032 44.1954C14.8369 44.1908 14.8712 44.1954 14.9025 44.2088C24.7237 48.6938 35.355 48.6938 45.0562 44.2088C45.0886 44.1947 45.1242 44.1898 45.1592 44.1944C45.1942 44.199 45.2273 44.213 45.255 44.235C45.555 44.4825 45.87 44.73 46.185 44.9663C46.2105 44.9849 46.231 45.0096 46.2446 45.0381C46.2583 45.0666 46.2647 45.0981 46.2632 45.1297C46.2617 45.1612 46.2524 45.192 46.2361 45.2191C46.2199 45.2462 46.1971 45.2688 46.17 45.285C44.6738 46.1572 43.107 46.9023 41.4862 47.5125C41.4604 47.5219 41.4369 47.5368 41.4174 47.5562C41.398 47.5757 41.3831 47.5992 41.3737 47.625C41.365 47.6501 41.3616 47.6766 41.3635 47.703C41.3654 47.7295 41.3727 47.7552 41.385 47.7788C42.285 49.5225 43.3162 51.1875 44.4487 52.7625C44.4716 52.7952 44.5043 52.8197 44.542 52.8325C44.5798 52.8453 44.6207 52.8458 44.6587 52.8338C50.0542 51.1801 55.1282 48.6184 59.6625 45.2588C59.6852 45.243 59.7041 45.2224 59.7177 45.1984C59.7313 45.1744 59.7394 45.1476 59.7412 45.12C60.9937 32.1788 57.645 20.9363 50.8687 10.9725C50.8619 10.956 50.8517 10.9412 50.8388 10.9289C50.8258 10.9167 50.8105 10.9072 50.7937 10.9012ZM20.0512 38.3025C17.0925 38.3025 14.6587 35.5875 14.6587 32.2575C14.6587 28.9238 17.0475 26.2087 20.0512 26.2087C23.0775 26.2087 25.4887 28.9463 25.4437 32.2575C25.4437 35.5875 23.055 38.3025 20.0512 38.3025ZM39.9862 38.3025C37.0312 38.3025 34.5937 35.5875 34.5937 32.2575C34.5937 28.9238 36.9825 26.2087 39.9862 26.2087C43.0125 26.2087 45.4275 28.9463 45.3787 32.2575C45.3787 35.5875 43.0125 38.3025 39.9862 38.3025Z" fill="#446193"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_117_12">
                          <rect width="60" height="60" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>
                  </a>

            </div> */}
            {/* Right ending */}



        </div>
        {/* SectionOne */}

       <Footer />
    </div>

  )
}
