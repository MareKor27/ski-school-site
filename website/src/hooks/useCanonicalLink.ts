import { useLocation } from "react-router-dom";

export function useCanonicalLink() {
  const location = useLocation();
  return "https://figowski.com" + location.pathname;
}
