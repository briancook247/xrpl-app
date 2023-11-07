// Account.js
import React from "react";
import { Networks, useIsConnected, XRPLClient } from "@nice-xrpl/react-xrpl";
import { CreateSourceWallet } from "../XRPL/create-source-wallet";
import { SourceWallet } from "../XRPL/source-wallet";


import AccountInfo from "./sub/AccountInfo";

const Account = () => {
  const isConnected = useIsConnected();

  return (
    <div>
      <h1>Account Page</h1>
      <AccountInfo />
      {/* Add other sub-components and content */}
      <div className="connected-status">Connected: {isConnected ? "Yes" : "No"}</div>
      <section id="source-wallet" className="section">
        <div className="section-content">
          <CreateSourceWallet>
            <SourceWallet />
          </CreateSourceWallet>
        </div>
      </section>
      
    </div>
  );
};

export default Account;
