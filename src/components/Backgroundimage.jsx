import React from 'react';

// Function to create a background image component
const BackgroundImage = ({ imageUrl, children, className = '', ...props }) => {
  return (
    <div
      className={`w-full h-screen bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
