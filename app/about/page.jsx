import React from 'react'
import styles from './about.module.css'
import SectionHeader from '../components/sectionHeader/SectionHeader'
import Image from "next/image";
import About from '../assets/about.jpg';

const page = () => {
  return (
    <section>
      <SectionHeader title="About Me" subtitle="Who I am and What I do"/>
      <div className={`container ${styles.container}`}>
        <article className={styles.image}>
          <Image src={About} alt='' />
        </article>
        <article className={styles.aboutContent}>
          <h4>My Name is Shivansh Mehta</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta repellendus, quae explicabo labore tempore, beatae qui, minima amet eius in quia! Iste accusamus cumque nesciunt.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure est incidunt, sed, labore accusamus tempora non ex aliquid excepturi corporis aliquam, autem corrupti asperiores quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, saepe eum. Ex dolores ratione temporibus. Dicta corrupti exercitationem id illum. Architecto necessitatibus fugiat ipsam saepe!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam pariatur inventore, sapiente quidem vitae aliquam dolorum veritatis ad odit magnam reprehenderit ipsa. Praesentium, culpa!</p>

          <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`}download rel="noopener noreferrer">Download Resume</a>
        </article>
      </div>
    </section>
  )
}

export default page
