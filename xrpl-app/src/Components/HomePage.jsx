import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file

const HomePage = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const offset = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${offset * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Parallax Section */}
      <div className="parallax-wrapper">
        <div ref={parallaxRef} className="parallax">
          {/* Content of your parallax section */}
          <div className="container">
            <h1>Welcome to Our Platform</h1>
            <p>Engage with the XRPL on Web 3.0</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section style={sectionStyle}>
        <div className="container">
          <h2>About</h2>
          <p>This app leverages the XRPL (XRP Ledger) to showcase Web 3.0 capabilities. Users can seamlessly create a wallet, sign in, and interact with the XRP Ledger to mint, burn, and sell NFTs, all within their XRPL wallet account.</p>
        </div>
      </section>

      {/* How to Use Section */}
      <section style={{ ...sectionStyle, backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2>How to Use</h2>
          <p>Get started by creating your XRPL wallet. Sign in to access a suite of tools that enable you to create and manage NFTs directly on the blockchain.</p>
          <Link to="/create-wallet" style={buttonStyle}>Get Started</Link>
        </div>
      </section>

      {/* Market Section */}
      <section style={sectionStyle}>
        <div className="container">
          <h2>NFT Market</h2>
          <p>Explore our NFT marketplace where you can buy, sell, or trade digital assets securely on the XRPL, benefiting from the speed and efficiency of the XRP Ledger.</p>
          <Link to="/market" style={buttonStyle}>Go to Market</Link>
        </div>
      </section>

      {/* Contact Us Section */}
      <section style={{ ...sectionStyle, backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, our team is here to help. Get in touch to learn more about how you can use our platform to your advantage.</p>
          <Link to="/contact" style={buttonStyle}>Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

const sectionStyle = {
  padding: '100px 0',
  textAlign: 'center',
  backgroundColor: '#121212', // Dark theme for sections
  color: '#fff',
};

const buttonStyle = {
  backgroundColor: '#0d6efd', // Bootstrap primary button color for reference
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none', // Remove underline from link
  transition: 'background-color 0.3s',
  margin: '20px 0', // Add some margin to top and bottom
};

export default HomePage;
