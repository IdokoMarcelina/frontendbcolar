import React, { useEffect, useState } from "react";


const LastSeen = () => {

    const [lastSeen, setLastSeen] = useState("");

    // Format the date for display
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString(); // Adjust formatting as needed
    };
  
    // Load last seen on page load
    useEffect(() => {
      const savedLastSeen = localStorage.getItem("lastSeen");
      if (savedLastSeen) {
        setLastSeen(formatDate(savedLastSeen));
      }
    }, []);
  
    // Update last seen on unmount or tab close
    useEffect(() => {
      const updateLastSeen = () => {
        const currentTime = new Date().toISOString();
        localStorage.setItem("lastSeen", currentTime);
      };
  
      // Handle tab close or navigation
      window.addEventListener("beforeunload", updateLastSeen);
  
      // Cleanup
      return () => {
        updateLastSeen();
        window.removeEventListener("beforeunload", updateLastSeen);
      };
    }, []);

  return (
    <div>
      {lastSeen && <p>Last seen: {lastSeen}</p>}
    </div>
  )
}

export default LastSeen