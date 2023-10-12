
import abi from "./Abi.json";
import BigNumber from "bignumber.js";

export const ContractAddress = "0x1BA24B0A9F4DbD7baF99C2e430cfb7FcFB135A24";
//0xb6Ef22c4a584AD7fd738c3D5DA829Cf8B6FF8A73
//0x0dBbE23fBB1fd01Df964f9CdC80470e0E6b2bD00

//mainnet 0xe50FB8908c40955A3c28e30A585DDac96e375a58

export const TAbi = abi;

export const formattedValue = (data) => {
   const bigNum = BigNumber(data);
   // Divide by 1e18 to adjust the scale
   const regularNum = Math.round((Number(bigNum)) / 10 ** 18);
   // Use toLocaleString to format the number with commas
   return regularNum.toLocaleString();
}

 export const formattedValueSmall = (data) => {
    // Multiply the data by 10^decimals, then convert to BigInt
    const converted = BigNumber(data);
    return Number(converted);
  };


 export const calculateDollar = () => {

 }