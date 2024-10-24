"use client";
import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import TabManager from "./Tab";

const Navbar = () => {
  const [page, setPage] = useState("home");
  const [tabs, setTabs] = useState<{ id: number, title: string, content: React.ReactNode }[]>([
    { id: 1, title: "About", content: (<>Hello everyone</>)},
    { id: 2, title: "Contact", content: (<></>) },
  ]);

  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navList}>
          <li
            onDoubleClick={() => setPage("home")}
            className={page == "home" ? styles.navItemActive : styles.navItem}
          >
            /home
          </li>
          <li
            onDoubleClick={() => setPage("about")}
            className={page == "about" ? styles.navItemActive : styles.navItem}
          >
            /about
          </li>
          <li
            onDoubleClick={() => setPage("team")}
            className={page == "team" ? styles.navItemActive : styles.navItem}
          >
            /team
          </li>
          <li
            onDoubleClick={() => setPage("contact")}
            className={page == "contact" ? styles.navItemActive : styles.navItem}
          >
            /contact
          </li>
        </ul>
      </div>

      <TabManager tabs={tabs} setTabs={setTabs} />
    </>
  );
};

export default Navbar;
