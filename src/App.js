
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Protected from "./components/Protected";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bscTestnet, bsc, base } from 'wagmi/chains';
import Home from "./Pages/Home";
import Token from "./Pages/Token";
import Tax from "./Pages/Tax";
import Mechanism from "./Pages/Mechanism";
import DashboardHome from "./Pages/DashboardHome";
import Refferals from "./Pages/Refferals";
import Recieved from "./Pages/Recieved";
import { ShopContextProvider } from "./utils/contextShop";



function App() {

  const chains = [base]
  const projectId = '094f792bdb976987a70ebccdc0f7f7d1'

  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains)

 // const { isConnected } = useAccount();
 //const isConnected = false;
  //const [address, setAddress] = useState(false);

  useEffect(() => {

  }, [])
  

  return (
    <>
     <WagmiConfig config={wagmiConfig}>
     <ShopContextProvider >
     <div className="bg-[#1E1E1E] relative bg-center bg-cover bg-no-repeat h-[100%] " style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(/backgroundPonzi.svg)`}}>
        <div className="absolute w-0 xl:w-[500px] h-[500px] top-[0] left-[32%] z-[99]" style={{
          borderRadius: '500px',
          background: 'rgba(51, 68, 98, 0.73)',
          filter: "blur(150px)"
        }}></div>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/token" element={ <Token /> } />
            <Route path="/how" element={ <Mechanism /> } />
            <Route path="/dashboard" element={
                   <Protected component={DashboardHome} /> 
                 } />
            <Route path="/vaBVDRecieved" element={ 
                    <Protected component={Recieved} />
                  } />
            <Route path="/Refferals" element={
                   <Protected component={Refferals} /> 
                  } />
        </Routes>
        {/* <div className="absolute w-[100%] md:w-[200px] h-[200px] bottom-[0] right-[0] z-[99]" style={{
          borderRadius: '840px',
          background: 'rgba(51, 68, 98, 0.73)',
          filter: "blur(50px)"
        }}></div> */}
      </div>
      </ShopContextProvider>
      </WagmiConfig>
        <Web3Modal 
        projectId={projectId} 
        ethereumClient={ethereumClient}
        themeVariables={{
        '--w3m-font-family': 'Jost, sans-serif',
        '--w3m-z-index': '9999',
        '--w3m-accent-color': '#1E1E1E',
        '--w3m-background-color': '#446193',
        '--w3m-border': '1px solid #446193',
        '--w3m-background-border-radius': '10px',
        '--w3m-container-border-radius': '10px',
        '--w3m-wallet-icon-border-radius': '10px'
        }}
        />
    </>
  );
}

export default App;
