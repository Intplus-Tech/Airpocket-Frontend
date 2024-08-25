import { useEffect } from "react";

export function useScrolltop() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
}
