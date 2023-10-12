import React, {useContext} from 'react';
import { ShopContext } from '../utils/contextShop';
import Top from '../components/Top';
import Copy from '../components/Copy';
import { formattedValue, formattedValueSmall } from '../utils/constants';


export default function Recieved() {

 const {
    nav, 
    setNav, 
    Vaccinator,
 } = useContext(ShopContext);

 const values = Vaccinator;

  return (
    <div className='p-5 w-[100%] flex flex-col md:mt-0 h-screen'>
     <Top nav={nav} setNav={setNav} />

    <div className='flex flex-col items-center gap-10 mt-7'>

       {/* Down */}
       <div className="flex flex-col-reverse md:flex-row md:flex-wrap md:justify-center xl:justify-between gap-5 w-[100%]">
           {/* Ref track */}
           <div className="grow">
              <div className='font-[800] text-[20px] text-[#334462]'>Current Vaccinator</div>

              <div className={`rounded-[10px] border border-[#334462] p-3 w-[100%] bg-[#1E1E1E] ${Vaccinator?.length === 0 && "flex justify-center items-center md:h-44"}`}>
               {Vaccinator?.length !== 0 ?
                   <table className='w-full table-fixed md:table-auto'>
                       <thead>
                           <tr className='text-[#334462] font-light '>
                           <th className="text-start pl-10" >Vacinator</th>
                           <th className="text-center" >Amount</th>
                           </tr>
                       </thead>
                       <tbody className='mt-3'>
                           <tr className='text-center'>
                           <td>
                               <div className="flex items-center gap-2">
                                   <span className="rounded-[100%] bg-[#446193] px-2 py-2">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><g fill="none" stroke="#FFF" stroke-width="1.5"><circle cx="12" cy="6" r="4"/><ellipse cx="12" cy="17" opacity=".5" rx="7" ry="4"/></g></svg>
                                   </span>
                                   <span className='truncate w-[50%] lg:w-[60%] xl:w-[70%]'>
                                       {values[0]}
                                   </span>
                                   <span>
                                       <Copy address={values[0]} />
                                   </span>
                               </div>
                           </td>
                           <td>{formattedValueSmall(values[1])}</td>
                           </tr>
                       </tbody>
                   </table>  
                :
                <>
                 <img src="/empty.png" alt="" className='h-32' />
                 <div className="text-white">No Vaccinator currently</div>               
                </>

                }
       

               </div>

           </div>



       </div>




   </div>

   {/* <Footer /> */}
  </div>
  )
}
