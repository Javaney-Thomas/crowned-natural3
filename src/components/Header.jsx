// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header
//         <ul>
//             <h2>location</h2>
//             <h2>phone</h2>
//             <h2>email</h2>
//             <h2>location</h2>
//         </ul>
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF } from 'react-icons/fa'; // Using React Icons for consistent styling and lighter footprint
import Maps from '../components/Maps';

const Header = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMapClick = () => {
    setShowMap(true);
  };

  const handleClose = () => {
    setShowMap(false);
  };

  return (
    <div className="flex justify-between items-center bg-black text-white p-4 sticky top-0 z-50">
      {/* Address Section */}
      <div className="flex items-center cursor-pointer" onClick={handleMapClick}>
        <FaMapMarkerAlt className="text-yellow-400 mr-2" />
        <h2 className="text-sm font-semibold">5321 Clarendon Rd, Brooklyn, NY 11203</h2>
      </div>
      
      {/* Contact Section */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <FaPhoneAlt className="text-yellow-400 mr-2" />
          <a href="tel:718-766-8819" className="text-sm font-semibold hover:underline">718-766-8819</a>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-yellow-400 mr-2" />
          <a href="mailto:crownednaturally@gmail.com" className="text-sm font-semibold hover:underline">crownednaturally@gmail.com</a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex items-center space-x-4">
        <a href="https://www.instagram.com/crownednaturally" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform">
          <FaInstagram className="text-yellow-400 w-6 h-6" />
        </a>
        <a href="https://www.facebook.com/crownednaturally" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform">
          <FaFacebookF className="text-yellow-400 w-6 h-6" />
        </a>
        <button onClick={() => window.open("https://www.styleseat.com/m/v/MissQ2u", "_blank")} className="bg-white text-black rounded-full px-4 py-2 hover:scale-110 transition transform">
          StyleSeat
        </button>
      </div>
      
      {/* Map Modal */}
      <Maps show={showMap} handleClose={handleClose} />
    </div>
  );
}

export default Header;
