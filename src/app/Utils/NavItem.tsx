import React from "react";
import Link from 'next/link';

interface NavItemProps {
  isScrolled?: boolean;
  scrollEffect?: boolean;
  navItem: string;
  url: string;
}

const NavItem: React.FC<NavItemProps> = ({ isScrolled, scrollEffect, navItem, url }) => {
  return (
      <Link href={url}
        className={`text-md font-normal p-5 px-2 transition-all ease-out duration-500 hover:border-primary ${
          scrollEffect
            ? isScrolled
              ? "text-primary border-b-4 border-white hover:border-b-4"
              : "text-gray-50 border-b-4 border-primary hover:border-b-4"
            : "text-primary border-b-4 border-white hover:border-b-4"
        }`}
      >
        {navItem}
      </Link>
  );
};

export default NavItem;
