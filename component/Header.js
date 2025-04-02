import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>나를 소개합니다</h1>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

export default Header;
