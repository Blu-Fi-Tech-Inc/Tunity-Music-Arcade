import type { AppProps } from "next/app";
import { ThirdwebProvider, localWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        localWallet()
      ]}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerURL: "https://api.defender.openzeppelin.com/autotasks/80d3c174-0105-40bf-ad62-3f0248c040ce/runs/webhook/f117d77b-a1ed-4931-a497-3f2bc0d75a9f/315JNNhzQHyVHjy83wb9mG"
          }
        }
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
