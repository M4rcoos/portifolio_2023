

import style from './Skills.module.css'

type Props ={
    title:string
    img: string
}
export function Skills ({title, img}:Props){
    return(
       <section className={style.sectionCard}>
        
        <div className={style.card}>
            <img src={img} alt={`icone da tecnologia ${title}`} />
            <p>{title}</p>
        </div>
       </section>
    )
}