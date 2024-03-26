import React from "react";
import styles from "./Contactus.module.css";
import background from "../assets/Rectanglegradient.webp";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// export const Contactus = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_glzuakb", "template_s28ks1r", form.current, {
//         publicKey: "8akmlbsN9emIAUjEx",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };
//   return (
//     <div id="contact" className={styles.contactus}>
//       <img
//         className={styles.background}
//         src={background}
//         alt="gradient rectangle"
//       />
//       <div className={styles.form}>
//         <div className={styles.ticket}>
//           <p>Contact</p>
//         </div>
//         <h2>Get in touch with us</h2>
//         <p className={styles.comment}>
//           Leverage agile frameworks to provide a robust synopsis for strategy
//           foster collaborative thinking to further the overall value.
//         </p>
//         <div ef={form} className={styles.content}>
//           <div r className={styles.data}>
//             <input
//               name="user_name"
//               className={styles.input}
//               type="text"
//               placeholder="Nom Et Prénom*"
//             />
//             <input
//               className={styles.input}
//               name="user_email"
//               type="email"
//               placeholder="Email*"
//             />
//             <input
//               className={styles.input}
//               type="text"
//               placeholder="Numéro De Téléphone*"
//             />
//             <input className={styles.input} type="text" placeholder="Ville*" />
//           </div>
//           <textarea
//             className={styles.message}
//             type="text"
//             placeholder="Message"
//             maxLength={300}
//             name="message"
//           />
//         </div>
//         <button onClick={sendEmail} value="Send" type="submit">
//           Envoyer le message
//         </button>
//       </div>
//     </div>
//   );
// };

export const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_glzuakb",
        "template_s28ks1r",
        form.current,
        "8akmlbsN9emIAUjEx"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className={styles.contactus}>
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
        <form ref={form} className={styles.content}>
          <div className={styles.data}>
            <input
              name="from_name"
              className={styles.input}
              type="text"
              placeholder="Nom Et Prénom*"
            />
            <input
              className={styles.input}
              name="user_email"
              type="email"
              placeholder="Email*"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Numéro De Téléphone*"
            />
            <input className={styles.input} type="text" placeholder="Ville*" />
            <textarea
              className={styles.message}
              type="text"
              placeholder="Message"
              maxLength={300}
              name="message"
            />
          </div>
        </form>
        <button onClick={sendEmail} type="submit">
          Envoyer le message
        </button>
      </div>
    </div>
  );
};
