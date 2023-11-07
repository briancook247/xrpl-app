// connect-source-wallet.jsx
import { useWallet } from "@nice-xrpl/react-xrpl";
import React from "react";

export function ConnectSourceWallet() {
  const { wallet } = useWallet();

  return (
    <div>
      {wallet ? (
        <>
          <h2>Connected Source Wallet</h2>
          <p>Address: {wallet.address}</p>
          {/* Add more wallet information or actions as needed */}
        </>
      ) : (
        <p>No wallet connected. Use the "Create source wallet" button to create or connect a wallet.</p>
      )}
    </div>
  );
}
