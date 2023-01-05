import style from "./Footer.module.css";
import iconeEmail from '/public/assets/email.svg'
import iconeGit from '/public/assets/catGit.svg'
import iconeLinkedin from '/public/assets/linkedin.svg'

export function Footer() {
  const logo = "</Marcos";
  const lastlogo = ">";
  return (
    <>
      <div className={style.content}>
        <div className={style.container}>
          <div className={style.logo}>
            <h2> {logo} </h2>
            <h2> {lastlogo} </h2>
          </div>
          <p className={style.description}>
          If you like my work and want to get in touch with me, don't hesitate to send me a message.
          </p>
        </div>
          <div className={style.contact} id='contact'>
            <h3>Contacts</h3>
            <div className={style.socialMidia}>
                <div className={style.section}>
                    <a href="mailto:souza.marcosv2@gmail.com?subject=assunto"  target='_blank'>
                    <img src={iconeEmail} alt="icone do email" />
                   souza.marcosv2@gmail.com
                    </a>
                </div>
                <div className={style.section}>
                <a href="https://github.com/M4rcoos"target='_blank'>
                <img src={iconeGit} alt="icone do github" />
                   M4rcoos
                </a>
                </div>
                <div className={style.section}>
                <a href="https://www.linkedin.com/in/m4rcosvinicius/" target='_blank'>
                <img src={iconeLinkedin} alt="icone do linkekdin" />
                   @M4rcosv
                </a>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}
