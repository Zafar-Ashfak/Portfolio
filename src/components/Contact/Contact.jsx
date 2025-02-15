import React from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact me</h1>
      <form action="https://formspree.io/f/myzkdbvk" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" id="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="number" hidden>
            Contact number
          </label>
          <input
            type="text"
            id="number"
            placeholder="Contact number"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message here..."
            rows={10}
            cols={30}></textarea>
        </div>

        <div className={styles.btns}>
        <input type="reset" value="Reset" className={styles.btn} />
        <input type="submit" value="Submit" className={styles.btn} />
        </div>
      </form>
    </section>
  );
}

export default Contact;
