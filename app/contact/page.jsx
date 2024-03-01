import React from "react";
import styles from "./contact.module.css";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const pafe = () => {
  return (
    <section>
      <SectionHeader
        title="Get in Touch"
        subtitle="Contact me via these options listed below"
      />
      <div className={`container ${styles.contactWrapper}`}>
        <a
          href="mailto:shivanshmehta0000@gmail.com"
          className={styles.contactOption}
          target="blank"
          rel="noopener noreferrer"
        >
          <MdOutlineEmail className={styles.contactIcon} />
        </a>
        <a
          href="https://wa.me/+918815152527"
          className={styles.contactOption}
          target="blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className={styles.contactIcon} />
        </a>
      </div>
    </section>
  );
};

export default pafe;
