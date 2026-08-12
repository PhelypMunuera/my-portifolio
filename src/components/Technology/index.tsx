import style from './style.module.css'

type technology = {
    image:string,
    descriptionImg: string,
    technology: string
}

export function Technology({image, descriptionImg, technology}: technology){
    return(
        <div className={style.container}>
            <img src={image} alt={descriptionImg} />
            <span>{technology}</span>
        </div>
    )
}