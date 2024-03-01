import React from "react";
import styles from "./section-header.module.css";

const SectionHeader = ({title, subtitle}) => {
  return (
    <header className={styles.sectionHeader}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </header>
  )
}

export default SectionHeader
