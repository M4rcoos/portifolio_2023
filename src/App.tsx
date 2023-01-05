import { Header } from "./components/header/Header";
import { Skills } from "./components/skills/Skills";
import { Footer } from "./components/footer/Footer";

import avatar from "../public/assets/avatar.svg";
import icon from "../public/assets/icon.svg";

import iconNode from "../public/assets/iconNodejs.svg";
import iconHtml from "../public/assets/iconHtml.svg";
import iconJavaScript from "../public/assets/iconJavaScript.svg";
import iconGit from "../public/assets/iconGit.svg";
import iconCss from "../public/assets/iconCss.svg";
import iconReact from "../public/assets/iconReact.svg";
import gif from '../public/assets/UI Developer.gif'

import style from "./App.module.css";
import "./global.css";
import { Projects } from "./components/projects/Project";
function App() {
  return (
    <div className="App">
      <div className={style.responsive}>
     <div className={style.construction}>      


     </div>
       <h2>Aplicação para dispositivos menores que 1200 pixels, ainda está em desenvolvimento, tente acessar pelo computador.</h2>
     </div>
      <main>
      <Header />
        <section className={style.sectionAbout}>
          <div className={style.aboutWork}>
            <h1>Marcos vinicius</h1>
            <h3>Frontend Developer</h3>
            <p>
              Frontend developer looking for ideas and projects for himself and
              others, focused on technologies: react js, react native,
              typescript.
            </p>
          </div>
          <div className={style.avatar}>
            <img src={avatar} alt="avatar de um homem moreno" />
          </div>
        </section>
        <div className={style.aboutMe} id="about">
          <img src={icon} alt="icone laranja " />
          <p >
            I like the technology area since I was little, and I'm having the
            opportunity to study and show my ability developing web interfaces
            on a daily basis, my focus is to constantly improve myself aiming at
            corporate and professional growth.
          </p>
        </div>
        <h3 className={style.titleCard}>My Skills</h3>
        <section className={style.cardSkill}>
          <Skills img={iconHtml} title="Html" />
          <Skills img={iconJavaScript} title="JavaScript" />
          <Skills img={iconCss} title="Css" />
          <Skills img={iconGit} title="Git" />
          <Skills img={iconNode} title="NodeJs" />
          <Skills img={iconReact} title="React" />
        </section>
        <div className={style.projects}>
          <h3 className={style.titleCard}>My Works</h3>
          <Projects />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
