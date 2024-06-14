import { clearStorage } from "@/utils/locaStorage";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const EVENTS: string[] = ["mousemove", "keydown", "click"]; // Add more events as needed

function useInactivity(timeout: number): boolean {
  const [authenticated, setAuthenticated] = useState<any>(() => {
    return localStorage.getItem("user");
  });

  useEffect(() => {
    if (!authenticated) return;
    let activityTimer: ReturnType<typeof setTimeout>;

    const resetActivityTimer = () => {
      clearTimeout(activityTimer);
      activityTimer = setTimeout(() => {
        setAuthenticated(false);
        clearStorage(); // C
        redirect("/");
        window.location.href = "/";
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
