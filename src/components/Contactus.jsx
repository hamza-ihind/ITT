import React from "react";
import styles from "./Contactus.module.css";
import background from "../assets/Rectanglegradient.webp";
export const Contactus = () => {
  return (
    <div className={styles.contactus}>
      <img
        className={styles.background}
        src={background}
        alt="gradient rectangle"
      />
      <div className={styles.form}>
        <div className={styles.ticket}>
          <p>Contact</p>
        </div>
        <h2>Get in touch with us</h2>
        <p className={styles.comment}>
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value.
        </p>
        <div className={styles.content}>
          <div className={styles.data}>
            <input
              className={styles.input}
              type="text"
              placeholder="Nom Et Prénom*"
            />
            <input className={styles.input} type="email" placeholder="Email*" />
            <input
              className={styles.input}
              type="text"
              placeholder="Numéro De Téléphone*"
            />
            <input className={styles.input} type="text" placeholder="Ville*" />
          </div>
          <textarea
            className={styles.message}
            type="text"
            placeholder="Message"
            maxLength={5}
          />
        </div>
        <button type="submit">Envoyer le message</button>
      </div>
    </div>
  );
};
