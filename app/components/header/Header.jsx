import React from 'react'
import styles from "./header.module.css";
import Link from "next/link";
import Image from 'next/image';

import Image1 from '../../assets/one.jpg';
import Image2 from '../../assets/four.jpg';
import Image3 from '../../assets/about.jpg';
import Image4 from '../../assets/two.jpg';


const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
        <div className={styles.headerLeft}>
            <h1>Hi, My Name is Shivansh Mehta</h1>
            <p>
            Aspiring web developer with knowledge of various development technologies. I typically use React and Next JS in the client, Node JS, Python and its REST frameworks on the server, and use HTTP for communication between the client and server. 
            <br /> <br />Currently, I focus on pursuing machine learning with the help of Python and its various libraries like TensorFlow, OpenCV, Pandas, Matplotlib, Numpy, etc.
            </p>
            <div className={styles.headerCta}>
              
                <a href="https://drive.google.com/file/d/1qgqhG8GtNomgJsFeree1d8sCoHB5E8GK/view?usp=drive_link" target='blank' className='btn'>Resume</a>
                <a href="https://drive.google.com/drive/folders/1YGhX55V45XiVkma8qxqFe0LdvvIux4zn" target='blank' className='btn primary'>Certificates</a>
                
            </div>
        </div>
        <div className={styles.headerRight}>
            <article className={styles.card1}>
              <Image src={Image1} alt=''/>
            </article>
            <article className={styles.card2}>
              <Image src={Image2} alt=''/>
            </article>
            <article className={styles.card3}>
              <Image src={Image3} alt=''/>
            </article>
            <article className={styles.card4}>
              <Image src={Image4} alt=''/>
            </article>
        </div>
    </header>
  )
}

export default Header
