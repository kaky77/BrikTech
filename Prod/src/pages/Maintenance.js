import React from 'react';
import BarreNavig from "../composants/Navbar";
import MaintenanceImage from "../images/Main_page.jpg";


function Maintenance() {
  return (
    <div 
      className="content vh-100 overflow-hidden"
      style={{
        backgroundImage: `url(${MaintenanceImage})`,
        backgroundSize: 'contain', // L'image sera entièrement visible, mais peut laisser des espaces vides
        backgroundPosition: 'center',  // Centrer l'image
        backgroundRepeat: 'no-repeat',  // Ne pas répéter l'image
      }}
    >
      <div>
        <BarreNavig />
      </div>
    </div>
  );
}

export default Maintenance;