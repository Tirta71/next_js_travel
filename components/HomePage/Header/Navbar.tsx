"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // This is the new API from Next.js 13+ to get the pathname

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Destination", path: "/destination" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div className="navbar-default-white navbar-fixed-top">
      <div className="container-fluid m-5-hor">
        <div className="row">
          {/* menu mobile display */}
          <button
            className="navbar-toggle"
            data-target=".navbar-collapse"
            data-toggle="collapse"
          >
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
          </button>
          {/* logo */}
          <Link href="/" legacyBehavior>
            <a className="navbar-brand white">
              <img className="white" alt="logo" src="/img/Traveloki.png" />
              <img className="black" alt="logo" src="/img/Traveloki.png" />
            </a>
          </Link>
          {/* logo end */}
          {/* mainmenu start */}
          <div className="white menu-init" id="main-menu">
            <nav id="menu-center">
              <ul>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} legacyBehavior>
                      <a className={currentPath === item.path ? "actived" : ""}>
                        {item.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* mainmenu end */}
        </div>
      </div>
      {/* container */}
    </div>
  );
};

export default Navbar;
