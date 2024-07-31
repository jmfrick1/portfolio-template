import React, { useState } from 'react';
import '../styles/components/Popup.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button className="btn" onClick={handleTogglePopup}>Show Popup</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleTogglePopup}>&times;</span>
            <h2>Popup Title</h2>
            <p>This is a popup message.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
