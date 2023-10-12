import React, { useState, useContext} from 'react';
import { ShopContext } from '../utils/contextShop';
import Top from '../components/Top';
import Copy from '../components/Copy';
import { formattedValue, formattedValueSmall } from '../utils/constants';

export default function DashboardHome() {
 /* global BigInt */

 const {
    nav, 
    setNav, 
    isLoadingVaccinate, 
    setLoading, 
    addRefferal, 
    balances, 
    RefData,
    inputAddress,
    setInputAddress,
    inputAmount,
    setInputAmount,
    errShow,
    isSuccessVaccinate
 } = useContext(ShopContext);

 const[open, openChoice] = useState(false); //opens the choice selec wallet
const [BAlloc, SetBAlloc] = useState(false); // selects wallet
const [currentPage, setCurrentPage] = useState(1);

 const bal = balances;
 //Pagination
 const itemsPerPage = 5; // Set the number of items to display per page
  // Calculate the total number of pages based on data length and items per page
  const totalPages = Math.ceil(RefData?.length / itemsPerPage);
  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter the data for the current page
  const currentPageData = RefData?.slice(startIndex, endIndex);

  // Function to handle page navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

 


 const toggleB = () => {
    SetBAlloc(!BAlloc);
 }



 return (
   <div className=' p-5 w-[100%] flex flex-col justify-between mt-[35px] md:mt-0 '>
     <Top nav={nav} setNav={setNav} />

    <div className='flex flex-col items-center gap-10 mt-7'>

       {/* Top */}
       {/* Each one */}
       <div className="flex flex-col gap-3 xl:gap-0 md:flex-row md:flex-wrap md:justify-center xl:justify-between w-[100%]">

           <div className="rounded-[10px] border border-[#334462] border-t-[10px] border-t-solid border-t-[#334462] w-[100%] md:w-[300px] h-[128px] px-3 py-3" style={{ 
               background: 'rgba(30, 30, 30, 0.79)',
               boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
             }}>
               
               <div className='text-[13px] font-normal mb-2'>Disease Token</div>

               <div className="flex justify-between">
                       <span className='flex gap-2 items-center' > 
                           <div className="">
                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24l5.07-2.81zM10 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2zm1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01c0 1.86 1.27 3.43 3 3.87v5.57zm2 0v-5.57c1.73-.44 3-2.01 3-3.87c0-.35-.04-.69-.13-1.01L21 8.14V17l-8 4.44z"/></svg>
                           </div>
                           <div className="flex flex-col">
                               <span className="font-bold text-[20px]">
                               { formattedValue(bal[0]) } <small className='text-[12px]' >BVD</small>    
                               </span>
                               <small>$0</small>
                           </div>
                       </span>
                   </div>
           </div>

           <div className="rounded-[10px] border border-[#334462] border-t-[10px] border-t-solid border-t-[#334462] w-[100%] md:w-[300px] h-[128px] px-3 py-3" style={{ 
               background: 'rgba(30, 30, 30, 0.79)',
               boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
             }}>
               
               <div className='text-[13px] font-normal mb-2 flex items-center cursor-pointer relative' onClick={() => openChoice(!open)}>
                 <span> {BAlloc ? "Allocated" : "Vaccine"} Token </span>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#FFF" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg>

                  <div className={`absolute top-[23px] px-3 py-1 bg-[#000] text-[#FFF] rounded ${open ? "block" : "hidden"}`} onClick={() => toggleB()}>
                     {BAlloc ? "Wallet" : "Allocated"}
                  </div>
                </div>

               <div className="flex justify-between">
                       <span className='flex gap-2 items-center' > 
                           <div className="">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24l5.07-2.81zM10 12c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2zm1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01c0 1.86 1.27 3.43 3 3.87v5.57zm2 0v-5.57c1.73-.44 3-2.01 3-3.87c0-.35-.04-.69-.13-1.01L21 8.14V17l-8 4.44z"/></svg>
                           </div> 
                           <div className="flex flex-col">
                               <span className="font-bold text-[20px]">
                                { BAlloc ? formattedValueSmall(bal[3]) : formattedValue(bal[1]) } <small className='text-[12px]' >vaBVD</small>    
                               </span>
                               <small>$0</small>
                           </div>
                       </span>
                       
                   </div>
           </div>

           <div className="rounded-[10px] border border-[#334462] border-t-[10px] border-t-solid border-t-[#334462] w-[100%] md:w-[300px] h-[128px] px-3 py-3 flex flex-col justify-center" style={{ 
               background: 'rgba(30, 30, 30, 0.79)',
               boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
             }}>
               
               <div className='text-[13px] font-normal mb-2'>Total Vaccinated Earned</div>

               <div className="flex justify-between">
                       <span className='flex gap-2 items-center' > 
                           <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="#888888" d="M15 3v16h5V3zm1 11h3v1h-3zm0-3h3v1h-3zM9 3v16h5V3zm1 11h3v1h-3zm0-3h3v1h-3zM4.1 2.3l-4 15.3l4.8 1.3L9 3.5zM2.3 13.1l2.9.8l-.3 1l-2.9-.8zm.7-2.9l2.9.8l-.2 1l-2.9-.8z"/></svg>
                           </div> 
                           <div className="flex flex-col">
                               <span className="font-bold text-[20px]">
                                { formattedValue(bal[2])  } <small className='text-[12px]'>BVD</small>    
                               </span>
                               <small>$0</small>
                           </div>
                       </span>
                       
                   </div>
           </div>



       </div>





       {/* Down */}
       <div className="flex flex-col-reverse md:flex-row md:flex-wrap md:justify-center xl:justify-between gap-5 w-[100%]">
           {/* Ref track */}
           <div className="grow">
              <div className='font-[500] text-[#334462]'>Vaccination record</div>

              <div className={`rounded-[10px] border border-[#334462] p-3 w-[100%] bg-[#1E1E1E] ${RefData?.length === 0 && "flex justify-center items-center md:h-44"}`}>
               {RefData?.length !== 0 ?
                 <>
                   <table className='w-full table-fixed md:table-auto'>
                       <thead>
                           <tr className='text-[#334462] font-light '>
                           <th className="text-start pl-10" >Referrals</th>
                           <th className="text-center" >B Spent</th>
                           <th className="text-center" >Allowed</th>
                           </tr>
                       </thead>
                       <tbody className='mt-3'>
                          {currentPageData?.map((data, index) => (
                            <tr className='text-center' key={index}>
                                <td>
                                    <div className="flex items-center gap-2">
                                        <span className="rounded-[100%] bg-[#446193] px-2 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><g fill="none" stroke="#FFF" stroke-width="1.5"><circle cx="12" cy="6" r="4"/><ellipse cx="12" cy="17" opacity=".5" rx="7" ry="4"/></g></svg>
                                        </span>
                                        <span className='truncate w-[50%] lg:w-[60%] xl:w-[70%]'>
                                            {data._address}
                                        </span>
                                        <span>
                                            <Copy address={data._address} />
                                        </span>
                                    </div>
                                </td>
                                <td>{formattedValue(data.spent)}</td>
                                <td>{formattedValue(data.amount)}</td>
                           </tr>
                          ))}
                       </tbody>
                   </table>
                   {/* Pagination UI */}
                    {totalPages > 1 && (
                        <div className='flex justify-center mt-4'>
                        {Array.from({ length: totalPages }).map((_, page) => (
                            <button
                            key={page}
                            onClick={() => goToPage(page + 1)}
                            className={`${
                                currentPage === page + 1 ? 'bg-[#446193] text-white' : 'text-[#446193]'
                            } px-3 py-1 mx-1 rounded cursor-pointer`}
                            >
                            {page + 1}
                            </button>
                        ))}
                        </div>
                        )}
                 </>
                :
                <>
                 <img src="/empty.png" alt="" className='h-32' />
                 <div className="text-white">No Vaccinated!</div>               
                </>

                }
       

               </div>

           </div>


           {/* bottom */}
           <div className="">
               <div className='font-[500] text-[#334462]'>Vaccinate</div>
               <div className="rounded-[10px] border border-[#334462] w-[100%] h-auto md:w-[300px] px-3 py-10 flex-none grow-0 bg-[#1E1E1E]" >

                   <div className="w-100 flex flex-col gap-[20px] justify-center items-center h-[100%]">
                   
                       <div className="flex justify-center items-center gap-4 w-[100%]">

                           <div className={`bg-[#fff] flex items-center rounded-[5px] py-2 px-2 w-[100%] gap-3 ${errShow && "border-2 border-[red]"}`}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="#000"><path fill-rule="evenodd" d="M14.5 10.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5ZM13.25 13a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0Zm-5-4a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0ZM10 8.75a.25.25 0 1 0 0 .5a.25.25 0 0 0 0-.5Z" clip-rule="evenodd"/><path d="M9 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"/><path fill-rule="evenodd" d="M3.5 1.25a2.25 2.25 0 0 1 2.03 3.22l1.507 1.506a7.593 7.593 0 0 1 2.94-1.488a2.25 2.25 0 1 1 4.018.052c1.072.3 2.053.823 2.89 1.515l.584-.585a2.25 2.25 0 1 1 1.06 1.06l-.584.585a7.876 7.876 0 0 1 1.44 2.638l.115-.003a2.25 2.25 0 1 1-.05 4.5a7.6 7.6 0 0 1-1.9 3.24l.03.03a2.25 2.25 0 1 1-1.06 1.06l-.13-.13a7.587 7.587 0 0 1-2.382 1.066a2.25 2.25 0 0 1-4.05-.068a7.842 7.842 0 0 1-2.263-1.066a.751.751 0 0 1-.115.148l-1.033 1.034a2.25 2.25 0 1 1-1.043-1.078l1.016-1.017a.786.786 0 0 1 .036-.033a7.888 7.888 0 0 1-2.017-3.44a2.25 2.25 0 1 1-.052-4.018a7.593 7.593 0 0 1 1.489-2.941L4.47 5.53a2.25 2.25 0 1 1-.97-4.28Zm.75 2.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm7.864 14.75a6.114 6.114 0 0 0 6.136-6.136v-.052c-.028-3.456-2.856-6.284-6.313-6.312a6.115 6.115 0 0 0-6.187 6.188c.028 3.456 2.856 6.284 6.313 6.312h.051Zm7.636-6.957a.75.75 0 0 1 0 1.414v-1.414ZM19.5 3.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5Zm-16 7.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Zm14.3 8.3a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0Zm-13.3 1.7a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM11.25 3.5a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0Z" clip-rule="evenodd"/></g></svg>
                               <input 
                                  type="text" 
                                  className='outline-none bg-transparent text-[#000] w-[100%] ' 
                                  placeholder='Vaccinate Address'
                                  value={inputAddress}
                                  onChange={(e) =>  setInputAddress(e.target.value)}
                                  />
                           </div>
       
                           <select 
                             className="rounded-[5px] bg-[#000] border border-[#446193] text-[12px] h-[35px]"
                             onChange={(e) => setInputAmount(e.target.value)}
                             value={inputAmount} // Use the value prop for the selected option
                             >
                                   <option selected value={10} className='bg-transparent'>10 vaBVD</option>
                                   <option value={20} className='bg-transparent'>20 vaBVD</option>
                                   <option value={30} className='bg-transparent'>30 vaBVD</option>
                           </select>

                       </div>

                       <button 
                         className={`outline-none border-none ${isLoadingVaccinate ? " flex justify-center items-center py-[5px] px-[25px]" : "py-[10px] px-[25px]" } bg-[#446193] rounded-[4px] w-[100%]`} 
                         onClick={() => addRefferal(inputAddress, inputAmount)}>
                           {
                               isLoadingVaccinate && !isSuccessVaccinate ?

                               <div className="loader">
                                   <div className="bar1" />
                                   <div className="bar2" />
                                   <div className="bar3" />
                                   <div className="bar4" />
                                   <div className="bar5" />
                                   <div className="bar6" />
                                   <div className="bar7" />
                                   <div className="bar8" />
                                   <div className="bar9" />
                                   <div className="bar10" />
                                   <div className="bar11" />
                                   <div className="bar12" />
                               </div>

                               :
                               <span>Vaccinate</span>
                           }
                       </button>

                   </div>
               
               
               </div>
           </div>


       </div>




   </div>

   {/* <Footer /> */}
  </div>
 )
}
