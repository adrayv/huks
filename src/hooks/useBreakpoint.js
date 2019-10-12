import { useState, useEffect } from "react";
import { throttle } from "../util";

const getSizeFromWidth = width => {
  if (width <= 320) {
    return "xs";
  } else if (width > 320 && width < 768) {
    return "sm";
  } else if (width >= 768 && width < 1024) {
    return "md";
  } else if (width >= 1024 && width <= 1280) {
    return "lg";
  } else if (width > 1280) {
    return "xl";
  }
};

export default () => {
  const [size, setSize] = useState(getSizeFromWidth(window.innerWidth));
  useEffect(() => {
    const calcSize = throttle(() => {
      setSize(getSizeFromWidth(window.innerWidth));
    });
    window.addEventListener("resize", calcSize);
    return () => {
      window.removeEventListener("resize", calcSize);
    };
  }, []);
  return { breakpoint: size };
};
