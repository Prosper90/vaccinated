import React from 'react';
import Home from '../Pages/Home';
import { useAccount } from 'wagmi';
import Layout from './Layout';



export default function Protected({ component: Component }) {
  
    const { isConnected } = useAccount();

  return  isConnected && <Layout> <Component /> </Layout>; 
}
