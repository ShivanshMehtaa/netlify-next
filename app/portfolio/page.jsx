'use client'

import React, { useState } from 'react'
import styles from "./portfolio.module.css"
import SectionHeader from '../components/sectionHeader/SectionHeader'
import { data } from "./data"
import CategoryButtons from './CategoryButtons'
import Projects from './Projects'

const Page = () => {
  const [projects, setProjects] = useState(data)
  const categories = data.map(item => item.category);
  const uniqueCategories = ["ALL", ...new Set(categories)]
  const filterProjectsHandler = (category) => {
    if (category === "ALL") {
      setProjects(data);
      return;
    }
    const filteredProjects=  data.filter( project => project.category === category )
    setProjects(filteredProjects)
}

return (
  <section>
    <SectionHeader title="My Projects" subtitle="My recent projects please filter them through the buttons" />
    <div className="container">
      <CategoryButtons categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
      <Projects projects={projects}/>
    </div>
  </section>
)
}

export default Page
