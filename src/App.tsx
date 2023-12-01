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
import iconReactNative from "../public/assets/native.png";



import style from "./App.module.css";
import "./global.css";
import { Projects } from "./components/works/Project";
function App() {



  return (
    <div className="App">
      <main>
        <Header />
        <div className={style.content}>

          <section className={style.sectionAbout}>
            <div className={style.description}>
              <div className={style.aboutWork}>
                <div className={style.textoEstatico}>Eu sou:</div>
                <div className={style.textoDinamico}>
                  <ul>
                    <li><span>Marcos Vinicius</span></li>
                    <li><span>Desenvolvedor</span></li>
                    <li><span>Empreendedor</span></li>
                    <li><span>Musico</span></li>
                  </ul>
                </div>

              </div>
              <div className={style.aboutMe}>
                <h3>Frontend Developer</h3>
                <p>
                  Sou desenvolvedor frontend em busca de ideias e projetos para si e para
                  empresas ou terceiros, focado nas tecnologias: react js, react native,
                  typescript, node e Asp.net
                </p>
              </div>
            </div>
            <div className={style.avatar}>
              <img src={avatar} alt="avatar de um homem moreno" />
            </div>
          </section>

        </div>

        <div className={style.aboutMe} id="about">
          <img src={icon} alt="icone laranja " />
          <p >
            Desenvolvedor focado em criar aplicações Web e mobile com desing agradável sempre pensando no usuário final.
            minha maior motivação é desenvolver algo que seja útil no dia a dia das pessoas.
            Também tenho uma sólida experiencia com criações de Api com Node js.
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
          <Skills img={iconReactNative} title="React Native" />
        </section>
        <div className={style.projects}>
          <h3 className={style.titleCard}>Alguns dos meus trabalhos</h3>
          <Projects />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
