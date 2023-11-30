import 'react-multi-carousel/lib/styles.css';
import style from './Projeto.module.css'
import { useEffect, useState } from 'react';
import { ImgToProjects } from '../ImgToProjects/ImgToProjects';
import Slider from "react-slick";




export function Projects(this: any, target: Object, propertyName: string) {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const date = new Date();
  type data = {
    name: string;
    id: number;
    description: string;
    deploy_url: string;
    img: string
  };
  type dataToGit = {
    name: string;
    id: number;
    description: string;
    html_url: string;
    language: string

  };



  const projects: data[] = [
    {
      name: "Party Time-Fullstack",
      id: 0,
      description: "Crie sua festa",
      img: "../assets/party.png",
      deploy_url: "https://projeto-festas-fullstack-6s9h.vercel.app/"
    },
    {
      name: "R.A Assistencia Técnica",
      id: 1,
      description: "Projeto feito como freelancer para uma assistência técnica ",
      img: "../assets/assistencia.png",
      deploy_url: "https://ra-assistencia.vercel.app/"
    },
    {
      name: "Lista de Participante",
      id: 2,
      description: "Projeto mobile com React Native",
      img: "../assets/mobileLista.png",
      deploy_url: "https://github.com/M4rcoos/ListaParticipantMobile"
    },
    {
      name: "Formulário",
      id: 0,
      description: "Formulário com react",
      img: "../assets/formulario.png",
      deploy_url: "https://formulario-multistep-com-react.vercel.app/"
    },
    {
      name: "Radar do brás",
      id: 3,
      description: "Projeto Mobile para lojas e usúarios do Brás-SP",
      img: "../assets/radar.jpg",
      deploy_url: "https://api.whatsapp.com/send?phone=5511930772498&text=Ol%C3%A1%20Marcos%20tudo%20bem?%0A%0Adei%20uma%20olhada%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20dar%20uma%20olha%20no%20projeto%20do%20Radar%20do%20Br%C3%A1s,%20seria%20poss%C3%ADvel%20me%20mandar%20o%20Apk?"
    },
    {
      name: "ACDM",
      id: 3,
      description: "Pagína Web criada em um treinamento voluntário",
      img: "../assets/acdm.png",
      deploy_url: "https://acdm.vercel.app"
    },
   
  ]


  const [repository, setRepository] = useState<dataToGit[]>([])
  useEffect(() => {
    async function carregaRepositorios() {
      const repos = await fetch('https://api.github.com/users/M4rcoos/repos',);
      const repositorios = await repos.json();

      setRepository(repositorios)
    }
    carregaRepositorios();
  }, []);


  return (
    <>

      <Slider {...settings}

      >

        {
          projects.map(projects => (
            <div className={style.cardProjectContainer}>

              <div  className={style.cardProject} id='Projects'>
                <div className={style.divImageProjects}>
                  <img src={projects.img} className={style.imageProject} />
                </div>
                <footer className={style.footerCard}>
                  <h1 key={projects.id} className={style.titleProject}>{projects.name}</h1>
                  <a href={projects.deploy_url} className={style.viewProject} target='_blank'>Ver Projeto</a>
                </footer>
              </div>
            </div>

          ))
        }

      </Slider>
      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >


        {
          projects.map(projects => (
            <div className={style.cardProject} id='Projects'>
              <h3 key={projects.id}>{projects.name}</h3>
              <p className={style.description}>{projects.description}</p>
              <ImgToProjects img={projects.img} />
              <div className={style.content} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
              
              <a  href={projects.deploy_url} target='_blank'>Ver Projeto</a>
              </div>
            </div>
          ))
        }

      </Carousel>
      <h3 className={style.titleCard}>Projetos do repositório git</h3>

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
       
     
        {
          repository.map(repository=>(
            <div className={style.cardProject} id='Projects'>
              <h3 key={repository.id}>{repository.name}</h3>
              <p>{}</p>
              <p>Tecnologia mais usada: <br /><i>
              {repository.language}
                </i></p>
                <div className={style.content} style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
              <a href={repository.html_url} target='_blank'>ver código</a>
              </div>
            </div>
          ))
        }
       
        

      </Carousel> */}

    </>
  )
}
