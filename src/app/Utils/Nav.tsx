// components/Nav.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="font-sans fixed top-0 left-0 w-full bg-white text-primary transition-all duration-300 z-10 px-10 p-2 md:py-0 border-b border-gray-300">
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          <a
            href="/"
            className="font-bold mr-5 flex items-center justify-center text-2xl"
          >
            <div className="w-20 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover object-center"
                src="/Lead Invest Logo-1_page-0001.jpg"
                alt="logo"
              />
            </div>
          </a>
          <nav className="hidden md:flex md:items-center md:gap-3">
            <NavItem navItem="About" url="/About" />
            <NavItem navItem="Discussion Board" url="/discussion" />
            <NavItem navItem="Groups" url="/Groups" />
            <NavItem navItem="News" url="News" />
            <NavItem navItem="Referrals" url="/Referrals" />
            <NavItem navItem="Update" url="/Updates" />
          </nav>
        </div>

        <nav className="flex items-center gap-3 md:gap-3">
          <Link href="/auth/login" className="text-md hidden md:inline">
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="text-sm rounded p-3 hidden md:inline bg-primary text-white"
          >
            Sign Up
          </Link>
          <button
            ref={buttonRef}
            className="text-sm rounded p-3 inline md:hidden bg-primary text-white"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
        </nav>
      </div>

      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-white flex flex-col my-2 p-4 space-y-2 transition-all duration-500 overflow-y-scroll no-scrollbar ${
          isMobileMenuOpen
            ? "max-h-[50vh] opacity-100 block"
            : "max-h-0 opacity-0 hidden "
        }`}
      >
        <NavItem navItem="About" url="/About" />
        <NavItem navItem="Discussion Board" url="/discussion" />
        <NavItem navItem="Groups" url="/Groups" />
        <NavItem navItem="News" url="News" />
        <NavItem navItem="Referrals" url="/Referrals" />
        <NavItem navItem="Update" url="/Updates" />
        <div className="flex flex-col space-y-2">
          <Link href="/auth/login" className="mb-2 text-md">
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="mb-2 text-sm rounded p-3 bg-primary text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
