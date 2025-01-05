import React, { useState, useEffect } from "react";

function AlertComponent({ altertType, alertMessage }) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      {showAlert && (
        <div
          className={`fixed top-0 left-1/2 transform mt-20 mr-5 p-4 w-96 max-wsm bg-green-100 border border-green-400 
        text-green-700 shadow-lg rounded ${
          showAlert ? "animate-slide-in-from-top" : "animate-slide-out-to-top"
        }`}
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">Your action was successful.</span>
        </div>
      )}
    </div>
  );
}

export default AlertComponent;
