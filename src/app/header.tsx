"use client";
import React, { MouseEventHandler, useState } from "react";

interface HeaderProps {
  isMobileNavActive: boolean;
  toggleMobileNav: MouseEventHandler;
}

const Header: React.FC<HeaderProps> = ({
  isMobileNavActive,
  toggleMobileNav,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

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

  return (
    <>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1>
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
                <a href="/" className="active" onClick={handleNavLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" onClick={handleNavLinkClick}>
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
                <ul>
                  <li>
                    <a href="/products/giti" onClick={handleNavLinkClick}>
                      GITI
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavLinkClick}>
                      GT Radial
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={handleNavLinkClick}>
                      Gajah Tunggal
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#" onClick={(e) => handleDropdownClick(e, 2)}>
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#" onClick={(e) => handleDropdownClick(e, 3)}>
                          Deep Dropdown 1
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => handleDropdownClick(e, 4)}>
                          Deep Dropdown 2
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={(e) => handleDropdownClick(e, 5)}>
                          Deep Dropdown 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => handleDropdownClick(e, 6)}>
                      Dropdown 2
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => handleDropdownClick(e, 7)}>
                      Dropdown 3
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => handleDropdownClick(e, 8)}>
                      Dropdown 4
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html" onClick={handleNavLinkClick}>
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
