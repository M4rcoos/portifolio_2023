import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './Project.module.css'
import { useEffect,useState } from 'react';


  export function Projects(this:any, target: Object, propertyName: string){
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
      const date = new Date();
      type data = {
        name: string;
        id:number;
        description:string;
        html_url: string;
        language:string
        
      };
      const [repository, setRepository] =  useState<data[]> ([])
      useEffect(() => {
        async function carregaRepositorios () {
          const repos = await fetch('https://api.github.com/users/M4rcoos/repos',);
          const repositorios = await repos.json();

          setRepository(repositorios)
        }
        carregaRepositorios();
      }, []);

  function descriptiontest(date:data){
  if(date.description==null){
    return(
      <h3>não existe descrição nesse projeto</h3>
    )
  }
  }

    return (
        <>
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
            <div className={style.cardProject}>
              <h3 key={repository.id}>{repository.name}</h3>
              <p>{}</p>
              <p>Tecnologia mais ultilizada: <br /><i>
              {repository.language}
                </i></p>
              <a href={repository.html_url} target='_blank'>Saiba Mais</a>
            </div>
          ))
        }
       
        

      </Carousel>
    
        </>
    )
  }
