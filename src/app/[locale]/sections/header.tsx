"use client";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import logoImg from "../assets/img/logo.png";
import Image from "next/image";

interface HeaderProps {
  isMobileNavActive: boolean;
  toggleMobileNav: MouseEventHandler;
}

const Header: React.FC<HeaderProps> = ({
  isMobileNavActive,
  toggleMobileNav,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth > 768 ? 100 : 50;
      if (window.scrollY > scrollThreshold) {
        headerRef.current?.classList.add("header-scrolled");
      } else {
        headerRef.current?.classList.remove("header-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const hash = event.currentTarget.hash;
    if (hash && document.querySelector(hash)) {
      if (isMobileNavActive) {
        toggleMobileNav(event);
      }
    }
  };

  const handleDropdownClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    event.preventDefault();
    setActiveDropdown(index === activeDropdown ? null : index);
  };

  const pathname = usePathname();

  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center"
        ref={headerRef}
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <Image
              src={logoImg.src}
              alt=""
              width={logoImg.width}
              height={logoImg.height}
              className="header-logo-img"
            />
            <h1 className="ms-2">
              SJMT<span>.</span>
            </h1>
          </a>

          <i
            onClick={toggleMobileNav}
            className={`mobile-nav-toggle mobile-nav-show bi bi-list ${
              isMobileNavActive ? "d-none" : ""
            }`}
          ></i>
          <i
            onClick={toggleMobileNav}
            className={`mobile-nav-toggle mobile-nav-hide bi bi-x ${
              isMobileNavActive ? "" : "d-none"
            }`}
          ></i>
          <nav
            id="navbar"
            className={`navbar ${isMobileNavActive ? "navbar-mobile" : ""}`}
          >
            <ul>
              <li>
                <a
                  href="/"
                  className={pathname === "/" ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={pathname === "/about" ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  About
                </a>
              </li>
              <li
                className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}
              >
                <a href="#" onClick={(e) => handleDropdownClick(e, 1)}>
                  <span>Products</span>{" "}
                  <i
                    className={`bi ${
                      activeDropdown === 1 ? "bi-chevron-up" : "bi-chevron-down"
                    } dropdown-indicator`}
                  ></i>
                </a>
                <ul className={activeDropdown === 1 ? "dropdown-active" : ""}>
                  <li>
                    <a href="/products/giti" onClick={handleNavLinkClick}>
                      GITI
                    </a>
                  </li>
                  <li>
                    <a href="/products/gtradial" onClick={handleNavLinkClick}>
                      GT Radial
                    </a>
                  </li>
                  <li>
                    <a href="/products/gt" onClick={handleNavLinkClick}>
                      GT
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/search"
                  className={pathname === "/search" ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  Search Products
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className={pathname === "/career" ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={pathname === "/contact" ? "active" : ""}
                  onClick={handleNavLinkClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
