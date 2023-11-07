// MarketItems.js
import React from "react";
import { marketItems } from "./mockData";

const MarketItems = () => {
  return (
    <div>
      <h2>Marketplace</h2>
      <ul>
        {marketItems.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <p>Price: ${item.price}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketItems;
