import style from './ImgToProjects.module.css'

type Props ={
    img: string
}

export function ImgToProjects ({img}:Props){
    return(
       <section className={style.sectionCard} id='skill'>
        <div className={style.card} >
            <img src={img} alt={'icone da tecnologia '} />
        </div>
       </section>
    )
}
