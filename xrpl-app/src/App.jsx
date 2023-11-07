// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Market from './Components/Market';
import Account from './Components/Account';
import { Networks, useIsConnected, XRPLClient } from "@nice-xrpl/react-xrpl";


function App() {
  return (
    <Router>
      <div>
      <XRPLClient network={Networks.Testnet}>

        <NavBar />
        <Routes>
          {/* Define the default landing page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/market" element={<Market />} />
        </Routes>
        </XRPLClient>
      </div>
    </Router>
  );
}

export default App;
