import React, { useState } from 'react';
import './CallButton.css'; // Import CSS for styling
import './utilities.css';

const CallButton = () => {
  // State to handle hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="btn btn-primary"
      // Set hover state to true on mouse enter and false on mouse leave
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? '📞 (925) 250-8871' : 'Call Me'}
    </button>
  );
};

export default CallButton;
