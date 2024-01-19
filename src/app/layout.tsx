"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { AOSInit, JSLoader, Preloader } from "./_app";
import "./assets/css/globals.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import { inter, open_sans, roboto, work_sans } from "./fonts";
import Footer from "./footer";
import Header from "./header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <html
      lang="en"
      className={`${inter.className} ${roboto.className} ${open_sans.className} ${work_sans.className}`}
    >
      <body className={isMobileNavActive ? "mobile-nav-active" : ""}>
        <Head>
          <title>SJMT</title>
          <meta property="og:title" content="SJMT" key="title" />
        </Head>
        <Header
          isMobileNavActive={isMobileNavActive}
          toggleMobileNav={toggleMobileNav}
        />
        <main id="main">{children}</main>
        <Footer />
        <AOSInit />
        <JSLoader />
        <Preloader />
        <a
          href="#"
          ref={scrollTopRef}
          onClick={handleScrollTopClick}
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
