import { ChakraProvider} from '@chakra-ui/react';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { bsc, bscTestnet, mainnet, polygon } from 'wagmi/chains';
import Homepage from './homepage';

const chains = [bsc, mainnet, polygon, bscTestnet];
const projectId: string = (import.meta.env.VITE_PROJECT_ID);

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function App() {

  return (
    <>
      <ChakraProvider>
        <WagmiConfig config={wagmiConfig}>
            <Homepage />
        </WagmiConfig>
      </ChakraProvider>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>

  );
}
