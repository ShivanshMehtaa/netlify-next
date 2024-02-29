"use client";

import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  { id: 1, link: "/", caption: "Home" },
  { id: 2, link: "/about", caption: "About" },
  { id: 3, link: "/services", caption: "Services" },
  { id: 4, link: "/portfolio", caption: "Portfolio" },
  { id: 5, link: "/contact", caption: "Contact" },
];

const Footer = () => {
  const pathname = usePathname;
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <Link href="/" className={styles.footerLogo}>
          SHIVANSH MEHTA
        </Link>
          <ul className={styles.footerNavItems}>
            {data.map(({ id, link, caption }) => 
              <li key={id}>
                <Link href={link} className={pathname === link ? "active" : ""}>
                  {caption}
                </Link>
              </li>
            )}
          </ul>
      </div>
      <small className={styles.footerCopyright}>
        &copy; 2024 Shivansh Mehta. Designed by me using NextJS 14
      </small>
    </footer>
  );
};

export default Footer;
