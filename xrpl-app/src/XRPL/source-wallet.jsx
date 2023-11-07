import { SendXRP } from "./wallet-ui/send-xrp";
import { WalletBalance } from "./wallet-ui/wallet-balance";
import { WalletInfo } from "./wallet-ui/wallet-info";
import { WalletSeed } from "./wallet-ui/wallet-seed";
import { MintNFT } from "./wallet-ui/mint-nft";
import { BurnNFT } from "./wallet-ui/burn-nft";
import { ShowNFTs } from "./wallet-ui/show-nfts";



export function SourceWallet() {
  return (
    <div className="Wallet">
      <div className="WalletRow header">Source Wallet</div>
      <WalletSeed />
      <WalletInfo />
      <WalletBalance />
      <SendXRP />
      <MintNFT />
      <BurnNFT />
      <ShowNFTs />
    </div>
  );
}
