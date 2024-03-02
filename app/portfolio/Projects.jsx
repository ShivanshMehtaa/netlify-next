import React from 'react'
import styles from "./portfolio.module.css"
import Card from '../components/card/Card'
import Image from 'next/image'
import Link from 'next/link'

const Projects = ({projects}) => {
  return (
    <div className={styles.projects}>
    {
        projects.map(({id, image, category, title, description, demo, github}) =>
            <Card key={id} className={styles.project}>
                <div className={styles.image}>
                    <Image src={image} alt=''/>
                </div>
                <div className={styles.content}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div className={styles.cCta}>
                        <Link href={demo} className={`${styles.btn} ${styles.primary}`}
                        target='blank' rel='noopener norefer'
                        >Demo
                        </Link>
                        <Link href={github} className={`${styles.btn} ${styles.primary}`}
                        target='blank' rel='noopener norefer'
                        >Github
                        </Link>
                    </div>
                </div> 
            </Card>
            
        )
    }
    </div>
  )
}

export default Projects
