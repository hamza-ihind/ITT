import React from "react";
import styles from "./About.module.css";
import background from "../assets/background-about.webp";
import img1 from "../assets/about-imgs/Photo.webp";
import img2 from "../assets/about-imgs/Photo-1.webp";
import img3 from "../assets/about-imgs/Photo-2.webp";

export const About = () => {
  return (
    <div className={styles.about}>
      <img className={styles.background} src={background} alt="background" />
      <div className={styles.title}>
        <h1>About</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.section1}>
          <img className={styles.img1} src={img1} alt="img1" />
          <p>
            Chez Infotransit & Transport, nous nous engageons à simplifier et à
            optimiser les processus logistiques et de transport pour les petites
            et moyennes entreprises . Forts de notre expertise et de notre
            compréhension approfondie des défis rencontrés par ces entreprises,
            nous avons développé une plateforme innovante qui leur offre des
            solutions sur mesure, adaptées à leurs besoins spécifiques. Notre
            équipe expérimentée travaille en étroite collaboration avec nos
            clients pour identifier les inefficacités dans leurs opérations
            logistiques et concevoir des stratégies personnalisées pour les
            surmonter. Que ce soit pour gérer les expéditions, optimiser les
            itinéraires ou améliorer la visibilité des stocks, nous sommes là
            pour fournir des solutions pratiques et rentables.
          </p>
        </div>
        <div className={styles.section}>
          <img src={img2} alt="img2" />
          <p>
            Ce qui distingue Infotransit & Transport, c’est notre approche axée
            sur le client et notre engagement à fournir un service exceptionnel.
            Nous comprenons que chaque entreprise a des besoins uniques, c’est
            pourquoi nous mettons un point d’honneur à écouter attentivement nos
            clients et à leur offrir des solutions qui répondent précisément à
            leurs exigences.
          </p>
        </div>
        <div className={`${styles.section} ${styles.except}`}>
          <img src={img3} alt="img3" />
          <p>
            En choisissant Infotransit & Transport comme partenaire pour leurs
            besoins logistiques et de transport, les entreprises peuvent
            s’attendre à une collaboration transparente, à une efficacité
            opérationnelle accrue et à une réduction des coûts. Nous sommes
            fiers de contribuer au succès de nos clients en leur offrant les
            outils et le soutien nécessaires pour prospérer dans un
            environnement commercial dynamique et concurrentiel.
          </p>
        </div>
      </div>
    </div>
  );
};
