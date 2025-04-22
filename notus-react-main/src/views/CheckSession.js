import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const SessionCheck = () => {
  const history = useHistory();
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/v1/session", {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 401 && !sessionExpired) {
          setSessionExpired(true);
          alert("Session expired! Please log in again.");
          sessionStorage.clear(); // Clear stored session
          history.push("/auth/login");
        }
      } catch (error) {
        console.error("Session check failed:", error);
      }
    };

    // Check session every 30 seconds
    const interval = setInterval(checkSession, 30000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [history, sessionExpired]);

  return null;
};

export default SessionCheck;
