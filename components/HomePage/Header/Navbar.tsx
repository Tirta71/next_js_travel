/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // This is the new API from Next.js 13+ to get the pathname

type NavItem = {
  label: string;
  path: string;
  requiresAuth?: boolean; // Menambahkan properti baru untuk item yang memerlukan autentikasi
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Destination", path: "/destination" },
  { label: "Booking", path: "/my-booking", requiresAuth: true },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div className="navbar-default-white navbar-fixed-top">
      <div className="container-fluid m-5-hor">
        <div className="row">
          <button
            className="navbar-toggle"
            data-target=".navbar-collapse"
            data-toggle="collapse"
          >
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
            <span className="icon icon-bar" />
          </button>

          <Link href="/" legacyBehavior>
            <a className="navbar-brand white">
              <img className="white" alt="logo" src="/img/Traveloki.png" />
              <img className="black" alt="logo" src="/img/Traveloki.png" />
            </a>
          </Link>

          <div className="white menu-init" id="main-menu">
            <nav id="menu-center">
              <ul>
                {navItems
                  .filter((item) => !item.requiresAuth || isLoggedIn)
                  .map((item) => (
                    <li key={item.path}>
                      <Link href={item.path} legacyBehavior>
                        <a
                          className={currentPath === item.path ? "actived" : ""}
                        >
                          {item.label}
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
