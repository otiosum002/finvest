import React from 'react';

const GoogleFormEmbed = () => {
  return (
    <div className="py-20">
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc0TzVAhF0pGD3wc6T5O8NtDBPS884SB3M94Xb9Efk9rsURVQ/viewform?embedded=true"
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            }}
            title="Google Form"
        >
            Loading…
        </iframe>
        </div>
    </div>
  );
};

export default GoogleFormEmbed;
