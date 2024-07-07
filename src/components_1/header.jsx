import React from 'react';
const Header = () => (
  <header style={{display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#222',
    color: 'white'}}className="header">
    <div style={{fontSize: '1.5em',
    fontWeight: 'bold'}} className="logo">Products</div>
      
  </header>
);

export default Header;