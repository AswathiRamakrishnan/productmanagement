import React from 'react';

const Hero = () => (
  <section style={{textAlign: 'center',
    padding: '100px 20px',
    backgroundSize: 'cover',
    color: 'white'}} className="hero">

    <button style={{padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#ff6347',
    color: 'white',
    border: 'none',
    cursor: 'pointer'}}
    className="cta-button">Shop Now</button>
  </section>
);

export default Hero;
