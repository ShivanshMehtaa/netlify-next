'use client'

import React, { useState } from 'react'
import styles from "./portfolio.module.css"

const CategoryButtons = ({categories, onFilterProjects}) => {
    const [activeCategory, setActiveCategory] = useState('ALL')

    const changeCategoryHandler = (activeCategory)=>{
        setActiveCategory(activeCategory)
        onFilterProjects(activeCategory)
    }


  return (
    <div className={styles.categories}>
        {
            categories.map(category => 
                <button key={category}
                    className={`btn ${styles.catBtn}
                    ${activeCategory == category ? "primary" :""}`}
                    onClick={()=>changeCategoryHandler(category)}
                >    
                {category}
                </button>
                )
        }
    </div>
  )
}

export default CategoryButtons
