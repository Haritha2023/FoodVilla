import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    // javascript eventlistener
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  //only one time whenever page loads the eventlistner should be tracked

  return isOnline; //returns true or false
};

export default useOnline;
