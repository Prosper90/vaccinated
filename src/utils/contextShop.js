
import React, { createContext, useEffect, useState } from "react";
import { useContractRead, useContractWrite, useAccount } from 'wagmi';
import { ContractAddress, TAbi } from './constants';



export const ShopContext = createContext('context');



export const ShopContextProvider = (props) => {
  // Load cart data from cookies or use the default cart

  const [nav, setNav] = useState(false);
  const { isConnected, address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [balances, setBalances] = useState([0,0,0]);
  const [refs, Setrefs] = useState([]);
  const [inputAddress, setInputAddress] = useState();
  const [inputAmount, setInputAmount] = useState(10);
  const [errShow, seterrShow] = useState(false);
  const [clickout, setClickout] = useState(false);


    const { 
       data: balancesData,
       isLoading:isBalancesLoading,
       isError:isBalancesError,
      } = useContractRead({
        address: ContractAddress,
        abi: TAbi,
        functionName: 'getBalances',
        account: address
    })



    const {data:RefData, isRefError, isLoading:isRefLoading } = useContractRead({
        address: ContractAddress,
        abi: TAbi,
        functionName: 'getRefs',
        args: [address], // Pass the dataId as an argument to the contract function
        account: address
    });


    const {data:Vaccinator, isError:getVaccinatorError, isLoading:getVaccinatorLoading } = useContractRead({
      address: ContractAddress,
      abi: TAbi,
      functionName: 'getVaccinator',
      account: address
  });
    

    const {data:Bbalance, isLoading:Bbalanceloading} = useContractRead({
      address: ContractAddress,
      abi:  TAbi,
      functionName:'Bbalance',
      account: address
    });

    const { data:VacinnateGoing, isLoading:isLoadingVaccinate, isSuccess:isSuccessVaccinate, write:addRef } = useContractWrite({
      address: ContractAddress,
      abi: TAbi,
      functionName: 'addReferral',
    });



    const addRefferal = async (inputAddress, amount) => {
        console.log(inputAddress, amount, "Add refs  data Added");
        if(!inputAddress) {
          seterrShow(true);
          return ;
        }
        await addRef({ 
          args: [address, inputAddress, amount],
          gasLimit: 1000000,
        });

    }




    //Useeffect
    useEffect(() => {

        if(RefData) {
            Setrefs(Array.from(RefData).reverse())
        }
    
        if(balancesData) {
          console.log(balancesData, "in Here");
          setBalances(balancesData);
        }
    
        // setTimeout(() => {
        //   setClickout(false);
        //   //console.log(RefData, balancesData, Vaccinator, "Logging data two trial");
        // }, 3500);
    
         
        }, [balancesData, clickout])

        const contextValue = { 
            nav,
            setNav,
            addRefferal,
            isLoadingVaccinate,
            setLoading,
            balances,
            RefData,
            inputAddress,
            setInputAddress,
            inputAmount,
            setInputAmount,
            errShow,
            isBalancesLoading,
            isRefLoading,
            Vaccinator,
            VacinnateGoing,
            isSuccessVaccinate,
            clickout,
            setClickout
                    };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
