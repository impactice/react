import React from 'react';

function Last() {
  const sectionStyle = {
    padding: '20px',
    margin: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  return (
    <section style={sectionStyle}>
      <h2>마지막 한마디</h2>
      <p>읽어주셔서 감사합니다.</p>
    </section>
  );
}

export default Last;
