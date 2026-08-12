// import iconHtml from '../../assets/iconHtml.png'
// import iconCss from '../../assets/iconCss.png'
// import iconGIt from '../../assets/iconGIt.png'
// import iconReact from '../../assets/iconReact.png'
// import iconTs from '../../assets/iconTs.png'
// import iconJs from '../../assets/iconJs.png'
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import style from './style.module.css'
import type { ReactElement } from "react"
// import codeIcon from '../../assets/codeIcon.png'
type ProjectProps = {
    image: string,
    descriptionImg: string,
    title: string,
    description: string,
    when: string,
    technology?: ReactElement
}
export function Project({image, descriptionImg, title, description, when, technology}:ProjectProps ) {
    return(
        <>
        <div className={style.container}>
            <img src={image} alt={descriptionImg} />
            <div className={style.containerDescription}>
                <div className={style.containerTitle}>
                    <div></div>
                    <h1>{title}</h1>
                    <h2>{when}</h2>
                </div>
                <p>{description}</p>
                <div>{technology}</div>
            </div>
        <a className={style.btnViewInGit} href="">
            <button>
                <LuSquareArrowOutUpRight />
            </button>
        </a>
        </div>
        </>
    )
} 