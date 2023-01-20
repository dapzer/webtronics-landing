import React, { FC } from "react";
import styles from "./contact-us.module.scss"
import ContactForm from "@/components/contact-us/form/ContactForm";

interface Props {
  id?: string
}

const ContactUs: FC<Props> = (props) => {
  return (
    <section className={styles.wrapper} id={props.id}>
      <div className={styles.body}>
        <h2>Contact  us</h2>
        <p>Do you have any kind of help please contact with us.</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
