"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  return null;
};

export const JSLoader = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
};

export const Preloader = () => {
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    };

    if (
      document.readyState === "interactive" ||
      document.readyState === "complete"
    ) {
      // If the document has finished loading, run handleLoad immediately
      handleLoad();
    } else {
      // Otherwise, set up the event listener
      document.addEventListener("DOMContentLoaded", handleLoad);

      // Cleanup
      return () => {
        document.removeEventListener("DOMContentLoaded", handleLoad);
      };
    }
  }, []);

  return <div id="preloader"></div>;
};
