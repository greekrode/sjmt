"use client"
import { useState, useEffect, useRef } from "react";

const useScrollAndNav = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const scrollTopRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        scrollTopRef.current?.classList.add("active");
      } else {
        scrollTopRef.current?.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return {
    isMobileNavActive,
    scrollTopRef,
    handleScrollTopClick,
    toggleMobileNav,
  };
};

export default useScrollAndNav;
