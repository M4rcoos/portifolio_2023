import style from './Header.module.css'

export function Header (){
    const logo = "</Marcos"
    const lastlogo= '>'
    return(
       <>
       <header className={style.header}>
        <div className={style.logo}>
        <h2> {logo } </h2>
        <h2> {lastlogo } </h2>
        </div>
        <ul className={style.button}>
  <li  className={style.li}><a href="#about">About Me</a></li>
  <li  className={style.li}><a href="#skill">Skill</a></li>
  <li  className={style.li}><a href="#Projects">Projects</a></li>
  <li  className={style.li}><a href='#contact'>Contact</a></li>
</ul>
       </header>
       </>
    )
}