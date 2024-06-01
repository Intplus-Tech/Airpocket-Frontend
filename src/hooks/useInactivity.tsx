import { clearStorage } from "@/utils/locaStorage";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const EVENTS: string[] = ["mousemove", "keydown", "click"]; // Add more events as needed

function useInactivity(timeout: number): boolean {
  const [authenticated, setAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem("user");
  });

  useEffect(() => {
    if (!authenticated) return;
    let activityTimer: ReturnType<typeof setTimeout>;

    const resetActivityTimer = () => {
      clearTimeout(activityTimer);
      activityTimer = setTimeout(() => {
        setAuthenticated(false);
        clearStorage(); // C
        window.location.href = "/"; // Redirect to login page
      }, timeout);
    };

    const handleActivity = () => {
      resetActivityTimer();
    };

    const setupListeners = () => {
      EVENTS.forEach((event) => {
        window.addEventListener(event, handleActivity);
      });
    };

    setupListeners();
    resetActivityTimer(); // Initial setup

    return () => {
      clearTimeout(activityTimer);
      EVENTS.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [timeout, redirect]);

  return authenticated;
}

export default useInactivity;
