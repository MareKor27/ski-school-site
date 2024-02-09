import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import useScroll from "~/hooks/useScroll";

const ScrollToTop = () => {
  const { scrollToTop } = useScroll();
  const { pathname } = useLocation();

  useLayoutEffect(scrollToTop, [pathname]);

  return null;
};

export default ScrollToTop;
