import React from 'react'
import styles from "./card.module.css"

const Card = ({children, className}) => {
  return (
    <article className={`${styles.card} ${className}`}>
        {children}
    </article>
  )
}

export default Card
