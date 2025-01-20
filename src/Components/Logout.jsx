


const logoutUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You are not logged in.");
        return;
      }
      const response = await fetch("https://backend-bcolar.onrender.com/api/auth/logout", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        localStorage.removeItem("token");
        alert("Successfully logged out!");
        navigate("/");
      } else {
        alert("Error logging out.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  export default  logoutUser;