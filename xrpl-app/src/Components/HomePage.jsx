import React, { useEffect, useRef } from 'react';

const HomePage = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.backgroundPositionY = `${scrollValue * 0.5}px`; // Adjust the factor for desired speed
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Section 1 with parallax effect */}
      <section
        ref={parallaxRef}
        style={{
          backgroundImage: 'url("/BG1.png")', // Relative path from the root
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          width: '100%',
          height: '1000px', // Set the desired height
          color: '#fff', // Text color for better contrast
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div className="container">
          <h1>Our Mission</h1>
          <p>Free and Easy banking for all</p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2>Our Services</h2>
          <p>Explore our wide range of services designed to meet your business needs.</p>
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={parallaxRef}
        style={{
          backgroundImage: 'url("/BG2.png")', // Relative path from the root
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '500px', // Set the desired height
          color: '#fff', // Text color for better contrast
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div className="container">
          <h2>Why Choose Us</h2>
          <p>Discover why our clients trust us for their business solutions.</p>
        </div>
      </section>

      {/* Section 4 */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '1000px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2>Contact Us</h2>
          <p>Get in touch with us to discuss your project or inquire about our services.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
