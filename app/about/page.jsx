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
          <p>Aspiring web developer with knowledge of various development technologies. I typically use React and Next JS in the client, Node JS, Python and its REST frameworks on the server, and use HTTP for communication between the client and server. Currently, I focus on pursuing machine learning with the help of Python and its various libraries like TensorFlow, OpenCV, Pandas, Matplotlib, Numpy, etc.</p>
          <p>Achievements in DSA include: 200+ questions in <strong>Leetcode</strong> and <strong>code360</strong> platform, with various achievement like achiver and intermediate in the code360 pplatform in various different topics including HashMaps, Tries, BST, Binary Trees, Linked List, Recursion, etc</p>
          <p>On the look for internship/ part time job opportunities that can help me upskill and also provide me with the experience of the corporate world</p>
          

          <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`}download rel="noopener noreferrer">Download Resume</a>
        </article>
      </div>
    </section>
  )
}

export default page
