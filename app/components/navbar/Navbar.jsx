'use client'

import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'

import {FaBars} from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { GOMoon, GoMoon, GoSün} from "react-icons/go";
import { usePathname } from 'next/navigation';

const data=[
    {id:1, link:'/',caption:'Home'},
    {id:2, link:'/about',caption:'About'},
    {id:3, link:'/services',caption:'Services'},
    {id:4, link:'/portfolio',caption:'Portfolio'},
    {id:5, link:'/contact',caption:'Contact'},
]

const Navbar = () => {
    const[navOpen,setNavOpen] = useState(false);
    const pathname = usePathname();

    useEffect(()=>{
        if(window.innerWidth >600){
            setNavOpen(true);
        }
    },[navOpen])

    const closenavHandler = ()=>{
        if(window.innerWidth <=600){
            setNavOpen(false);
        }
    }

  return (
    <nav className={styles.nav}>
        <div className={`container ${styles.navContainer}`}>
            <Link href="/" className={styles.navLogo}
                onClick={closenavHandler}
            >SHIVANSH MEHTA</Link>
            {navOpen &&<ul className={styles.navItems}>
                {
                    data.map(({id,link,caption})=><li key={id}>
                        <Link href={link}
                        onClick={closenavHandler}
                        className={pathname===link ? "active":"empty"}
                        >{caption}</Link>
                    </li>)
                }
            </ul>}
            <div className={styles.navBtns}>
                <button className={styles.themeBtn}>
                    <GoMoon/>
                </button>
                <button className={styles.navBtn}
                onClick={()=> setNavOpen(!navOpen)}>
                    {
                        navOpen?
                        <AiOutlineClose/>:
                        <FaBars/>   
                    }
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
