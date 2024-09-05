import React from 'react';

const Maps = ({ show, handleClose }) => {
  return (
    // Modal background overlay, visible only if 'show' is true
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${show ? 'block' : 'hidden'}`}
    >
      {/* Modal content */}
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        {/* Modal header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-lg font-semibold">Crowned Naturally Location</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            &times; {/* Close button using '×' character */}
          </button>
        </div>
        
        {/* Modal body */}
        <div className="p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.320113666929!2d-73.92855098799846!3d40.6448734712846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ca3171e5807%3A0x9fe4df3d5641af74!2s5321%20Clarendon%20Rd%2C%20Brooklyn%2C%20NY%2011203%2C%20USA!5e0!3m2!1sen!2sjm!4v1722523148099!5m2!1sen!2sjm"
            width="100%"
            height="300"
            className="border-0 w-full h-56"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        {/* Modal footer */}
        <div className="flex justify-end p-4 border-t border-gray-300">
          <button
            onClick={handleClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Maps;
