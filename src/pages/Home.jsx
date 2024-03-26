import React from "react";
import styles from "./Home.module.css";
import { Contactus } from "../components/Contactus";
import background from "../assets/background-home.webp";

export const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.background} src={background} alt="background" />
      <div className={styles.header}>
        <header className={styles.container}>
          <h1>
            Your Gateway to
            <br /> any Destination in
            <br /> the World
          </h1>
          <p>
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
          </p>
          <button className={styles.contactus}>Contact us</button>
        </header>
        <div className={styles.about}>
          <div className={styles.Title}>
            <div className={styles.ticket}>
              <p>who are we</p>
            </div>
            <h2>Safe & Reliable Cargo Solutions</h2>
          </div>
          <p>
            Chez Infotransit & Transport, nous nous engageons à simplifier et à
            optimiser les processus logistiques et de transport pour les petites
            et moyennes entreprises . Avec une expertise approfondie et une
            compréhension des défis spécifiques rencontrés par ces entreprises,
            nous avons développé une plateforme innovante offrant des solutions
            sur mesure adaptées à leurs besoins uniques.
          </p>
        </div>
        <div className={styles.services}>
          <div className={styles.about}>
            <div className={styles.Title}>
              <div className={styles.ticket}>
                <p>Nos Services</p>
              </div>
              <h2>Safe & Reliable Cargo Solutions</h2>
            </div>
            <p>
              Chez Infotransit & Transport, nous nous engageons à simplifier et
              à optimiser les processus logistiques et de transport pour les
              petites et moyennes entreprises . Avec une expertise approfondie
              et une compréhension des défis spécifiques rencontrés par ces
              entreprises, nous avons développé une plateforme innovante offrant
              des solutions sur mesure adaptées à leurs besoins uniques.
            </p>
          </div>
        </div>
      </div>
      <Contactus />
    </div>
  );
};
