import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2025 나를 소개하는 홈페이지</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#333',
  color: 'white',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

export default Footer;
