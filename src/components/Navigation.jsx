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
              <a className={styles.page} href="\about">
                About
              </a>
            </li>
            <li>
              <a className={styles.except} href="\home">
                Services
              </a>
            </li>
          </ul>
        </div>
        <button className={styles.contact}>
          <a href="#contact">Contact us</a>
        </button>
      </div>
    </div>
  );
};
