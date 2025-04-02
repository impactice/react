import React from 'react';

function Introduction() {
  return (
    <section style={sectionStyle}>
      <h2>안녕하세요!</h2>
      <p>저는 정원희입니다. </p>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
  margin: '20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default Introduction;
