import style from './Header.module.css'
import { useEffect, useState } from "react";

export function Header (){

  const [toggle,setToggle] =useState(false)

const toggleHumbuger =()=>{
  setToggle(!toggle)
}   
    const logo = "</Marcos"
    const lastlogo= '>'
    return(
       <>
       <header className={`${style.nav} ${toggle&&style.active}`}>
       <button onClick={toggleHumbuger} className={style.buttonMobile }>
       <span className={style.hamburger} ></span>
       </button>
        <div className={style.logo}>
        <h2> {logo } </h2>
        <h2> {lastlogo } </h2>
        </div>
        <ul className={style.button}>
  <li  className={style.li}><a href="#about">Sobre</a></li>
  <li  className={style.li}><a href="#skill">Skill</a></li>
  <li  className={style.li}><a href="#Projects">Projetos</a></li>
  <li  className={style.li}><a href='#contact'>Contato</a></li>
</ul>
       </header>
       </>
    )
}