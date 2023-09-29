import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
const Home: NextPage = () => {

  return (
    <div className={styles.header}>
          <img src="logo.svg" className={styles.logo} alt="logo" />
        <div className={styles.container}>
          <main className={styles.main}>
            <p className={styles.title}>
              Explore <code>Tunity</code>, the MarketPlays for Independent Artists
            </p>
              <a>
                First,
                Create Wallet
              </a>
            <div className={styles.connect}>
              <ConnectWallet/>
                <Web3Button
                  contractAddress="0x369c95D0dd87bB3ba79E7E7562F89a9Ba6F817B6"
                  action={(contract) => contract.erc721.claim(1)}
                    >Claim</Web3Button>
            </div>
              <a
                className={styles.link}
                href="http://localhost:3001"
                target=""
                rel="noopener noreferrer"
                >
              Then,
              Enter Tunity
            </a>
        </main>
      </div>
    </div>
  );
}

export default Home;
