import React from "react";
import styles from "./Navigation.module.css";
import { Home } from "../pages/Home";

export const Navigation = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.pages}>
          <ul className={styles.ul}>
            <li>
              <a className={styles.page} href="\home">
                Home
              </a>
            </li>
            <li>
              <a className={styles.page} href="\home">
                About
              </a>
            </li>
            <li>
              <a className={styles.page} href="\home">
                Services
              </a>
            </li>
          </ul>
        </div>
        <button className={styles.contact}>Contact us</button>
      </div>
    </div>
  );
};
