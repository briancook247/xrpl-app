// AccountInfo.js
import React from "react";
import { accountInfo } from "./mockData";

const AccountInfo = () => {
  return (
    <div>
      <h2>Account Information</h2>
      <p>Name: {accountInfo.name}</p>
      <p>Email: {accountInfo.email}</p>
      {/* Add more account-related data */}
    </div>
  );
};

export default AccountInfo;
