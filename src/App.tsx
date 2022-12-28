
import { Header } from './components/header/Header'
import { Skills } from './components/skills/Skills'

import avatar from '../public/assets/avatar.svg'
import icon from "../public/assets/icon.svg"

import iconNode from '../public/assets/iconNodejs.svg'
import iconHtml from '../public/assets/iconHtml.svg'
import iconJavaScript from '../public/assets/iconJavaScript.svg'
import iconGit from '../public/assets/iconGit.svg'
import iconCss from '../public/assets/iconCss.svg'
import iconReact from '../public/assets/iconReact.svg'

import style from './App.module.css'
import './global.css'

function App() {


  return (
    <div className="App">
      <Header/>
      <main>
        <section className={style.sectionAbout}>
        <div className={style.aboutWork}>
      <h1>Marcos vinicius</h1>
      <h3>Frontend Developer</h3>
      <p>Frontend developer looking for ideas and projects for himself and others, focused on technologies: react js, react native, typescript.</p>
        </div>
        <div className={style.avatar}>
        <img src={avatar} alt="avatar de um homem moreno" />
        </div>
        </section>
        <div className={style.aboutMe}>
          <img src={icon} alt="icone laranja " />
          <p>A few years ago, I became interested in developing websites and interfaces. Since then, I have been steadily improving my skills. Now I am developing websites and web applications to order or for myself.</p>
        </div>
        <h3 className={style.titleCard}>My Skills</h3>
    <section className={style.cardSkill}>
    <Skills img={iconHtml} title="Html"/>
    <Skills img={iconJavaScript} title="JavaScript"/>
    <Skills img={iconCss} title="Css"/>
    <Skills img={iconGit} title="Git"/>
    <Skills img={iconNode} title="NodeJs"/>
    <Skills img={iconReact} title="React"/>
    </section>
      </main>
    </div>
  ) 
}

export default App
